'use client';

import { motion } from "framer-motion";
import { MoveRight, Palette, Layout, Video, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function FreeDesignToolsStudents() {
  const router = useRouter();

  const designTools = [
    {
      name: "Figma Pro",
      value: "$144/year",
      description: "Professional UI/UX design, prototyping, and collaboration tools with unlimited projects",
      logo: "/logos/figma.avif",
      tags: ["UI/UX", "Free for Students"],
      setup: "Sign up with .edu email"
    },
    {
      name: "Framer Pro",
      value: "$180/year",
      description: "Advanced web design and interactive prototyping with code-free animations",
      logo: "/logos/framer.svg",
      tags: ["Web Design", "Free for Students"],
      setup: "Use student email at signup"
    },
    {
      name: "Canva Pro",
      value: "$120/year",
      description: "Premium design templates, brand kit, and collaboration features for all design needs",
      logo: "/logos/github.png", // Using as placeholder - add Canva logo
      tags: ["Graphics", "Templates"],
      setup: "Via GitHub Student Pack"
    },
    {
      name: "Adobe Creative Cloud",
      value: "$600/year",
      description: "Complete Adobe suite including Photoshop, Illustrator, and Premiere Pro at student pricing",
      logo: "/logos/github.png", // Using as placeholder - add Adobe logo
      tags: ["Professional", "Student Discount"],
      setup: "60% off with student verification"
    }
  ];

  const categories = [
    {
      icon: Layout,
      title: "UI/UX Design",
      description: "Interface design, prototyping, and user experience tools for web and mobile",
      tools: ["Figma Pro", "Framer", "InVision", "Marvel"]
    },
    {
      icon: Palette,
      title: "Graphic Design", 
      description: "Logo creation, branding, illustration, and visual content design",
      tools: ["Adobe CC", "Canva Pro", "Sketch", "Affinity Suite"]
    },
    {
      icon: Video,
      title: "Video & Animation",
      description: "Video editing, motion graphics, and screen recording software",
      tools: ["Screen Studio", "Adobe After Effects", "DaVinci Resolve", "Figma"]
    },
    {
      icon: Sparkles,
      title: "Creative Resources",
      description: "Stock photos, fonts, icons, and design inspiration platforms",
      tools: ["Unsplash+", "Font Awesome Pro", "Icons8", "Dribbble Pro"]
    }
  ];

  const designProjects = [
    {
      title: "🎨 Portfolio Website",
      description: "Use Framer Pro to build an interactive portfolio showcasing your work",
      tools: ["Framer Pro", "Figma", "Free domain"]
    },
    {
      title: "📱 Mobile App Design",
      description: "Design and prototype your app idea with professional tools",
      tools: ["Figma Pro", "Adobe XD", "InVision"]
    },
    {
      title: "🎬 Content Creation",
      description: "Create stunning visuals and videos for social media and marketing",
      tools: ["Canva Pro", "Screen Studio", "Unsplash+"]
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
            <Palette className="w-10 h-10 text-spektr-cyan-50" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Free <span className="text-spektr-cyan-50">Design Tools</span> for Students
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional design software, UI/UX tools, and creative resources—completely free or heavily discounted for students.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {designTools.map((tool, index) => (
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
                    <span className="px-2 py-1 bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 rounded-md text-xs font-medium">
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
          className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950 dark:to-purple-950 rounded-xl p-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">🎯 Project Ideas to Get Started</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {designProjects.map((project) => (
                <div key={project.title} className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-6">
                  <h3 className="font-semibold mb-3">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tools.map((tool) => (
                      <span key={tool} className="px-2 py-1 bg-muted/50 rounded text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-spektr-cyan-50 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">💰</div>
            <h3 className="text-xl font-semibold mb-2">Save Thousands</h3>
            <p className="text-muted-foreground">Professional design tools worth $1000+ annually, completely free for students</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-spektr-cyan-50 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Build Your Portfolio</h3>
            <p className="text-muted-foreground">Create professional designs that showcase your skills to future employers</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-spektr-cyan-50 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">🎨</div>
            <h3 className="text-xl font-semibold mb-2">Learn Industry Tools</h3>
            <p className="text-muted-foreground">Master the same software used by professional designers and agencies</p>
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-muted/50 rounded-xl p-8 mb-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Start Designing Today</h2>
            <p className="text-muted-foreground mb-6">
              Explore our complete collection of design tools, development resources, and student benefits.
            </p>
            <Button 
              size="lg" 
              className="gap-2 hover:scale-105 transition-transform"
              onClick={() => router.push('/dashboard')}
            >
              Browse All Resources <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Most tools offer free access or significant student discounts • Verify with .edu email
          </p>
        </motion.div>
      </div>
    </div>
  );
}