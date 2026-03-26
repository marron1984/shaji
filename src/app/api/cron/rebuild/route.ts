import { NextRequest, NextResponse } from "next/server";
import { getStats } from "@/lib/github-articles";

export async function GET(request: NextRequest) {
  // Vercel Cron認証（CRON_SECRET環境変数を設定推奨）
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const stats = getStats();

  // Vercelでは、このエンドポイントが呼ばれること自体が
  // ISR revalidation のトリガーになります。
  // 予約投稿記事の公開タイミングに合わせて
  // Vercelが自動的にページを再生成します。

  return NextResponse.json({
    ok: true,
    timestamp: new Date().toISOString(),
    stats,
    message: `Published: ${stats.published}, Scheduled: ${stats.scheduled}`,
  });
}
