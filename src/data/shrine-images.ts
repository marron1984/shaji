/**
 * 社寺の写真（シンプルに神社・お寺の2種類）
 */

// 神社の写真（鳥居）
const shrineImage =
  "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=640&q=80";

// お寺の写真（寺院）
const templeImage =
  "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=640&q=80";

/**
 * タイプに応じた画像を返す
 * @param type "shrine" | "temple"
 */
export function getShrineImageByType(type: string): string {
  return type === "shrine" ? shrineImage : templeImage;
}

/**
 * slug から画像を返す（後方互換）
 * タイプが不明な場合は神社画像をデフォルトで返す
 */
export function getShrineImage(_slug: string): string {
  return shrineImage;
}

export { shrineImage, templeImage };
