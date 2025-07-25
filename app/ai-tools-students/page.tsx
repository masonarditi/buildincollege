'use client';

import { motion } from "framer-motion";
import { MoveRight, Sparkles, Code, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function AIToolsStudents() {
  const router = useRouter();

  const featuredTools = [
    {
      name: "ChatGPT Plus",
      value: "$40 free",
      description: "2 months free for US/Canada students with GPT-4o, image generation, and advanced research tools",
      logo: "/logos/openai.webp",
      tags: ["Free for Students", "AI Assistant"],
      setup: "Visit chatgpt.com/students with .edu email"
    },
    {
      name: "Cursor Pro",
      value: "$240 free",
      description: "1 year free AI code editor with context-aware suggestions and integrated AI chat",
      logo: "/logos/cursor.jpeg", 
      tags: ["Free for Students", "AI Coding"],
      setup: "Sign up at cursor.com/students with .edu email"
    },
    {
      name: "Claude Credits",
      value: "$50+",
      description: "API credits for student builders through Anthropic's education program",
      logo: "/logos/anthropic-small.png",
      tags: ["API Credits", "AI"],
      setup: "Apply via student builder program"
    },
    {
      name: "GitHub Copilot",
      value: "Free",
      description: "AI coding assistant included free with GitHub Student Developer Pack",
      logo: "/logos/github.png",
      tags: ["Free for Students", "AI Coding"],
      setup: "Apply for GitHub Student Pack"
    }
  ];

  return (
    <div className="w-full min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-8 h-8 text-spektr-cyan-50" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Free AI Tools for <span className="text-spektr-cyan-50">College Students</span>
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Access premium AI coding assistants, research tools, and API credits worth thousands of dollars—completely free with your student email.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {featuredTools.map((tool, index) => (
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center p-6">
            <Code className="w-12 h-12 mx-auto mb-4 text-spektr-cyan-50" />
            <h3 className="text-xl font-semibold mb-2">AI Coding Assistants</h3>
            <p className="text-muted-foreground">Cursor Pro, GitHub Copilot, and other AI-powered coding tools</p>
          </div>
          
          <div className="text-center p-6">
            <Brain className="w-12 h-12 mx-auto mb-4 text-spektr-cyan-50" />
            <h3 className="text-xl font-semibold mb-2">Research & Writing</h3>
            <p className="text-muted-foreground">ChatGPT Plus, Claude, and Perplexity Pro for academic work</p>
          </div>
          
          <div className="text-center p-6">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-spektr-cyan-50" />
            <h3 className="text-xl font-semibold mb-2">API Credits</h3>
            <p className="text-muted-foreground">OpenAI, Anthropic, and other AI API credits for projects</p>
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-muted/50 rounded-xl p-8 mb-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Ready to Access Everything?</h2>
            <p className="text-muted-foreground mb-6">
              View our complete database of free tools, software credits, and fellowships curated specifically for college builders.
            </p>
            <Button 
              size="lg" 
              className="gap-2 hover:scale-105 transition-transform"
              onClick={() => router.push('/dashboard')}
            >
              View Full Dashboard <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Updated regularly with new student programs and verified eligibility requirements
          </p>
        </motion.div>
      </div>
    </div>
  );
}