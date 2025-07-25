'use client';

import { motion } from "framer-motion";
import { MoveRight, Calendar, Clock, User, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function IntroToVibeCoding() {
  const router = useRouter();

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <header className="mb-12">
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Intro to <span className="text-spektr-cyan-50">Vibe Coding</span> for Students
              </h1>
              
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  January 25, 2025
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  8 min read
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Build in College
                </div>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Transform your coding experience with aesthetic tools, AI assistants, and beautiful development environments that make programming actually enjoyable.
              </p>
            </motion.div>
          </header>

          {/* Content */}
          <motion.div 
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8 text-foreground">
              
              <section>
                <h2 className="text-2xl font-bold mb-4">What is Vibe Coding?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Vibe coding isn&apos;t just about writing code—it&apos;s about creating an environment where programming feels inspiring, enjoyable, and sustainable. It&apos;s the difference between grinding through assignments in a plain text editor and coding in a beautiful, AI-powered environment that actually makes you excited to build.
                </p>
                
                {/* Tool Preview Images */}
                <div className="grid md:grid-cols-4 gap-4 my-8 p-6 bg-muted/30 rounded-lg">
                  <div className="text-center">
                    <img 
                      src="/logos/cursor.jpeg" 
                      alt="Cursor Pro - AI code editor"
                      className="w-16 h-16 mx-auto rounded-xl object-contain mb-2"
                    />
                    <p className="text-sm font-medium">Cursor Pro</p>
                    <p className="text-xs text-muted-foreground">AI Editor</p>
                  </div>
                  
                  <div className="text-center">
                    <img 
                      src="/logos/openai.webp" 
                      alt="ChatGPT Plus - AI assistant"
                      className="w-16 h-16 mx-auto rounded-xl object-contain mb-2"
                    />
                    <p className="text-sm font-medium">ChatGPT Plus</p>
                    <p className="text-xs text-muted-foreground">AI Assistant</p>
                  </div>
                  
                  <div className="text-center">
                    <img 
                      src="/logos/github.png" 
                      alt="GitHub Copilot - AI coding"
                      className="w-16 h-16 mx-auto rounded-xl object-contain mb-2"
                    />
                    <p className="text-sm font-medium">GitHub Copilot</p>
                    <p className="text-xs text-muted-foreground">AI Coding</p>
                  </div>
                  
                  <div className="text-center">
                    <img 
                      src="/logos/figma.avif" 
                      alt="Figma Pro - Design tool"
                      className="w-16 h-16 mx-auto rounded-xl object-contain mb-2"
                    />
                    <p className="text-sm font-medium">Figma Pro</p>
                    <p className="text-xs text-muted-foreground">Design</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  For students especially, vibe coding can transform your relationship with programming from a necessary chore into a creative outlet. When your tools are beautiful, intelligent, and fun to use, you&apos;re more likely to experiment, learn, and push through challenging concepts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">The Core Elements of Vibe Coding</h2>
                
                <h3 className="text-xl font-semibold mb-3 text-spektr-cyan-50">1. Aesthetic Development Environment</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Your code editor is where you&apos;ll spend hundreds of hours. Tools like <strong>Cursor Pro</strong> offer beautiful interfaces with smooth animations, customizable themes, and clean typography that make coding feel less like work and more like art.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 text-spektr-cyan-50">2. AI-Powered Assistance</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Modern vibe coding leverages AI to reduce friction and boost creativity. <strong>GitHub Copilot</strong> suggests code as you type, while <strong>ChatGPT Plus</strong> helps you brainstorm, debug, and learn new concepts. These aren&apos;t just productivity tools—they&apos;re creative partners that help you focus on problem-solving rather than syntax.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 text-spektr-cyan-50">3. Seamless Workflow Integration</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Vibe coding means your tools work together harmoniously. Your editor, version control, deployment, and documentation all feel like parts of a cohesive system rather than disconnected tools you have to wrestle with.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Essential Vibe Coding Tools for Students</h2>
                
                <div className="bg-muted/50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-3">Free Options That Don&apos;t Compromise</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>VS Code with Extensions:</strong> Completely free with thousands of themes and extensions</li>
                    <li><strong>GitHub Codespaces:</strong> 60 hours/month free cloud development environment</li>
                    <li><strong>Replit:</strong> Browser-based coding with beautiful interface and instant deployment</li>
                  </ul>
                </div>

                <div className="bg-muted/50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-3">Premium Tools with Student Discounts</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                      <img 
                        src="/logos/cursor.jpeg" 
                        alt="Cursor Pro interface"
                        className="w-12 h-12 rounded-lg object-contain flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-semibold mb-2">Cursor Pro</h4>
                        <p className="text-sm text-muted-foreground mb-2">$240/year free for students</p>
                        <p className="text-sm text-muted-foreground">AI-powered editor with beautiful interface and context-aware suggestions</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                      <img 
                        src="/logos/openai.webp" 
                        alt="ChatGPT Plus interface"
                        className="w-12 h-12 rounded-lg object-contain flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-semibold mb-2">ChatGPT Plus</h4>
                        <p className="text-sm text-muted-foreground mb-2">2 months free for US/Canada students</p>
                        <p className="text-sm text-muted-foreground">Advanced AI assistance for coding, research, and learning</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                      <img 
                        src="/logos/github.png" 
                        alt="GitHub Copilot interface"
                        className="w-12 h-12 rounded-lg object-contain flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-semibold mb-2">GitHub Copilot</h4>
                        <p className="text-sm text-muted-foreground mb-2">Free with GitHub Student Pack</p>
                        <p className="text-sm text-muted-foreground">AI code completion that understands your coding style</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                      <img 
                        src="/logos/notion.png" 
                        alt="Notion AI interface"
                        className="w-12 h-12 rounded-lg object-contain flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-semibold mb-2">Notion AI</h4>
                        <p className="text-sm text-muted-foreground mb-2">Free with GitHub Student Pack</p>
                        <p className="text-sm text-muted-foreground">Beautiful documentation with AI-powered writing assistance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Setting Up Your Vibe Coding Environment</h2>
                
                <h3 className="text-xl font-semibold mb-3">Step 1: Choose Your Foundation</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Start with either Cursor Pro (if you want the premium experience) or VS Code with a beautiful theme like Dracula Pro or Tokyo Night. The key is choosing something that makes you excited to open your editor.
                </p>
                
                <h3 className="text-xl font-semibold mb-3">Step 2: Add AI Assistance</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Enable GitHub Copilot for code suggestions and keep ChatGPT Plus open in a browser tab for research, debugging, and learning. These AI tools reduce the friction of coding and help you stay in flow state longer.
                </p>
                
                <h3 className="text-xl font-semibold mb-3">Step 3: Optimize Your Workspace</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Customize your color scheme, install helpful extensions, and set up keyboard shortcuts that feel natural. Your development environment should feel like a personalized creative space, not a generic tool.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">The Psychology of Vibe Coding</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Beautiful, well-designed tools aren&apos;t just about aesthetics—they have real psychological benefits. When your coding environment feels polished and professional, you&apos;re more likely to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Spend more time coding and less time procrastinating</li>
                  <li>Feel pride in your work and want to share it with others</li>
                  <li>Push through difficult problems instead of giving up</li>
                  <li>Experiment with new ideas and technologies</li>
                  <li>Develop a sustainable, long-term coding practice</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  For students juggling multiple subjects, vibe coding can make programming assignments feel less like homework and more like creative projects you actually want to work on.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Common Vibe Coding Mistakes to Avoid</h2>
                
                <h3 className="text-xl font-semibold mb-3">Over-Customization</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  It&apos;s easy to spend hours tweaking themes and extensions instead of actually coding. Find a setup you love, then stick with it long enough to be productive.
                </p>
                
                <h3 className="text-xl font-semibold mb-3">Tool Overload</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Don&apos;t try to use every new tool at once. Start with 2-3 core tools and master them before adding more to your workflow.
                </p>
                
                <h3 className="text-xl font-semibold mb-3">Ignoring the Fundamentals</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Beautiful tools won&apos;t replace understanding algorithms, data structures, and core programming concepts. Use vibe coding to make learning these fundamentals more enjoyable, not to avoid them.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Getting Started Today</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The best time to start vibe coding is right now. You don&apos;t need to overhaul your entire setup—just make one small improvement that brings you joy. Maybe it&apos;s installing a beautiful theme, trying GitHub Copilot, or setting up a cleaner workspace.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Remember, vibe coding is deeply personal. What works for one developer might not work for another. Experiment, find what makes you excited to code, and don&apos;t be afraid to evolve your setup as you grow as a programmer.
                </p>
                
                <div className="bg-spektr-cyan-50/10 border border-spektr-cyan-50/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-spektr-cyan-50">Ready to Transform Your Coding Experience?</h3>
                  <p className="text-muted-foreground mb-4">
                    Check out our curated collection of vibe coding tools specifically chosen for students. From free options to premium tools with student discounts, we&apos;ve got everything you need to make coding enjoyable.
                  </p>
                  <Button 
                    className="gap-2"
                    onClick={() => router.push('/vibe-coding-tools')}
                  >
                    Explore Vibe Coding Tools <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </section>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div 
            className="mt-16 pt-8 border-t border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex justify-between items-center">
              <Button 
                variant="ghost" 
                onClick={() => router.push('/blog')}
                className="gap-2"
              >
                ← Back to Blog
              </Button>
              
              <Button 
                onClick={() => router.push('/dashboard')}
                className="gap-2"
              >
                Explore Tools <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </motion.article>
      </div>
    </div>
  );
}