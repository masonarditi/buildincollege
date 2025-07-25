'use client';

import { motion } from "framer-motion";
import { MoveRight, Calendar, Clock, User, ExternalLink, CheckCircle, Download, Settings, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function StudentDeveloperSetupGuide() {
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
                The Complete <span className="text-spektr-cyan-50">Student Developer</span> Setup Guide 2025
              </h1>
              
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  January 25, 2025
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  15 min read
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Build in College
                </div>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Everything you need to build a professional development environment as a student. From free tools to premium software with student discounts.
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
              
              {/* Essential Tools Preview */}
              <div className="grid md:grid-cols-5 gap-4 my-8 p-6 bg-muted/30 rounded-xl">
                <div className="text-center">
                  <img 
                    src="/logos/cursor.jpeg" 
                    alt="Cursor Pro code editor"
                    className="w-16 h-16 mx-auto rounded-xl object-contain mb-2"
                  />
                  <p className="text-sm font-medium">Code Editor</p>
                </div>
                
                <div className="text-center">
                  <img 
                    src="/logos/github.png" 
                    alt="GitHub for version control"
                    className="w-16 h-16 mx-auto rounded-xl object-contain mb-2"
                  />
                  <p className="text-sm font-medium">Version Control</p>
                </div>
                
                <div className="text-center">
                  <img 
                    src="/logos/openai.webp" 
                    alt="ChatGPT Plus AI assistant"
                    className="w-16 h-16 mx-auto rounded-xl object-contain mb-2"
                  />
                  <p className="text-sm font-medium">AI Assistant</p>
                </div>
                
                <div className="text-center">
                  <img 
                    src="/logos/figma.avif" 
                    alt="Figma design tool"
                    className="w-16 h-16 mx-auto rounded-xl object-contain mb-2"
                  />
                  <p className="text-sm font-medium">Design</p>
                </div>
                
                <div className="text-center">
                  <img 
                    src="/logos/heroku.webp" 
                    alt="Heroku deployment"
                    className="w-16 h-16 mx-auto rounded-xl object-contain mb-2"
                  />
                  <p className="text-sm font-medium">Deployment</p>
                </div>
              </div>

              <section>
                <h2 className="text-2xl font-bold mb-4">Why Your Setup Matters</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Your development environment is more than just tools—it's your creative workspace. A well-configured setup can mean the difference between frustrating late-night debugging sessions and smooth, productive coding flows that help you learn faster and build better projects.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As a student, you have access to incredible tools that would normally cost thousands of dollars. This guide shows you how to claim them all and configure them into a professional development environment that rivals what senior developers use at top tech companies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Phase 1: Foundation (30 minutes)</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Start with these essential tools that every student developer needs. These form the backbone of your setup.
                </p>
                
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-8 h-8 bg-spektr-cyan-50 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">Apply for GitHub Student Pack</h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          This unlocks $200,000+ worth of free tools including GitHub Pro, Copilot, hosting credits, and premium software.
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>⏱️ 5 minutes</span>
                          <span>📧 Requires .edu email</span>
                          <span>🔄 Renews annually</span>
                        </div>
                      </div>
                      <img src="/logos/github.png" alt="GitHub" className="w-12 h-12 rounded-lg object-contain" />
                    </div>
                  </div>
                  
                  <div className="border border-border rounded-lg p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-8 h-8 bg-spektr-cyan-50 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">Choose Your Code Editor</h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          <strong>Cursor Pro</strong> (free for students) for AI-powered coding, or <strong>VS Code</strong> (free forever) with beautiful themes.
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>⏱️ 10 minutes</span>
                          <span>🎨 Customizable themes</span>
                          <span>🤖 AI assistance</span>
                        </div>
                      </div>
                      <img src="/logos/cursor.jpeg" alt="Cursor Pro" className="w-12 h-12 rounded-lg object-contain" />
                    </div>
                  </div>
                  
                  <div className="border border-border rounded-lg p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-8 h-8 bg-spektr-cyan-50 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">Get an AI Assistant</h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          <strong>ChatGPT Plus</strong> (2 months free for US/Canada students) or <strong>Claude</strong> (free tier + API credits).
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>⏱️ 5 minutes</span>
                          <span>🧠 Coding help</span>
                          <span>📚 Learning support</span>
                        </div>
                      </div>
                      <img src="/logos/openai.webp" alt="ChatGPT Plus" className="w-12 h-12 rounded-lg object-contain" />
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Phase 2: Development Stack (45 minutes)</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Build out your development capabilities with hosting, databases, and design tools.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Settings className="w-5 h-5 text-spektr-cyan-50" />
                      Backend & Hosting
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                        <img src="/logos/heroku.webp" alt="Heroku" className="w-8 h-8 rounded object-contain flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-semibold">Heroku (2 years free)</h4>
                          <p className="text-xs text-muted-foreground">Deploy apps instantly via GitHub Student Pack</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                        <img src="/logos/amazon-aws.png" alt="AWS" className="w-8 h-8 rounded object-contain flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-semibold">AWS Credits ($300+)</h4>
                          <p className="text-xs text-muted-foreground">Cloud computing and database hosting</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                        <img src="/logos/namecheap.svg" alt="Namecheap" className="w-8 h-8 rounded object-contain flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-semibold">Free Domain</h4>
                          <p className="text-xs text-muted-foreground">.me domain free with Student Pack</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Zap className="w-5 h-5 text-spektr-cyan-50" />
                      Design & Frontend
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                        <img src="/logos/figma.avif" alt="Figma" className="w-8 h-8 rounded object-contain flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-semibold">Figma Pro (Free)</h4>
                          <p className="text-xs text-muted-foreground">UI/UX design with .edu email</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                        <img src="/logos/framer.svg" alt="Framer" className="w-8 h-8 rounded object-contain flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-semibold">Framer Pro (Free)</h4>
                          <p className="text-xs text-muted-foreground">Interactive prototyping and web design</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                        <img src="/logos/adobe-creative-cloud.png" alt="Adobe" className="w-8 h-8 rounded object-contain flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-semibold">Adobe CC (60% off)</h4>
                          <p className="text-xs text-muted-foreground">Complete creative suite with student discount</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Phase 3: Productivity & Organization (30 minutes)</h2>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <img src="/logos/notion.png" alt="Notion" className="w-8 h-8 rounded" />
                      <h3 className="text-lg font-semibold">Notion AI</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Project planning, documentation, and AI-powered writing. Free with GitHub Student Pack.
                    </p>
                    <div className="text-xs text-muted-foreground">
                      Perfect for: Project docs, class notes, portfolio
                    </div>
                  </div>
                  
                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <img src="/logos/github.png" alt="GitHub" className="w-8 h-8 rounded" />
                      <h3 className="text-lg font-semibold">GitHub Projects</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Issue tracking, project boards, and collaboration. Free with GitHub Pro.
                    </p>
                    <div className="text-xs text-muted-foreground">
                      Perfect for: Code organization, team projects
                    </div>
                  </div>
                  
                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <img src="/logos/perplexity.png" alt="Perplexity" className="w-8 h-8 rounded" />
                      <h3 className="text-lg font-semibold">Perplexity Pro</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      AI-powered research and real-time information. 1 month free for students.
                    </p>
                    <div className="text-xs text-muted-foreground">
                      Perfect for: Research, staying current with tech
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Phase 4: Advanced Configuration</h2>
                
                <h3 className="text-xl font-semibold mb-3">Terminal & Command Line Setup</h3>
                <div className="bg-muted/50 rounded-lg p-6 mb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">macOS/Linux Students</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Install Homebrew package manager</li>
                        <li>• Setup Zsh with Oh My Zsh</li>
                        <li>• Install Node.js via nvm</li>
                        <li>• Configure Git with SSH keys</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Windows Students</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Install WSL2 (Windows Subsystem for Linux)</li>
                        <li>• Setup Windows Terminal with themes</li>
                        <li>• Install Node.js and Python</li>
                        <li>• Configure PowerShell profiles</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">Essential Browser Extensions</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Development Extensions</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• React Developer Tools</li>
                      <li>• Vue.js devtools</li>
                      <li>• JSON Viewer</li>
                      <li>• Wappalyzer (tech stack analyzer)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Productivity Extensions</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Grammarly</li>
                      <li>• LastPass or Bitwarden</li>
                      <li>• Momentum (new tab page)</li>
                      <li>• StayFocusd (time management)</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Sample Workflows for Different Majors</h2>
                
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Computer Science Major</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Daily Workflow:</h4>
                        <ol className="text-sm space-y-1 text-muted-foreground list-decimal list-inside">
                          <li>Open Cursor Pro with yesterday's project</li>
                          <li>Review GitHub notifications and issues</li>
                          <li>Use ChatGPT Plus for debugging help</li>
                          <li>Deploy to Heroku for testing</li>
                          <li>Document progress in Notion</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Key Tools:</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-muted rounded text-xs">Cursor Pro</span>
                          <span className="px-2 py-1 bg-muted rounded text-xs">GitHub Copilot</span>
                          <span className="px-2 py-1 bg-muted rounded text-xs">Heroku</span>
                          <span className="px-2 py-1 bg-muted rounded text-xs">AWS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Design + Development Major</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Daily Workflow:</h4>
                        <ol className="text-sm space-y-1 text-muted-foreground list-decimal list-inside">
                          <li>Sketch ideas in Figma Pro</li>
                          <li>Build prototypes in Framer</li>
                          <li>Code implementation in Cursor</li>
                          <li>Get feedback via GitHub</li>
                          <li>Deploy and iterate</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Key Tools:</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-muted rounded text-xs">Figma Pro</span>
                          <span className="px-2 py-1 bg-muted rounded text-xs">Framer</span>
                          <span className="px-2 py-1 bg-muted rounded text-xs">Adobe CC</span>
                          <span className="px-2 py-1 bg-muted rounded text-xs">Cursor Pro</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Maintenance & Updates</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Your development environment is never "done"—it evolves with your skills and projects. Here's how to keep everything running smoothly:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Monthly Tasks
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Update all software and extensions</li>
                      <li>• Review and clean up old projects</li>
                      <li>• Check for new student program offerings</li>
                      <li>• Backup important configurations</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Download className="w-4 h-4 text-blue-500" />
                      Semester Tasks
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Renew student verifications</li>
                      <li>• Archive completed course projects</li>
                      <li>• Update portfolio with new work</li>
                      <li>• Explore new tools and workflows</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Next Steps: Level Up Your Setup</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Once you have the basics configured, you can start optimizing for your specific interests and career goals. The best development environment is one that grows with you.
                </p>
                
                <div className="bg-spektr-cyan-50/10 border border-spektr-cyan-50/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-spektr-cyan-50">🚀 Ready to Build Your Setup?</h3>
                  <p className="text-muted-foreground mb-4">
                    Start with our curated collection of student developer tools. Everything in this guide is available through our dashboard with direct links and setup instructions.
                  </p>
                  <div className="flex gap-4">
                    <Button 
                      className="gap-2"
                      onClick={() => router.push('/student-developer-resources')}
                    >
                      Get All Tools <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="outline"
                      className="gap-2"
                      onClick={() => router.push('/dashboard')}
                    >
                      Browse Dashboard
                    </Button>
                  </div>
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
                Start Building <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </motion.article>
      </div>
    </div>
  );
}