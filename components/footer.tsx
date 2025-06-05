/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';

export function Footer() {
  return (
    <motion.footer 
      className="border-t"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="max-w-6xl mx-auto px-4 h-12 flex items-center justify-center font-medium">
        <a 
          href="https://x.com/createdbymason"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          @createdbymason
        </a>
      </div>
    </motion.footer>
  );
} 