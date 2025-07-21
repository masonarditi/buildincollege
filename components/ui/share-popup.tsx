/* eslint-disable @typescript-eslint/no-unused-vars */
 
'use client';

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SharePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SharePopup({ isOpen, onClose }: SharePopupProps) {
  const handleShare = React.useCallback(async () => {
    const shareData = {
      title: 'BuildInCollege - Free Resources for College Builders',
      text: 'found this list of free stuff for college founders - free cursor pro, openai credits, etc. check it out!',
      url: window.location.origin,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback to clipboard
        await navigator.clipboard.writeText(shareData.url);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      // Optionally handle error (e.g., show a toast)
    }
    onClose();
  }, [onClose]);

  const handleClose = React.useCallback(() => {
    onClose();
  }, [onClose]);

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          
          {/* Modal */}
          <motion.div
            className="relative bg-background border rounded-lg shadow-lg p-6 w-full max-w-md mx-4"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1 hover:bg-muted rounded-md transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Content */}
            <div className="space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-lg font-semibold">Enjoying BuildInCollege?</h2>
                <p className="text-sm text-muted-foreground">
                  Share it with a friend
                </p>
              </div>

              <Button onClick={handleShare} className="w-full">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 