"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
      title: "Registro",
      description:
        "A student management system for modern schools built with Django and PostgreSQL.",
      year: "2023",
      link: "https://github.com/Oluwaseun241/registro",
      tags: ["Django", "Python", "PostgreSQL", "REST API"],
    },
    {
      title: "Nuage",
      description:
        "A cloud storage service with features like file sharing and collaboration.",
      year: "2022",
      link: "https://github.com/Oluwaseun241/nuage",
      tags: ["FastAPI", "Python", "MongoDB", "Docker"],
    },
    {
      title: "Hexlock",
      description:
        "A secure password manager application with encryption and secure storage.",
      year: "2022",
      link: "https://github.com/Oluwaseun241/hexlock",
      tags: ["Python", "Cryptography", "Security", "SQLite"],
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
            <h1 className="text-4xl font-bold text-black">
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
              <p className="text-lg text-gray-700">
                A collection of selected projects showcasing my experience in
                backend development using Python, Django, FastAPI, and other
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
                      <h2 className="text-xl font-medium group-hover:text-gray-600 transition-colors">
                        {project.title}
                      </h2>
                      <span className="text-gray-500 text-sm">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-gray-700">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600"
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
