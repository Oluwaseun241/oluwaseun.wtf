"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Animation, Navigation, Footer } from "../components/global";

export default function CareerPage() {
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

          {/* Career Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-xl font-semibold mb-6 dark:text-white">
                Work Experience
              </h2>

              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium dark:text-white">AI Engineer</h3>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      Mar 2024 — May 2025
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Farm Monitor Africa
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                    <li>
                      Engineered a backend service for generating full-season farming calendars using AI and agronomic data (crop, soil, weather, location).
                    </li>
                    <li>
                      Designed adaptive scheduling system that regenerates activities based on 14-day weather forecasts.
                    </li>
                    <li>
                      Developed weekly yield prediction engine factoring in real-time weather and satellite indices (NDVI, SMI).
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium dark:text-white">
                      Backend Engineer
                    </h3>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      Jan 2024 — July 2024
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Faraday Africa
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                    <li>
                      Design and Built an ads microservice, efficiently
                      delivering targeted ads to users
                    </li>
                    <li>
                      Maintain and optimize the backend architecture, ensuring
                      seamless functionality, scalability and reliability
                      reducing response time per request from 1.2s to 400ms
                    </li>
                    <li>
                      Ensure comprehensive documentation of API for easier
                      collaboration with frontend team
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium dark:text-white">
                      Software Engineer
                    </h3>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      April 2023 — July 2023
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Cyber Junior (Web Development Agency)
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                    <li>
                      Successfuly developed and deployed an e-commerce website
                      serving 100+ orders per day
                    </li>
                    <li>Implemented test-driven development practices</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-6 dark:text-white">
                Education
              </h2>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium dark:text-white">
                      B.Tech Pure and Applied Physics
                    </h3>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      2019 — 2024
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Ladoke Akintola University of Technology, Nigeria
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium dark:text-white">
                      Certifications
                    </h3>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      2020 — 2023
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
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
