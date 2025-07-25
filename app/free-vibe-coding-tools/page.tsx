'use client';

import { motion } from "framer-motion";
import { MoveRight, Gift, Code, Cloud, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function FreeVibeCodingTools() {
  const router = useRouter();

  const freeVibeTools = [
    {
      name: "VS Code + Extensions",
      value: "100% Free",
      description: "Beautiful themes, AI extensions, and infinite customization possibilities",
      logo: "/logos/github.png", // Using as placeholder
      tags: ["Free Forever", "Customizable"],
      setup: "Download + install aesthetic themes"
    },
    {
      name: "GitHub Codespaces",
      value: "60 hours/month free",
      description: "Cloud development environment accessible anywhere with pre-configured setup",
      logo: "/logos/github.png",
      tags: ["Cloud IDE", "Free Tier"],
      setup: "Via GitHub Student Pack"
    },
    {
      name: "Replit",
      value: "Free + Student Perks",
      description: "Collaborative coding platform with beautiful interface and instant deployment",
      logo: "/logos/github.png", // Using as placeholder
      tags: ["Collaborative", "Instant Deploy"],
      setup: "Sign up with student email"
    },
    {
      name: "Gitpod",
      value: "50 hours/month free",
      description: "Spin up dev environments in seconds with clean, modern interface",
      logo: "/logos/github.png", // Using as placeholder
      tags: ["Instant Environment", "Free Tier"],
      setup: "Connect GitHub account"
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
              <Gift className="w-8 h-8 text-spektr-cyan-50" />
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                Free <span className="text-spektr-cyan-50">Vibe Coding</span> Tools
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Beautiful, powerful coding tools that cost absolutely nothing. Great vibes without breaking the bank.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 mb-16 w-full max-w-4xl"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
          >
            {freeVibeTools.map((tool, index) => (
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
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 rounded-md text-xs font-medium">
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
                  <span className="font-medium">Get Started: </span>
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
              <h3 className="text-xl font-semibold mb-2">Beautiful Themes</h3>
              <p className="text-muted-foreground">Hundreds of aesthetic themes and customization options</p>
            </div>
            
            <div className="text-center p-6">
              <Cloud className="w-12 h-12 mx-auto mb-4 text-spektr-cyan-50" />
              <h3 className="text-xl font-semibold mb-2">Cloud Development</h3>
              <p className="text-muted-foreground">Code from anywhere with cloud-based environments</p>
            </div>
            
            <div className="text-center p-6">
              <Smartphone className="w-12 h-12 mx-auto mb-4 text-spektr-cyan-50" />
              <h3 className="text-xl font-semibold mb-2">Mobile Friendly</h3>
              <p className="text-muted-foreground">Code on any device with responsive interfaces</p>
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
              <h2 className="text-2xl font-semibold mb-4">Start Your Free Coding Journey</h2>
              <p className="text-muted-foreground mb-6">
                Explore beautiful, powerful tools that make coding enjoyable without any cost.
              </p>
              <Button 
                size="lg" 
                className="gap-2 hover:scale-105 transition-transform"
                onClick={() => router.push('/dashboard')}
              >
                Browse All Free Tools <MoveRight className="w-4 h-4" />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Forever free • Beautiful by design • Professional grade
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}