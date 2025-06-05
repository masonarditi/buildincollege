/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { cn } from "@/lib/utils";


const items = [
    {
      id: "1",
      resource: "Claude Credits",
      logo: "/logos/anthropic-small.png",
      value: "$50",
      description: "Offered via Claude Campus Ambassadors",
      href: "https://www.anthropic.com/contact-sales/for-student-builders",
      tags: ["Credits", "AI"]
    },
    {
      id: "2",
      resource: "OpenAI Credits",
      logo: "/logos/openai.webp",
      value: "$1000",
      description: "Via Microsoft for Startups (Azure)",
      href: "https://www.microsoft.com/en-us/startups/ai",
      tags: ["Credits", "AI"]
    },
    {
      id: "3",
      resource: "Microsoft for Startups",
      logo: "/logos/microsoft.webp",
      value: "",
      description: "",
      href: "https://www.microsoft.com/en-us/startups",
      tags: ["Credits", "AI", "Startups", "Web Infrastructure"]
    },
    {
      id: "4",
      resource: "Github Student Developer Pack",
      logo: "/logos/github.png",
      value: "",
      description: "",
      href: "https://education.github.com/pack",
      tags: ["Credits", "AI", "Startups", "Web Infrastructure"]
    },
  {
    id: "5",
    resource: "Free Notion Plus w/ AI",
    logo: "/logos/notion.png",
    value: "",
    description: "",
    href: "https://education.github.com/pack",
    tags: ["Productivity", "AI"]
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
    resource: "Free Cursor Pro (1 Year)",
    logo: "/logos/cursor.jpeg",
    value: "$240",
    description: "Sign up with .edu email",
    href: "https://www.cursor.com/students",
    tags: ["AI"]
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
    <tr ref={ref} className={cn("border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className)} {...props} />
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
          <TableRow className="hover:bg-transparent">
            <TableHead>Resource</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <img
                    className="rounded-lg w-10 h-10 object-contain"
                    src={item.logo}
                    width={40}
                    height={40}
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
                      className="px-2 py-1 bg-muted rounded-full text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </TableCell>
              <TableCell className="max-w-md">{item.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export { Component }; 