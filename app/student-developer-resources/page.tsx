'use client';

import { motion } from "framer-motion";
import { MoveRight, Rocket, Cloud, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function StudentDeveloperResources() {
  const router = useRouter();

  const resourceCategories = [
    {
      name: "Cloud Credits",
      value: "$10K+ value",
      description: "AWS, Google Cloud, Azure, and DigitalOcean credits for hosting and computing power",
      logo: "/logos/amazon-aws.png",
      tags: ["Cloud Computing", "Free Credits"],
      examples: ["AWS $10K", "Google Cloud $300", "Azure $200", "DigitalOcean $200"]
    },
    {
      name: "API Credits",
      value: "$1K+ value", 
      description: "OpenAI, Anthropic, and other AI API credits for building intelligent applications",
      logo: "/logos/openai.webp",
      tags: ["AI APIs", "Development"],
      examples: ["OpenAI $1K", "Claude $50", "Firecrawl $100", "ElevenLabs $55"]
    },
    {
      name: "Web Infrastructure",
      value: "$500+ value",
      description: "Free domains, hosting, CDN services, and SSL certificates for your projects",
      logo: "/logos/heroku.webp", 
      tags: ["Hosting", "Domains"],
      examples: ["Heroku 2 years", "Free domains", "SSL certs", "CDN access"]
    },
    {
      name: "Professional Software",
      value: "$2K+ value",
      description: "Design tools, productivity apps, and development software at no cost",
      logo: "/logos/figma.avif",
      tags: ["Design", "Productivity"],
      examples: ["Figma Pro", "Notion AI", "Framer Pro", "Screen Studio"]
    }
  ];

  const quickStats = [
    { number: "$200K+", label: "Total Value Available" },
    { number: "100+", label: "Free Tools & Services" },
    { number: "50+", label: "Partner Companies" },
    { number: "Annual", label: "Renewal Period" }
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
            <Rocket className="w-10 h-10 text-spektr-cyan-50" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              <span className="text-spektr-cyan-50">Student Developer</span> Resources
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to build, deploy, and scale your projects—from cloud credits to professional software, all free for students.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {quickStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-spektr-cyan-50 mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {resourceCategories.map((category, index) => (
            <motion.div
              key={category.name}
              className="p-6 border border-border rounded-xl bg-card hover:bg-muted/50 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => router.push('/dashboard')}
            >
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src={category.logo} 
                  alt={`${category.name} logo`}
                  className="w-12 h-12 rounded-lg object-contain"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 rounded-md text-xs font-medium">
                      {category.value}
                    </span>
                  </div>
                  <div className="flex gap-2 mb-3">
                    {category.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">{category.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {category.examples.map((example) => (
                  <span key={example} className="px-2 py-1 bg-muted/50 rounded text-xs font-medium">
                    {example}
                  </span>
                ))}
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
            <Cloud className="w-12 h-12 mx-auto mb-4 text-spektr-cyan-50" />
            <h3 className="text-xl font-semibold mb-2">Build & Deploy</h3>
            <p className="text-muted-foreground">Cloud hosting, databases, and infrastructure tools to bring your ideas to life</p>
          </div>
          
          <div className="text-center p-6">
            <DollarSign className="w-12 h-12 mx-auto mb-4 text-spektr-cyan-50" />
            <h3 className="text-xl font-semibold mb-2">API & Credits</h3>
            <p className="text-muted-foreground">AI APIs, third-party services, and premium features without the cost</p>
          </div>
          
          <div className="text-center p-6">
            <Users className="w-12 h-12 mx-auto mb-4 text-spektr-cyan-50" />
            <h3 className="text-xl font-semibold mb-2">Community & Support</h3>
            <p className="text-muted-foreground">Access to student communities, mentorship, and career development resources</p>
          </div>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 rounded-xl p-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">💡 Popular Resource Combinations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">🤖 AI Project Stack</h3>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• OpenAI API credits for GPT integration</li>
                  <li>• Cursor Pro for AI-assisted coding</li>
                  <li>• Heroku hosting for deployment</li>
                  <li>• Free domain from Namecheap</li>
                </ul>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">🚀 Startup MVP Stack</h3>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• AWS credits for scalable infrastructure</li>
                  <li>• Figma Pro for design and prototyping</li>
                  <li>• GitHub Pro for code collaboration</li>
                  <li>• Notion AI for documentation</li>
                </ul>
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
            <h2 className="text-2xl font-semibold mb-4">Ready to Access Everything?</h2>
            <p className="text-muted-foreground mb-6">
              Browse our curated database of student resources with direct links, setup guides, and eligibility requirements.
            </p>
            <Button 
              size="lg" 
              className="gap-2 hover:scale-105 transition-transform"
              onClick={() => router.push('/dashboard')}
            >
              Explore All Resources <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex justify-center gap-8 text-sm text-muted-foreground">
            <span>✅ Verified Student Programs</span>
            <span>🔄 Updated Weekly</span>
            <span>📧 .edu Email Required</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}