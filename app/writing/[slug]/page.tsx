import { Metadata } from "next/types";
import { notFound } from "next/navigation";
import { Animation, Navigation, Footer } from "../../components/global";
import {
  getArticleBySlug,
  getAllArticles,
  ArticleMetadata,
} from "../../lib/markdown";

interface Article extends ArticleMetadata {
  content: string;
  excerpt?: string;
}

type ParamsType = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: ParamsType;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = (await getArticleBySlug(slug)) as Article;

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.excerpt || `Article by Oluwaseun Tanimola`,
    openGraph: {
      title: article.title,
      description: article.excerpt || `Article by Oluwaseun Tanimola`,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({ params }: { params: ParamsType }) {
  const { slug } = await params;
  const article = (await getArticleBySlug(slug)) as Article;

  if (!article) {
    notFound();
  }

  return (
    <Animation>
      <div className="min-h-screen bg-white dark:bg-black p-8">
        <div className="max-w-3xl mx-auto space-y-12 pt-12">
          <Navigation />

          <article
            className="prose dark:prose-invert max-w-none 
            prose-headings:font-bold prose-headings:tracking-tight 
            prose-h1:text-4xl prose-h1:mb-8 prose-h1:font-bold
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:font-bold
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:font-bold
            prose-p:my-4 prose-p:leading-7
            prose-a:text-blue-600 dark:prose-a:text-blue-400 
            prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 
            prose-pre:p-0 prose-pre:rounded-lg 
            prose-code:text-gray-800 dark:prose-code:text-gray-200 
            prose-code:bg-gray-100 dark:prose-code:bg-gray-800 
            prose-code:px-1 prose-code:py-0.5 prose-code:rounded 
            prose-code:before:content-none prose-code:after:content-none
            prose-strong:font-bold prose-strong:text-gray-900 dark:prose-strong:text-gray-100
            prose-em:text-gray-700 dark:prose-em:text-gray-300
            prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
            prose-li:my-2
            prose-blockquote:border-l-4 prose-blockquote:border-gray-300 dark:prose-blockquote:border-gray-700
            prose-blockquote:pl-4 prose-blockquote:italic
            prose-img:rounded-lg prose-img:my-8
            prose-hr:my-8 prose-hr:border-gray-200 dark:prose-hr:border-gray-800
            [&>*]:mb-4 [&>*:last-child]:mb-0"
          >
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <div className="text-gray-500 dark:text-gray-400 mb-8">
              {article.date}
            </div>
            <div
              className="prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 
                prose-pre:p-4 prose-pre:rounded-lg 
                prose-code:text-gray-800 dark:prose-code:text-gray-200 
                prose-code:bg-gray-100 dark:prose-code:bg-gray-800 
                prose-code:px-1 prose-code:py-0.5 prose-code:rounded 
                prose-code:before:content-none prose-code:after:content-none
                [&>*]:mb-4 [&>*:last-child]:mb-0
                [&>h2]:mt-8 [&>h2]:mb-4 [&>h2]:font-bold [&>h2]:text-2xl
                [&>h3]:mt-6 [&>h3]:mb-3 [&>h3]:font-bold [&>h3]:text-xl
                [&>p]:my-4
                [&>ul]:my-4 [&>ul]:pl-6
                [&>ol]:my-4 [&>ol]:pl-6
                [&>li]:my-2
                [&>pre]:my-6
                [&>blockquote]:my-6
                [&>hr]:my-8"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>

          <Footer />
        </div>
      </div>
    </Animation>
  );
}
