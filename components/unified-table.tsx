'use client';

/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface TableItem {
  id: string;
  resource: string;
  logo: string;
  value: string;
  description: string;
  href: string;
  tags: string[];
  category: string;
  isNew?: boolean;
}

interface UnifiedTableProps {
  data: TableItem[];
  category?: string;
}

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

function UnifiedTable({ data, category }: UnifiedTableProps) {
  const getButtonText = (itemCategory: string) => {
    return itemCategory === 'fellowships' ? 'Apply Now' : 'Apply Now';
  };

  const footer = {
    text: "Have a resource to share?",
    buttonText: "Submit Resource", 
    href: "https://forms.gle/ZVn6A2hC6YQuPCxC8"
  };

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
          {data.map((item, index) => (
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
                  {item.isNew && (
                    <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded-md text-xs">
                      NEW
                    </span>
                  )}
                  {item.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
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
                  {getButtonText(item.category)}
                </a>
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
      
      {category && (
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-3">{footer.text}</p>
          <a
            href={footer.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            {footer.buttonText}
          </a>
        </div>
      )}
    </div>
  );
}

export { UnifiedTable }; 