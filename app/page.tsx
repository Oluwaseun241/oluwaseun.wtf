"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Animation, Navigation, Footer } from "./components/global";

export default function Home() {
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

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="prose max-w-none"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I'm a B.Tech Physics student at Ladoke Akintola University of
              Technology and a Backend Engineer based in Nigeria. I specialize
              in Python, Django, and FastAPI to build robust, scalable web
              applications and RESTful APIs.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
              Currently developing backend solutions and available for new
              opportunities in software engineering.
            </p>
          </motion.div>

          {/* Recent & Working On Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h2 className="text-xl font-semibold mb-4 dark:text-white">
                Recently
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://www.tastrees.xyz"
                    target="_blank"
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                  >
                    Tastrees AI
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://github.com/Oluwaseun241/registro"
                    target="_blank"
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                  >
                    Registro
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/Oluwaseun241/hexlock"
                    target="_blank"
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                  >
                    Hexlock
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h2 className="text-xl font-semibold mb-4 dark:text-white">
                Skills
              </h2>
              <ul className="space-y-2">
                <li className="text-gray-700 dark:text-gray-300">
                  Golang, Python, Typescript
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  FastAPI, Express, React Native
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  PostgreSQL, MongoDB, SQLite
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  Docker, Kafka, RabbitMQ
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </Animation>
  );
}
