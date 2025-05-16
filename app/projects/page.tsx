"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Animation, Navigation, Footer } from "../components/global";

interface Project {
  title: string;
  description: string;
  year: string;
  link: string;
  tags: string[];
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      title: "Tastrees AI",
      description:
        "You've got an image of already cooked food say less we will help you recreate it by serving you the recipe and instructions.",
      year: "2024",
      link: "https://www.tastrees.xyz",
      tags: ["Golang", "Nuxt"],
    },
    {
      title: "Apple Alert",
      description: "Show alerts in the Apple style, like the one used when toggling silent mode",
      year: "2024",
      link: "https://github.com/Oluwaseun241/apple-alert",
      tags: ["React Native", "Typescript", "Expo"],
    },
    {
      title: "Registro",
      description: "A blockchain-based event ledger.",
      year: "2024",
      link: "https://github.com/Oluwaseun241/registro",
      tags: ["Golang", "Kafka"],
    },
    {
      title: "Hexlock",
      description:
        "A CLI tool for file encryption, decryption and compression.",
      year: "2023",
      link: "https://github.com/Oluwaseun241/hexlock",
      tags: ["Golang", "Cryptography", "Security", "CLI"],
    },
  ];

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

          {/* Projects Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-8"
          >
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                A collection of selected projects showcasing my experience in
                backend development using Golang, Python, Typescript, and other
                technologies.
              </p>
            </div>

            <div className="space-y-12 mt-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <Link
                    href={project.link}
                    target="_blank"
                    className="block space-y-2"
                  >
                    <div className="flex justify-between items-baseline">
                      <h2 className="text-xl font-medium group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300 transition-colors">
                        {project.title}
                      </h2>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-600 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
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
