'use client';

import { motion } from "framer-motion";
import { MoveRight, Github, Zap, Globe, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function GitHubStudentPack() {
  const router = useRouter();

  const packTools = [
    {
      name: "GitHub Pro",
      value: "Free",
      description: "Unlimited private repositories, advanced code review tools, and GitHub Copilot access",
      logo: "/logos/github.png",
      tags: ["Free for Students", "Version Control"],
      setup: "Apply with .edu email at education.github.com"
    },
    {
      name: "Heroku Hosting",
      value: "$312 free",
      description: "2 years of cloud hosting credits for deploying web applications and APIs",
      logo: "/logos/heroku.webp",
      tags: ["Cloud Hosting", "2 Years Free"],
      setup: "Included with GitHub Student Pack"
    },
    {
      name: "Free Domains",
      value: "$50+ value",
      description: "Free .me domain from Namecheap plus additional domains from Name.com",
      logo: "/logos/namecheap.svg",
      tags: ["Domain Names", "Web Infrastructure"],
      setup: "Redeem through Student Pack portal"
    },
    {
      name: "Notion Pro + AI",
      value: "$240 value",
      description: "Premium workspace with unlimited blocks, guests, and AI-powered writing assistant",
      logo: "/logos/notion.png",
      tags: ["Productivity", "AI"],
      setup: "Link GitHub account to Notion"
    }
  ];

  const categories = [
    {
      icon: Github,
      title: "Development Tools",
      description: "JetBrains IDEs, Visual Studio, Git tools, and advanced debugging software"
    },
    {
      icon: Globe,
      title: "Web Infrastructure", 
      description: "Cloud hosting, CDN services, domain names, and SSL certificates"
    },
    {
      icon: Database,
      title: "Database & APIs",
      description: "MongoDB, Redis, API credits, and backend-as-a-service platforms"
    },
    {
      icon: Zap,
      title: "Design & Productivity",
      description: "Figma Pro, Canva, productivity apps, and collaboration tools"
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
            <Github className="w-10 h-10" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              <span className="text-spektr-cyan-50">GitHub Student Pack</span> Benefits
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get access to $200,000+ worth of free developer tools, cloud credits, and premium software—all with your student email.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {packTools.map((tool, index) => (
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
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-md text-xs font-medium">
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
                <span className="font-medium">How to Get: </span>
                <span className="text-muted-foreground">{tool.setup}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {categories.map((category, index) => (
            <div key={category.title} className="text-center p-6">
              <category.icon className="w-10 h-10 mx-auto mb-4 text-spektr-cyan-50" />
              <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </div>
          ))}
        </motion.div>

        <motion.div 
          className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-xl p-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">🎯 Eligibility Requirements</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold mb-2">You Need:</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Valid .edu email address</li>
                  <li>• Enrolled in degree/diploma program</li>
                  <li>• Age 13+ requirement</li>
                  <li>• GitHub account</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">You Get:</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• $200,000+ in free tools</li>
                  <li>• Renewed annually while enrolled</li>
                  <li>• Access to exclusive student events</li>
                  <li>• Career development resources</li>
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
            <h2 className="text-2xl font-semibold mb-4">Ready to Claim Your Pack?</h2>
            <p className="text-muted-foreground mb-6">
              Browse our complete database of student resources, including detailed setup guides for every GitHub Student Pack benefit.
            </p>
            <Button 
              size="lg" 
              className="gap-2 hover:scale-105 transition-transform"
              onClick={() => router.push('/dashboard')}
            >
              View All Student Resources <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Application typically approved within 1-2 business days • Benefits renew annually
          </p>
        </motion.div>
      </div>
    </div>
  );
}