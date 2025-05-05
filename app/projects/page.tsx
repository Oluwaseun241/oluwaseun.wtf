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
      title: "Project One",
      description:
        "A minimal design project focused on user experience and interaction design.",
      year: "2023",
      link: "/projects/project-1",
      tags: ["Design", "UI/UX", "Research"],
    },
    {
      title: "Project Two",
      description:
        "An experimental web application exploring new interfaces for content consumption.",
      year: "2022",
      link: "/projects/project-2",
      tags: ["Web", "Experimental", "JavaScript"],
    },
    {
      title: "Project Three",
      description:
        "A branding and identity project for a sustainable product company.",
      year: "2021",
      link: "/projects/project-3",
      tags: ["Branding", "Identity", "Print"],
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

          {/* Projects Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-8"
          >
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700">
                A collection of selected projects across various disciplines
                including design, development, and creative explorations.
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
                  <Link href={project.link} className="block space-y-2">
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
