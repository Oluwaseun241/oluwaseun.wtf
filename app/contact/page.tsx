"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Animation, Navigation, Footer } from "../components/global";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Simulate form submission
    try {
      // In a real application, you would send the data to your API
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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

          {/* Contact Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-8"
          >
            <div className="prose max-w-none">
              <h2 className="text-2xl font-medium">Get in touch</h2>
              <p className="text-lg text-gray-700">
                Feel free to reach out about backend development opportunities,
                collaborations, or just to say hello.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 transition-colors ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  {submitStatus === "success" && (
                    <p className="text-green-600">
                      Thank you for your message. I'll get back to you soon!
                    </p>
                  )}

                  {submitStatus === "error" && (
                    <p className="text-red-600">
                      There was an error sending your message. Please try again.
                    </p>
                  )}
                </form>
              </div>

              <div className="md:w-1/2 space-y-8">
                <div>
                  <h3 className="font-medium mb-2">Email</h3>
                  <a
                    href="mailto:oluwaseuntanimola@gmail.com"
                    className="text-gray-700 hover:text-black transition-colors"
                  >
                    oluwaseuntanimola@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Social</h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://linkedin.com/in/oluwaseun-tanimola-67705721b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-black transition-colors"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/Oluwaseun241"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-black transition-colors"
                      >
                        GitHub
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Location</h3>
                  <p className="text-gray-700">Nigeria</p>
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
