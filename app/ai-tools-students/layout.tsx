import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free AI Tools for College Students | ChatGPT Plus, Cursor Pro & More",
  description: "Access premium AI coding assistants, research tools, and API credits worth thousands—completely free with your student email. ChatGPT Plus, Cursor Pro, Claude credits & more.",
  keywords: "free AI tools students, ChatGPT student discount, Cursor Pro free, Claude credits, GitHub Copilot students, AI coding assistant free, OpenAI credits students",
  openGraph: {
    title: "Free AI Tools for College Students",
    description: "Premium AI tools worth $1000+ completely free for college students",
    type: "website",
  },
};

export default function AIToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}