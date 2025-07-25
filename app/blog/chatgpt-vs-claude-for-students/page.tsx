'use client';

import { motion } from "framer-motion";
import { MoveRight, Calendar, Clock, User, ExternalLink, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ChatGPTVsClaude() {
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
                <span className="text-spektr-cyan-50">ChatGPT vs Claude</span> for Students
              </h1>
              
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  January 25, 2025
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  12 min read
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Build in College
                </div>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Complete comparison of ChatGPT Plus vs Claude for student developers. Pricing, features, coding capabilities, and which AI assistant fits your academic needs.
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
              
              {/* Brand Comparison Images */}
              <div className="grid md:grid-cols-2 gap-8 my-8 p-8 bg-muted/30 rounded-xl">
                <div className="text-center">
                  <img 
                    src="/logos/openai.webp" 
                    alt="ChatGPT Plus for students"
                    className="w-20 h-20 mx-auto rounded-xl object-contain mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">ChatGPT Plus</h3>
                  <p className="text-sm text-muted-foreground mb-2">2 months free for students</p>
                  <p className="text-xs text-muted-foreground">OpenAI's flagship AI assistant</p>
                </div>
                
                <div className="text-center">
                  <img 
                    src="/logos/anthropic-small.png" 
                    alt="Claude for students"
                    className="w-20 h-20 mx-auto rounded-xl object-contain mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">Claude</h3>
                  <p className="text-sm text-muted-foreground mb-2">API credits for builders</p>
                  <p className="text-xs text-muted-foreground">Anthropic's safety-focused AI</p>
                </div>
              </div>

              <section>
                <h2 className="text-2xl font-bold mb-4">The Student AI Dilemma</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a student in 2025, you're spoiled for choice when it comes to AI assistants. Both ChatGPT Plus and Claude offer powerful capabilities for coding, research, and learning. But with limited budgets and specific academic needs, choosing the right AI companion can make or break your productivity.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This comprehensive comparison breaks down everything you need to know to make the best choice for your student journey, from pricing and features to real-world performance in coding and academic tasks.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Student Pricing & Availability</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="p-6 border border-border rounded-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <img src="/logos/openai.webp" alt="ChatGPT Plus" className="w-8 h-8 rounded" />
                      <h3 className="text-lg font-semibold">ChatGPT Plus</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm">2 months completely free for US/Canada students</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm">$20/month after free period</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Easy .edu email verification</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-500" />
                        <span className="text-sm">Limited to North American students</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 border border-border rounded-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <img src="/logos/anthropic-small.png" alt="Claude" className="w-8 h-8 rounded" />
                      <h3 className="text-lg font-semibold">Claude</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Free tier with daily message limits</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm">API credits for student builders</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Available globally</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-500" />
                        <span className="text-sm">$20/month for Pro plan</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">💡 Student Tip</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    If you're in the US or Canada, ChatGPT Plus's 2-month free trial is unbeatable. International students should start with Claude's free tier and consider API credits for projects.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Coding & Programming Capabilities</h2>
                
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4 font-semibold">Feature</th>
                        <th className="text-center p-4 font-semibold">ChatGPT Plus</th>
                        <th className="text-center p-4 font-semibold">Claude</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-4">Code Generation</td>
                        <td className="text-center p-4">
                          <div className="flex items-center justify-center">
                            <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded text-xs">Excellent</span>
                          </div>
                        </td>
                        <td className="text-center p-4">
                          <div className="flex items-center justify-center">
                            <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded text-xs">Excellent</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4">Debugging Help</td>
                        <td className="text-center p-4">
                          <div className="flex items-center justify-center">
                            <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded text-xs">Very Good</span>
                          </div>
                        </td>
                        <td className="text-center p-4">
                          <div className="flex items-center justify-center">
                            <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded text-xs">Excellent</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4">Code Explanation</td>
                        <td className="text-center p-4">
                          <div className="flex items-center justify-center">
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded text-xs">Good</span>
                          </div>
                        </td>
                        <td className="text-center p-4">
                          <div className="flex items-center justify-center">
                            <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded text-xs">Excellent</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4">Algorithm Design</td>
                        <td className="text-center p-4">
                          <div className="flex items-center justify-center">
                            <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded text-xs">Very Good</span>
                          </div>
                        </td>
                        <td className="text-center p-4">
                          <div className="flex items-center justify-center">
                            <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded text-xs">Very Good</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-spektr-cyan-50">Real Student Use Cases</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">ChatGPT Plus Wins For:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Quick code generation for assignments</li>
                      <li>• Learning new programming languages</li>
                      <li>• Brainstorming project ideas</li>
                      <li>• Integration with coding workflows</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Claude Wins For:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Detailed code explanations</li>
                      <li>• Complex debugging sessions</li>
                      <li>• Understanding error messages</li>
                      <li>• Safe, educational coding practices</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Academic Research & Writing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Beyond coding, both AI assistants excel at academic tasks, but with different strengths that matter for students.
                </p>
                
                <h3 className="text-xl font-semibold mb-3">Research Capabilities</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>ChatGPT Plus</strong> offers real-time web browsing and the ability to search current information, making it excellent for research papers and staying current with technology trends. Its integration with various plugins and tools makes it a versatile research companion.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Claude</strong> focuses on helping you work with information you already have. It excels at analyzing documents, summarizing research papers, and helping you structure complex arguments. While it can't browse the web, it's exceptional at deep analysis.
                </p>
                
                <h3 className="text-xl font-semibold mb-3">Writing Assistance</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Both assistants help with academic writing, but Claude tends to provide more nuanced, thoughtful responses that align well with academic standards. ChatGPT Plus is faster and more direct, which can be helpful for quick assignments or brainstorming.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">User Experience & Interface</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="p-6 border border-border rounded-xl">
                    <h3 className="text-lg font-semibold mb-3">ChatGPT Plus</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Clean, familiar chat interface</li>
                      <li>• Mobile app available</li>
                      <li>• Voice conversations</li>
                      <li>• Custom GPTs and plugins</li>
                      <li>• Fast response times</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 border border-border rounded-xl">
                    <h3 className="text-lg font-semibold mb-3">Claude</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Simple, distraction-free interface</li>
                      <li>• Web-based (no app yet)</li>
                      <li>• Longer context memory</li>
                      <li>• Better at following instructions</li>
                      <li>• More detailed responses</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">The Verdict for Students</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="p-6 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl">
                    <h3 className="text-lg font-semibold mb-3 text-green-900 dark:text-green-100">Choose ChatGPT Plus If:</h3>
                    <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                      <li>• You're in the US/Canada (free trial!)</li>
                      <li>• You need real-time web research</li>
                      <li>• You want mobile access</li>
                      <li>• You prefer quick, direct answers</li>
                      <li>• You use it for general productivity</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl">
                    <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">Choose Claude If:</h3>
                    <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                      <li>• You're an international student</li>
                      <li>• You need detailed code explanations</li>
                      <li>• You work with complex documents</li>
                      <li>• You prefer thoughtful, nuanced responses</li>
                      <li>• You're building projects (API access)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-spektr-cyan-50/10 border border-spektr-cyan-50/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-spektr-cyan-50">💡 Pro Student Strategy</h3>
                  <p className="text-muted-foreground mb-4">
                    Many successful student developers use both: ChatGPT Plus for quick daily tasks and research, and Claude's free tier for detailed code reviews and complex problem-solving. You don't have to choose just one!
                  </p>
                  <div className="flex gap-4">
                    <Button 
                      className="gap-2"
                      onClick={() => router.push('/ai-tools-students')}
                    >
                      Get Student Access <ExternalLink className="w-4 h-4" />
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
                Explore All Tools <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </motion.article>
      </div>
    </div>
  );
}