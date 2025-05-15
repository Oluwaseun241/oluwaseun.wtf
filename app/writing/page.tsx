import Link from "next/link";
import { getAllArticles } from "../lib/markdown";
import { AnimatedContent } from "../components/AnimatedContent";
import { Animation, Navigation, Footer } from "../components/global";

export default async function WritingPage() {
  const articles = await getAllArticles();

  return (
    <Animation>
      <div className="min-h-screen bg-white dark:bg-black p-8">
        <div className="max-w-3xl mx-auto space-y-12 pt-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-black dark:text-white">
              Oluwaseun Tanimola
            </h1>
            <Navigation />
          </div>

          {/* Writing Content */}
          <AnimatedContent>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Articles about backend engineering. I write to share technical
                insights and document my journey through software engineering.
              </p>
            </div>

            <div className="space-y-10 mt-8">
              {articles.map((article, index) => (
                <div key={article.slug}>
                  <Link
                    href={`/writing/${article.slug}`}
                    className="block group space-y-2"
                  >
                    <div className="flex justify-between items-baseline">
                      <h2 className="text-xl font-medium group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300 transition-colors">
                        {article.title}
                      </h2>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {article.date}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {article.summary}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </AnimatedContent>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </Animation>
  );
}
