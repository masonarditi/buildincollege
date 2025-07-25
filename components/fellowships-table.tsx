'use client';

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const fellowships = [
  {
    id: "1",
    resource: "Z Fellows",
    logo: "/logos/zfellows.jpeg",
    value: "$10,000",
    description: "$10k grant & fellowship for young entrepreneurs",
    href: "https://www.zfellows.com/",
    tags: ["Fellowship", "Grant", "Mentorship"]
  },
  {
    id: "2",
    resource: "Neo Scholarship",
    logo: "/logos/neo.svg", 
    value: "$25,000",
    description: "Fellowship & grant for CS students",
    href: "https://neo.com/scholars",
    tags: ["Fellowship", "Grant", "Mentorship"]
  },
  {
    id: "3",
    resource: "Afore Capital Grants",
    logo: "/logos/afore.jpeg",
    value: "$1,000",
    description: "$1,000 non-dilutive grant",
    href: "https://grants.afore.vc/",
    tags: ["Fellowship", "Grant", "Mentorship"]
  }
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

function FellowshipsTable() {
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
          {fellowships.map((fellowship, index) => (
            <motion.tr
              key={fellowship.id}
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
                    className="w-10 h-10 rounded-md object-contain"
                    src={fellowship.logo}
                    width={40}
                    height={40}
                    alt={`${fellowship.resource} logo`}
                  />
                  <a 
                    href={fellowship.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:underline"
                  >
                    {fellowship.resource}
                  </a>
                </div>
              </TableCell>
              <TableCell>{fellowship.value}</TableCell>
              <TableCell>
                <div className="flex gap-2 flex-wrap">
                  {fellowship.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </TableCell>
              <TableCell className="max-w-md">{fellowship.description}</TableCell>
              <TableCell className="whitespace-nowrap">
                <a
                  href={fellowship.href}
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
        <p className="text-sm text-muted-foreground mb-3">Know of a fellowship that should be listed?</p>
        <a
          href="https://forms.gle/ZVn6A2hC6YQuPCxC8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
        >
          Submit Fellowship
        </a>
      </div>
    </div>
  );
}

export { FellowshipsTable };