 
'use client';

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReviewComponent } from "@/components/ui/review-component";
import { Testimonials } from "@/components/ui/testimonials";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["builders", "hackers", "founders", "creators", "developers"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <motion.div 
          className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <ReviewComponent count={20000} />
          </motion.div>
          
          <motion.div className="flex gap-4 flex-col" variants={itemVariants}>
            <motion.h1 
              className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-spektr-cyan-50">Free stuff for college</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Curated free tools, software credits, and fellowships for college builders. Everything you need to build without breaking the bank.
            </motion.p>
          </motion.div>
          
          <motion.div variants={buttonVariants}>
            <Button 
              size="lg" 
              className="gap-4 hover:scale-105 transition-transform"
              onClick={() => router.push('/dashboard')}
            >
              View Dashboard <MoveRight className="w-4 h-4" />
            </Button>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Testimonials />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
