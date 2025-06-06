'use client';

/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";


const items = [
    {
      id: "1",
      resource: "Claude Credits",
      logo: "/logos/anthropic-small.png",
      value: "$50",
      description: "",
      href: "https://www.anthropic.com/contact-sales/for-student-builders",
      tags: ["API Credits", "AI"]
    },
    {
      id: "2",
      resource: "OpenAI Credits",
      logo: "/logos/openai.webp",
      value: "$1000",
      description: "Via Microsoft for Startups (Azure)",
      href: "https://www.microsoft.com/en-us/startups/ai",
      tags: ["API Credits", "AI"]
    },
    {
      id: "3",
      resource: "Free Cursor Pro (1 Year)",
      logo: "/logos/cursor.jpeg",
      value: "$240",
      description: "Sign up with .edu email",
      href: "https://www.cursor.com/students",
      tags: ["AI"]
    },
    {
      id: "4",
      resource: "Free Notion Plus w/ AI",
      logo: "/logos/notion.png",
      value: "",
      description: "Via Github Student Dev Pack",
      href: "https://education.github.com/pack",
      tags: ["Productivity", "AI"]
    },
    {
      id: "5",
      resource: "Free Figma Pro",
      logo: "/logos/figma.avif",
      value: "$144/year",
      description: "Sign up with .edu email",
      href: "https://www.figma.com/education/",
      tags: ["Design", "AI"]
    },
    {
      id: "6",
      resource: "Free Domains (Name.com)",
      logo: "/logos/name.webp",
      value: "",
      description: ".live, .software, .studio, etc.",
      href: "https://education.github.com/pack",
      tags: ["Startups", "Web Infrastructure"]
    },
    {
      id: "7",
      resource: "Free Heroku Hosting (2 Years)",
      logo: "/logos/heroku.webp",
      value: "$312",
      description: "2 years of hosting via Github Student Dev Pack",
      href: "https://education.github.com/pack",
      tags: ["Web Infrastructure", "Startups"]
    },
    {
      id: "8",
      resource: "Free Perplexity Pro (1 Month)",
      logo: "/logos/perplexity.png",
      value: "$20",
      description: "Sign up with .edu email",
      href: "https://plex.it/referrals/BNJ8UCZW",
      tags: ["AI", "Productivity"]
    },
    {
      id: "9",
      resource: "Microsoft for Startups",
      logo: "/logos/microsoft.webp",
      value: "",
      description: "",
      href: "https://www.microsoft.com/en-us/startups",
      tags: ["API Credits", "AI", "Startups", "Web Infrastructure"]
    },
    {
      id: "10",
      resource: "Github Student Developer Pack",
      logo: "/logos/github.png",
      value: "",
      description: "",
      href: "https://education.github.com/pack",
      tags: ["API Credits", "AI", "Startups", "Web Infrastructure"]
    },
  ];

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} />
    </div>
  )
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => <thead ref={ref} className={cn(className)} {...props} />
);
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
  )
);
TableBody.displayName = "TableBody";

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr 
      ref={ref} 
      className={cn("border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className)}
      {...props} 
    />
  )
);
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <th ref={ref} className={cn("h-12 px-3 text-left align-middle font-medium text-muted-foreground", className)} {...props} />
  )
);
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <td ref={ref} className={cn("p-3 align-middle", className)} {...props} />
  )
);
TableCell.displayName = "TableCell";

function Component() {
  return (
    <div className="bg-background">
      <Table>
        <TableHeader>
          <tr className="hover:bg-transparent">
            <TableHead>Resource</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead>Description</TableHead>
            <TableHead></TableHead>
          </tr>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <motion.tr
              key={item.id}
              className="border-b border-border transition-colors hover:bg-muted/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.3,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              style={{ display: 'table-row' }}
            >
              <TableCell>
                <div className="flex items-center gap-3">
                  <img
                    className={cn(
                      "rounded-md object-contain",
                      (item.resource === "Claude Credits" || item.resource === "Free Cursor Pro (1 Year)") 
                        ? "w-8 h-8" 
                        : "w-10 h-10"
                    )}
                    src={item.logo}
                    width={item.resource === "Claude Credits" || item.resource === "Free Cursor Pro (1 Year)" ? 32 : 40}
                    height={item.resource === "Claude Credits" || item.resource === "Free Cursor Pro (1 Year)" ? 32 : 40}
                    alt={`${item.resource} logo`}
                  />
                  <a 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:underline"
                  >
                    {item.resource}
                  </a>
                </div>
              </TableCell>
              <TableCell>{item.value}</TableCell>
              <TableCell>
                <div className="flex gap-2 flex-wrap">
                  {item.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </TableCell>
              <TableCell className="max-w-md">{item.description}</TableCell>
              <TableCell className="whitespace-nowrap">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md px-4 py-1.5 text-xs font-medium bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 whitespace-nowrap"
                >
                  Apply Now
                </a>
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground mb-3">Have a resource to share?</p>
        <a
          href="https://forms.gle/ZVn6A2hC6YQuPCxC8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
        >
          Submit Resource
        </a>
      </div>
    </div>
  );
}

export { Component }; 