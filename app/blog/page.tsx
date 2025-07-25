'use client';

import { motion } from "framer-motion";
import { MoveRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Blog() {
  const router = useRouter();

  const blogPosts = [
    {
      id: "intro-to-vibe-coding-for-students",
      title: "Intro to Vibe Coding for Students",
      excerpt: "Transform your coding experience with aesthetic tools, AI assistants, and beautiful development environments that make programming actually enjoyable.",
      date: "January 25, 2025",
      readTime: "8 min read",
      author: "Build in College",
      tags: ["Vibe Coding", "Student Tools", "AI Coding"],
      slug: "intro-to-vibe-coding-for-students"
    }
  ];

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <motion.div 
          className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
              }
            }
          }}
        >
          <motion.div 
            className="text-center mb-16"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Build in College <span className="text-spektr-cyan-50">Blog</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Guides, tutorials, and insights for student developers. Learn about the latest tools, coding techniques, and resources to accelerate your journey.
            </p>
          </motion.div>

          <motion.div 
            className="w-full max-w-4xl"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
          >
            <div className="grid gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="p-8 border border-border rounded-xl bg-card hover:bg-muted/50 transition-colors cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => router.push(`/blog/${post.slug}`)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold mb-3 hover:text-spektr-cyan-50 transition-colors">
                        {post.title}
                      </h2>
                      
                      <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Button variant="ghost" className="gap-2">
                      Read More <MoveRight className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="text-center mt-16"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
            }}
          >
            <div className="bg-muted/50 rounded-xl p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">More Content Coming Soon</h2>
              <p className="text-muted-foreground mb-6">
                We're working on comprehensive guides, tool comparisons, and step-by-step tutorials for student developers.
              </p>
              <Button 
                size="lg" 
                className="gap-2 hover:scale-105 transition-transform"
                onClick={() => router.push('/dashboard')}
              >
                Explore Tools <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}