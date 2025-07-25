import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vibe Coding Tools for Students 2025 | Aesthetic AI-Powered Development",
  description: "Discover the most aesthetic coding tools for students. Cursor Pro, ChatGPT Plus, and beautiful developer tools that make coding actually enjoyable and productive.",
  keywords: "vibe coding tools, aesthetic coding environment, Cursor Pro beautiful, ChatGPT Plus coding, aesthetic developer tools, beautiful code editor students, AI coding aesthetic",
  openGraph: {
    title: "Vibe Coding Tools - Beautiful AI-Powered Development for Students",
    description: "The aesthetic developer starter pack with beautiful interfaces and powerful AI",
    type: "website",
  },
};

export default function VibeCodingToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}