import Link from "next/link";
import type { Article } from "@/types";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="p-4">
        <div className="mb-2">
          <Tag label={article.categoryName} variant="gold" />
        </div>
        <h3 className="mb-1 text-lg font-bold text-gray-800">
          {article.title}
        </h3>
        <p className="mb-3 text-sm leading-relaxed text-gray-600">
          {article.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <time className="text-xs text-gray-400">{article.publishedAt}</time>
          <Link
            href={`/kaiun-guide/${article.slug}`}
            className="text-sm font-medium text-[var(--color-gold)] hover:underline"
          >
            続きを読む &rarr;
          </Link>
        </div>
      </div>
    </Card>
  );
}
