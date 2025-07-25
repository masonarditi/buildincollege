import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Vibe Coding Tools 2025 | Beautiful Development Environments",
  description: "Discover 100% free aesthetic coding tools. VS Code setups, GitHub Codespaces, Replit, and beautiful development environments that cost nothing but deliver everything.",
  keywords: "free vibe coding tools, free aesthetic code editor, VS Code themes free, GitHub Codespaces free, Replit free, free beautiful coding environment, aesthetic programming tools free",
  openGraph: {
    title: "Free Vibe Coding Tools - Beautiful Development for $0",
    description: "Professional-grade aesthetic coding tools that are completely free",
    type: "website",
  },
};

export default function FreeVibeCodingToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}