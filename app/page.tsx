'use client';

import { Component as ResourceTable } from "@/components/table-with-images";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <motion.h1 
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Free Stuff for College Builders
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ResourceTable />
      </motion.div>
    </div>
  );
}
