"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Animation, Navigation, Footer } from "./components/global";
import { AnimatedContent } from "./components/AnimatedContent";

export default function HomePage() {
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

          {/* Main Content */}
          <AnimatedContent>
            <div className="prose max-w-none space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                👋 Hi, I am a software engineer with 3+ years of experience, excited by opportunities to solve challenging problems. I am experienced with crafting scalable backend solutions and efficient systems.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300">
                I am currently looking into mobile development using React-Native and AI engineering. 🤖 Aside from working on personal projects, I enjoy watching soccer ⚽ and playing video games 🎮.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300">
                🚀 Kindly reach out if you are hiring or need an engineer for your project! My expertise lies in Golang, Node.js and Python projects but am open to exploring new tech.
              </p>
            </div>
          </AnimatedContent>

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
                    href="https://github.com/Oluwaseun241/apple-alert"
                    target="_blank"
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                  >
                    Apple Alert
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
