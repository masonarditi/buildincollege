'use client';

import { UnifiedTable } from "@/components/unified-table";
import { freeStuffData } from "@/data/free-stuff";
import { fellowshipsData } from "@/data/fellowships";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<'credits' | 'fellowships' | 'all'>('all');

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
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === 'all' 
                ? 'bg-background text-foreground shadow-sm' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            All
          </button>
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
        </div>
      </motion.div>
      
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {activeTab === 'credits' && (
          <UnifiedTable data={freeStuffData} category="free-stuff" />
        )}
        {activeTab === 'fellowships' && (
          <UnifiedTable data={fellowshipsData} category="fellowships" />
        )}
        {activeTab === 'all' && (
          <UnifiedTable data={[...fellowshipsData, ...freeStuffData]} category="all" />
        )}
      </motion.div>
    </div>
  );
}
