"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Animation, Navigation, Footer } from "../components/global";

export default function CareerPage() {
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

          {/* Career Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-xl font-semibold mb-6">Experience</h2>

              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Backend Developer</h3>
                    <span className="text-gray-500 text-sm">
                      2022 — Present
                    </span>
                  </div>
                  <p className="text-gray-700">Freelance</p>
                  <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
                    <li>
                      Developed RESTful APIs using Django and FastAPI for web
                      applications
                    </li>
                    <li>
                      Implemented database models and optimized query
                      performance
                    </li>
                    <li>
                      Containerized applications with Docker for easy deployment
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Backend Engineer</h3>
                    <span className="text-gray-500 text-sm">2021 — 2022</span>
                  </div>
                  <p className="text-gray-700">Tech Startup</p>
                  <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
                    <li>
                      Built scalable backend services with Python and PostgreSQL
                    </li>
                    <li>
                      Implemented authentication and authorization systems
                    </li>
                    <li>Collaborated with frontend team to integrate APIs</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Junior Developer</h3>
                    <span className="text-gray-500 text-sm">2020 — 2021</span>
                  </div>
                  <p className="text-gray-700">Web Development Agency</p>
                  <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
                    <li>
                      Assisted in developing backend systems for client projects
                    </li>
                    <li>Managed database operations and API integrations</li>
                    <li>Implemented test-driven development practices</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-6">Education</h2>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">
                      B.Tech Pure and Applied Physics
                    </h3>
                    <span className="text-gray-500 text-sm">
                      November 2019 — October 2024
                    </span>
                  </div>
                  <p className="text-gray-700">
                    Ladoke Akintola University of Technology, Nigeria
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Certifications</h3>
                    <span className="text-gray-500 text-sm">2020 — 2023</span>
                  </div>
                  <p className="text-gray-700">
                    Python Developer Certification, Django for Web Development,
                    Docker Essentials
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </Animation>
  );
}
