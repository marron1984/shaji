export const SITE_URL = "https://shaji-matome.click";
export const SITE_NAME = "社寺まとめ";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;

/** JSON-LD をページに埋め込むためのヘルパー */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
