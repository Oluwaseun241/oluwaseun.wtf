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
            <h1 className="text-4xl font-bold text-black">Your Name</h1>
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
                    <h3 className="font-medium">Senior Designer</h3>
                    <span className="text-gray-500 text-sm">
                      2022 — Present
                    </span>
                  </div>
                  <p className="text-gray-700">Company One</p>
                  <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
                    <li>
                      Led design for flagship product, increasing user
                      engagement by 45%
                    </li>
                    <li>
                      Mentored junior designers, implemented design system
                    </li>
                    <li>
                      Collaborated with cross-functional teams on product
                      strategy
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Product Designer</h3>
                    <span className="text-gray-500 text-sm">2019 — 2022</span>
                  </div>
                  <p className="text-gray-700">Company Two</p>
                  <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
                    <li>
                      Designed user interfaces for mobile and web applications
                    </li>
                    <li>Conducted user research and usability testing</li>
                    <li>
                      Created wireframes, prototypes, and high-fidelity designs
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">UI/UX Designer</h3>
                    <span className="text-gray-500 text-sm">2017 — 2019</span>
                  </div>
                  <p className="text-gray-700">Company Three</p>
                  <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
                    <li>
                      Redesigned company website, improving conversion rate by
                      25%
                    </li>
                    <li>
                      Created brand identity guidelines and marketing materials
                    </li>
                    <li>
                      Developed UI pattern library for consistent product
                      experience
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-6">Education</h2>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Master of Design</h3>
                    <span className="text-gray-500 text-sm">2015 — 2017</span>
                  </div>
                  <p className="text-gray-700">University Name</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">
                      Bachelor of Arts, Visual Communication
                    </h3>
                    <span className="text-gray-500 text-sm">2011 — 2015</span>
                  </div>
                  <p className="text-gray-700">College Name</p>
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
