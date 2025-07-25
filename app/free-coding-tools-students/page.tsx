'use client';

import { motion } from "framer-motion";
import { MoveRight, Code, Terminal, Layers, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function FreeCodingToolsStudents() {
  const router = useRouter();

  const codingTools = [
    {
      name: "Cursor Pro",
      value: "$240 free",
      description: "AI-powered code editor with context-aware suggestions, built-in chat, and VSCode compatibility",
      logo: "/logos/cursor.jpeg",
      tags: ["AI Coding", "Free for Students"],
      setup: "Sign up with .edu email"
    },
    {
      name: "JetBrains Suite",
      value: "$700+ value",
      description: "Complete IDE suite including IntelliJ IDEA, PyCharm, WebStorm, and more professional tools",
      logo: "/logos/github.png", // Using GitHub as placeholder - add JetBrains logo
      tags: ["IDEs", "Free for Students"],
      setup: "Via GitHub Student Pack"
    },
    {
      name: "GitHub Copilot",
      value: "$100/year",
      description: "AI pair programmer that suggests code completions and entire functions as you type",
      logo: "/logos/github.png",
      tags: ["AI Coding", "Free for Students"],
      setup: "Included with GitHub Student Pack"
    },
    {
      name: "Google Colab Pro",
      value: "$120/year",
      description: "Free GPU compute for machine learning, data science projects, and AI experimentation",
      logo: "/logos/google.jpeg",
      tags: ["ML/AI", "Free GPU"],
      setup: "Sign up with student email"
    }
  ];

  const categories = [
    {
      icon: Code,
      title: "Code Editors & IDEs",
      description: "Cursor Pro, JetBrains suite, Visual Studio, and advanced development environments",
      tools: ["Cursor Pro", "IntelliJ IDEA", "PyCharm", "WebStorm"]
    },
    {
      icon: Terminal,
      title: "AI Coding Assistants", 
      description: "GitHub Copilot, Cursor AI, and other intelligent code completion tools",
      tools: ["GitHub Copilot", "Cursor AI", "Tabnine", "Codeium"]
    },
    {
      icon: Layers,
      title: "Cloud Development",
      description: "GitHub Codespaces, Gitpod, and cloud-based development environments",
      tools: ["Codespaces", "Gitpod", "Replit", "CodeSandbox"]
    },
    {
      icon: Zap,
      title: "Learning Platforms",
      description: "Coding bootcamps, algorithm practice, and skill development resources",
      tools: ["LeetCode Premium", "Educative.io", "Pluralsight", "Udemy"]
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
          <div className="flex items-center justify-center gap-3 mb-6">
            <Code className="w-10 h-10 text-spektr-cyan-50" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Free <span className="text-spektr-cyan-50">Coding Tools</span> for Students
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional development tools, AI coding assistants, and cloud environments—completely free for college students.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {codingTools.map((tool, index) => (
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
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-md text-xs font-medium">
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
                <span className="font-medium">Access: </span>
                <span className="text-muted-foreground">{tool.setup}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {categories.map((category) => (
            <div key={category.title} className="p-6 border border-border rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-8 h-8 text-spektr-cyan-50" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-muted rounded-full text-xs font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div 
          className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-xl p-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">🚀 Getting Started Guide</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="w-8 h-8 bg-spektr-cyan-50 text-white rounded-full flex items-center justify-center text-sm font-bold mb-3">1</div>
                <h3 className="font-semibold mb-2">Apply for Student Status</h3>
                <p className="text-sm text-muted-foreground">Verify your .edu email with GitHub Student Pack or individual tool providers</p>
              </div>
              <div>
                <div className="w-8 h-8 bg-spektr-cyan-50 text-white rounded-full flex items-center justify-center text-sm font-bold mb-3">2</div>
                <h3 className="font-semibold mb-2">Download & Install</h3>
                <p className="text-sm text-muted-foreground">Set up your development environment with free professional tools</p>
              </div>
              <div>
                <div className="w-8 h-8 bg-spektr-cyan-50 text-white rounded-full flex items-center justify-center text-sm font-bold mb-3">3</div>
                <h3 className="font-semibold mb-2">Start Building</h3>
                <p className="text-sm text-muted-foreground">Use AI assistants and professional IDEs to accelerate your coding projects</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-muted/50 rounded-xl p-8 mb-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Explore All Student Resources</h2>
            <p className="text-muted-foreground mb-6">
              Discover our complete collection of free tools, from coding assistants to cloud credits and design software.
            </p>
            <Button 
              size="lg" 
              className="gap-2 hover:scale-105 transition-transform"
              onClick={() => router.push('/dashboard')}
            >
              Browse All Tools <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Most tools renew annually • New student programs added regularly
          </p>
        </motion.div>
      </div>
    </div>
  );
}