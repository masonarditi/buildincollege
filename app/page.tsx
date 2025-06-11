'use client';

import { Component as ResourceTable } from "@/components/table-with-images";
import { FellowshipsTable } from "@/components/fellowships-table";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<'credits' | 'fellowships' | 'all'>('credits');

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <motion.h1 
        className="text-3xl font-semibold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Free Stuff for College Builders
      </motion.h1>
      
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex gap-2 p-1 bg-muted rounded-lg w-fit">
          <button
            onClick={() => setActiveTab('credits')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === 'credits' 
                ? 'bg-background text-foreground shadow-sm' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Free Stuff
          </button>
          <button
            onClick={() => setActiveTab('fellowships')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === 'fellowships' 
                ? 'bg-background text-foreground shadow-sm' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Fellowships
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === 'all' 
                ? 'bg-background text-foreground shadow-sm' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            All
          </button>
        </div>
      </motion.div>
      
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {activeTab === 'credits' && <ResourceTable />}
        {activeTab === 'fellowships' && <FellowshipsTable />}
        {activeTab === 'all' && (
          <div className="space-y-12">
            <div>
              <h2 className="text-xl font-semibold mb-6">Free Stuff</h2>
              <ResourceTable />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-6">Fellowships</h2>
              <FellowshipsTable />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
