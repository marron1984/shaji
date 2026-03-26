import type { Article } from "@/types";

interface ArticleContentProps {
  article: Article;
}

export default function ArticleContent({ article }: ArticleContentProps) {
  return (
    <div className="space-y-8">
      {article.sections.map((section, i) => (
        <section key={i}>
          <h2 className="mb-3 text-xl font-bold text-gray-800">
            {section.heading}
          </h2>
          <p className="leading-relaxed text-gray-700 whitespace-pre-wrap">
            {section.body}
          </p>
        </section>
      ))}
    </div>
  );
}
