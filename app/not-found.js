"use client";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-screen bg-gray-100"
    >
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2">Oops! The page you're looking for doesn’t exist.</p>
      <a href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
        Go Back Home
      </a>
    </motion.div>
  );
}