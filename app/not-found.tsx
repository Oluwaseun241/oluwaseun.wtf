"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Animation, Navigation, Footer } from "./components/global";

export default function NotFound() {
  return (
    <Animation>
      <div className="min-h-screen bg-white dark:bg-black p-8">
        <div className="max-w-3xl mx-auto space-y-12 pt-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-bold text-black dark:text-white">
              Oluwaseun Tanimola
            </h1>
            <Navigation />
          </motion.div>

          {/* Not Found Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-6 py-12"
          >
            <h2 className="text-6xl font-bold text-black dark:text-white">
              404
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              The page you are looking for doesn't exist.
            </p>
            <Link
              href="/"
              className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors rounded-md"
            >
              Go Home
            </Link>
          </motion.div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </Animation>
  );
}
