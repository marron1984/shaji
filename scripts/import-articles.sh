#!/bin/bash
# kijiseisei リポから全記事を取り込み、予約投稿日時を振り分けるスクリプト
#
# 使い方: bash scripts/import-articles.sh

set -e

REPO="marron1984/kijiseisei"
BRANCH="claude/seo-article-good-fortune-Bb3OI"
API_BASE="https://api.github.com/repos/${REPO}/contents/articles"
RAW_BASE="https://raw.githubusercontent.com/${REPO}/${BRANCH}/articles"
OUTPUT_DIR="public/articles"

# 予約投稿設定
START_DATE="2026-03-27"  # 開始日（明日）
TIMES=("0900" "1200" "1900")  # 朝9時、昼12時、夜19時
ARTICLES_PER_SLOT=1  # 1スロットあたり1記事（1日3記事）

echo "=== kijiseisei リポから記事を取り込みます ==="
echo "開始日: ${START_DATE}"
echo "投稿ペース: 1日3記事（9:00/12:00/19:00）"
echo ""

# Step 1: カテゴリ一覧を取得
echo "[1/3] カテゴリ一覧を取得中..."
CATEGORIES=$(curl -s "${API_BASE}?ref=${BRANCH}" | python3 -c "
import sys, json
data = json.load(sys.stdin)
for item in data:
    if item['type'] == 'dir':
        print(item['name'])
" | sort)

CAT_COUNT=$(echo "$CATEGORIES" | wc -l)
echo "  ${CAT_COUNT} カテゴリ検出"

# Step 2: 全記事のファイル名を収集
echo "[2/3] 全カテゴリの記事一覧を取得中..."
ALL_ARTICLES=""
TOTAL=0

while IFS= read -r category; do
    [ -z "$category" ] && continue

    # URL エンコード
    ENCODED_CAT=$(python3 -c "import urllib.parse; print(urllib.parse.quote('${category}'))")

    FILES=$(curl -s "${API_BASE}/${ENCODED_CAT}?ref=${BRANCH}" | python3 -c "
import sys, json
data = json.load(sys.stdin)
if isinstance(data, list):
    for item in data:
        if item['name'].endswith('.txt'):
            print(item['name'])
" 2>/dev/null | sort)

    FILE_COUNT=$(echo "$FILES" | grep -c '.txt' || true)
    echo "  ${category}: ${FILE_COUNT} 記事"

    while IFS= read -r file; do
        [ -z "$file" ] && continue
        ALL_ARTICLES="${ALL_ARTICLES}${category}|${file}"$'\n'
        TOTAL=$((TOTAL + 1))
    done <<< "$FILES"

    # APIレート制限対策（60回/時）
    sleep 1
done <<< "$CATEGORIES"

echo "  合計: ${TOTAL} 記事"
DAYS_NEEDED=$(( (TOTAL + 2) / 3 ))
echo "  予約投稿期間: ${DAYS_NEEDED} 日間（約$(( DAYS_NEEDED / 30 ))ヶ月）"
echo ""

# Step 3: 記事をダウンロードして予約日時付きファイル名で保存
echo "[3/3] 記事をダウンロード＆予約投稿設定中..."

SLOT_INDEX=0
CURRENT_DATE="$START_DATE"
DOWNLOADED=0
ERRORS=0

while IFS='|' read -r category filename; do
    [ -z "$category" ] || [ -z "$filename" ] && continue

    # 予約日時を計算
    TIME_SLOT=${TIMES[$((SLOT_INDEX % 3))]}
    SCHEDULE_DATE="$CURRENT_DATE"

    # 元のファイル名から番号とタイトルを抽出
    NUMBER=$(echo "$filename" | grep -oP '^\d+')
    TITLE=$(echo "$filename" | sed 's/^[0-9]*_//' | sed 's/\.txt$//')

    # 新しいファイル名（予約日時付き）
    NEW_FILENAME="${NUMBER}_${SCHEDULE_DATE}-${TIME_SLOT}_${TITLE}.txt"

    # 出力ディレクトリ作成
    mkdir -p "${OUTPUT_DIR}/${category}"

    # raw URL からダウンロード
    ENCODED_CAT=$(python3 -c "import urllib.parse; print(urllib.parse.quote('${category}'))")
    ENCODED_FILE=$(python3 -c "import urllib.parse; print(urllib.parse.quote('${filename}'))")

    DOWNLOAD_URL="${RAW_BASE}/${ENCODED_CAT}/${ENCODED_FILE}"

    if curl -sf "$DOWNLOAD_URL" -o "${OUTPUT_DIR}/${category}/${NEW_FILENAME}"; then
        DOWNLOADED=$((DOWNLOADED + 1))
        echo "  [${DOWNLOADED}/${TOTAL}] ${category}/${NEW_FILENAME}"
    else
        ERRORS=$((ERRORS + 1))
        echo "  [ERROR] ${category}/${filename} のダウンロードに失敗"
    fi

    # 次のスロットへ
    SLOT_INDEX=$((SLOT_INDEX + 1))
    if [ $((SLOT_INDEX % 3)) -eq 0 ]; then
        # 3スロット消化したら翌日へ
        CURRENT_DATE=$(date -d "${CURRENT_DATE} + 1 day" +%Y-%m-%d)
    fi

done <<< "$ALL_ARTICLES"

echo ""
echo "=== 完了 ==="
echo "ダウンロード: ${DOWNLOADED} 記事"
echo "エラー: ${ERRORS} 件"
echo "予約期間: ${START_DATE} 〜 ${CURRENT_DATE}"
echo ""
echo "次のステップ: git add / commit / push"
