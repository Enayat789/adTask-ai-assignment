"use client";
import React from "react";
import { motion } from "framer-motion";

export function TargetAudienceCard() {
  return (
    <motion.div
      className="flex flex-col bg-gradient-to-t from-gray-800 to-gray-900 items-center justify-between w-[26%] h-[75vh] border border-gray-700 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="w-[50%] h-[40%] rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-xl relative overflow-hidden"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
      >
        <motion.div
          className="absolute inset-0 bg-white opacity-30 blur-2xl"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
      <div className="flex flex-col p-4 px-6 gap-2 text-sm text-center">
        <h1 className="font-bold text-white">Reach Target Audience</h1>
        <p className="font-extralight text-gray-300">
          Pinpoint the perfect audience with precision. Our AI-driven targeting
          ensures every message resonates where it matters most.
        </p>
      </div>
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <TargetAudienceCard />
    </div>
  );
}
