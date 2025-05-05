"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface FooterProps {
  className?: string;
}

export function Footer({ className = "" }: FooterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className={`flex justify-between pt-12 text-sm text-gray-500 ${className}`}
    >
      <div className="flex items-center gap-0.5">
        © {new Date().getFullYear()}, <p>somewhere in the metaverse.</p>
      </div>
      <Link href="/contact" className="relative group">
        <span className="cursor-pointer">👋 Chat</span>
        <span className="absolute left-0 right-0 bottom-0 h-px bg-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
      </Link>
    </motion.div>
  );
}
