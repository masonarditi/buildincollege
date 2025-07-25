'use client';

import { motion } from "framer-motion";
import { MoveRight, Sparkles, Code, Brain, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function VibeCodingTools() {
  const router = useRouter();

  const vibeTools = [
    {
      name: "Cursor Pro",
      value: "$240 free",
      description: "AI-powered code editor with beautiful interface and context-aware suggestions",
      logo: "/logos/cursor.jpeg",
      tags: ["AI Coding", "Free for Students"],
      setup: "Sign up with .edu email"
    },
    {
      name: "ChatGPT Plus",
      value: "$40 free",
      description: "2 months free for US/Canada students with GPT-4o, research tools, and coding help",
      logo: "/logos/openai.webp",
      tags: ["AI Assistant", "Free for Students"],
      setup: "US/Canada students with .edu email"
    },
    {
      name: "GitHub Copilot",
      value: "$100/year free",
      description: "AI pair programming with intelligent code suggestions that match your style",
      logo: "/logos/github.png",
      tags: ["AI Coding", "Free for Students"],
      setup: "Via GitHub Student Pack"
    },
    {
      name: "Notion AI",
      value: "$120/year free",
      description: "Beautiful documentation and project planning with AI-powered writing assistance",
      logo: "/logos/notion.png",
      tags: ["Documentation", "Productivity"],
      setup: "Via GitHub Student Pack"
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
            className="text-center mb-8"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-8 h-8 text-spektr-cyan-50" />
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                <span className="text-spektr-cyan-50">Vibe Coding</span> Tools
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Beautiful, AI-powered development tools that make coding enjoyable and productive for students.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 mb-16 w-full max-w-4xl"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
          >
            {vibeTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="p-6 border border-border rounded-xl bg-card hover:bg-muted/50 transition-colors cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => router.push('/dashboard')}
              >
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={tool.logo} 
                    alt={`${tool.name} logo`}
                    className="w-12 h-12 rounded-lg object-contain"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{tool.name}</h3>
                      <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-md text-xs font-medium">
                        {tool.value}
                      </span>
                    </div>
                    <div className="flex gap-2 mb-3">
                      {tool.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{tool.description}</p>
                
                <div className="text-sm">
                  <span className="font-medium">Quick Setup: </span>
                  <span className="text-muted-foreground">{tool.setup}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
            }}
          >
            <div className="text-center p-6">
              <Code className="w-12 h-12 mx-auto mb-4 text-spektr-cyan-50" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Coding</h3>
              <p className="text-muted-foreground">Intelligent code suggestions and completions that understand your context</p>
            </div>
            
            <div className="text-center p-6">
              <Brain className="w-12 h-12 mx-auto mb-4 text-spektr-cyan-50" />
              <h3 className="text-xl font-semibold mb-2">Smart Assistance</h3>
              <p className="text-muted-foreground">AI-powered research, debugging, and learning support</p>
            </div>
            
            <div className="text-center p-6">
              <Zap className="w-12 h-12 mx-auto mb-4 text-spektr-cyan-50" />
              <h3 className="text-xl font-semibold mb-2">Beautiful Interfaces</h3>
              <p className="text-muted-foreground">Clean, modern tools designed for an enjoyable coding experience</p>
            </div>
          </motion.div>

          <motion.div 
            className="text-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } }
            }}
          >
            <div className="bg-muted/50 rounded-xl p-8 mb-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Upgrade Your Coding Experience</h2>
              <p className="text-muted-foreground mb-6">
                Discover our complete collection of aesthetic tools, AI assistants, and student resources.
              </p>
              <Button 
                size="lg" 
                className="gap-2 hover:scale-105 transition-transform"
                onClick={() => router.push('/dashboard')}
              >
                Explore All Tools <MoveRight className="w-4 h-4" />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Curated for aesthetics • Built for productivity • Made for students
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}