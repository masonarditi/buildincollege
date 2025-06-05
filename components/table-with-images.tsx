import * as React from "react";
import { cn } from "@/lib/utils";


const items = [
    {
      id: "1",
      program: "Claude Credits",
      logo: "/logos/anthropic-small.png",
      amount: "$50",
      tags: ["Credits", "AI"]
    },
    {
      id: "2",
      program: "OpenAI Credits",
      logo: "/logos/openai.webp",
      amount: "$1000",
      tags: ["Credits", "AI"]
    },
    {
      id: "3",
      program: "Microsoft for Startups",
      logo: "/logos/microsoft.webp",
      amount: "",
      tags: ["Credits", "AI", "Startups"]
    },
    {
      id: "4",
      program: "Github Student Developer Pack",
      logo: "/logos/github.png",
      amount: "",
      tags: ["Credits", "AI", "Startups"]
    },
  {
    id: "5",
    program: "Free Notion Plus w/ AI",
    logo: "/logos/notion.png",
    amount: "",
    tags: ["Productivity", "AI"]
  },
  {
    id: "6",
    program: "Free Domains (Name.com)",
    logo: "/logos/name.webp",
    amount: "",
    tags: ["Startups"]
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
            <TableHead>Program</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Focus</TableHead>
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
                    alt={`${item.program} logo`}
                  />
                  <div className="font-medium">{item.program}</div>
                </div>
              </TableCell>
              <TableCell>{item.amount}</TableCell>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export { Component }; 