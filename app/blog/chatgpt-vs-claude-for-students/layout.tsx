import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatGPT vs Claude for Students 2025 | Complete AI Assistant Comparison",
  description: "Detailed comparison of ChatGPT Plus vs Claude for student developers. Pricing, coding capabilities, academic features, and which AI assistant is best for college students.",
  keywords: "ChatGPT vs Claude students, AI assistant comparison, ChatGPT Plus student discount, Claude for students, best AI for college students, AI coding assistant comparison",
  openGraph: {
    title: "ChatGPT vs Claude for Students - Complete 2025 Comparison",
    description: "Which AI assistant is best for student developers? Compare features, pricing, and capabilities.",
    type: "article",
  },
  authors: [{ name: "Build in College" }],
  publishedTime: "2025-01-25T00:00:00.000Z",
};

export default function ChatGPTVsClaudeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}