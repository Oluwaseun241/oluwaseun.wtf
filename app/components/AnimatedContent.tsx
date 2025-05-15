"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedContentProps {
  children: ReactNode;
}

export function AnimatedContent({ children }: AnimatedContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {children}
    </motion.div>
  );
}
