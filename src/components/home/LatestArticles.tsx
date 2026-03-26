import type { Article } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import ArticleList from "@/components/article/ArticleList";

interface LatestArticlesProps {
  articles: Article[];
}

export default function LatestArticles({ articles }: LatestArticlesProps) {
  return (
    <section>
      <SectionHeading>開運ガイド 最新記事</SectionHeading>
      <div className="mt-6">
        <ArticleList articles={articles} />
      </div>
    </section>
  );
}
