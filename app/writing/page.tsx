"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Animation, Navigation, Footer } from "../components/global";

interface Article {
  title: string;
  summary: string;
  date: string;
  link: string;
  external?: boolean;
}

export default function WritingPage() {
  const articles: Article[] = [
    {
      title: "Designing for the Next Billion Users",
      summary: "How to create inclusive digital products for emerging markets.",
      date: "June 2023",
      link: "/writing/designing-for-next-billion",
    },
    {
      title: "The Future of Interaction Design",
      summary:
        "Exploring how AR, VR, and voice will reshape our digital experiences.",
      date: "March 2023",
      link: "/writing/future-of-interaction",
    },
    {
      title: "Why Minimalism Still Matters",
      summary:
        "In an era of feature-rich products, simplicity remains powerful.",
      date: "November 2022",
      link: "/writing/minimalism-matters",
    },
    {
      title: "Design Systems at Scale",
      summary:
        "Lessons learned from implementing design systems across large organizations.",
      date: "July 2022",
      link: "https://medium.com/example",
      external: true,
    },
  ];

  return (
    <Animation>
      <div className="min-h-screen bg-white p-8">
        <div className="max-w-3xl mx-auto space-y-12 pt-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-bold text-black">Your Name</h1>
            <Navigation />
          </motion.div>

          {/* Writing Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-8"
          >
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700">
                Essays and articles about design, technology, and creativity. I
                write to clarify my thinking and share insights from my work.
              </p>
            </div>

            <div className="space-y-10 mt-8">
              {articles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  {article.external ? (
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group space-y-2"
                    >
                      <div className="flex justify-between items-baseline">
                        <h2 className="text-xl font-medium group-hover:text-gray-600 transition-colors flex items-center">
                          {article.title}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1 opacity-70"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </h2>
                        <span className="text-gray-500 text-sm">
                          {article.date}
                        </span>
                      </div>
                      <p className="text-gray-700">{article.summary}</p>
                    </a>
                  ) : (
                    <Link href={article.link} className="block group space-y-2">
                      <div className="flex justify-between items-baseline">
                        <h2 className="text-xl font-medium group-hover:text-gray-600 transition-colors">
                          {article.title}
                        </h2>
                        <span className="text-gray-500 text-sm">
                          {article.date}
                        </span>
                      </div>
                      <p className="text-gray-700">{article.summary}</p>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </Animation>
  );
}
