/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function NavigationHeader() {
  return (
    <motion.header 
      className="border-b"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-6xl mx-auto px-4 h-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img 
            src="/buildincollege.png" 
            alt="Build in College Logo" 
            className="w-8 h-8 rounded-md"
          />
          <span className="font-semibold text-base">Build in College</span>
        </Link>
        
        <div className="flex items-center gap-1">
          <Link 
            href="/blog"
            className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </Link>
          <Link 
            href="/about"
            className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
        </div>
      </nav>
    </motion.header>
  );
} 