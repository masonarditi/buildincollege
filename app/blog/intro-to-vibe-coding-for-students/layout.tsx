import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intro to Vibe Coding for Students | Transform Your Programming Experience",
  description: "Learn how to create an aesthetic, AI-powered coding environment that makes programming enjoyable. Guide to vibe coding tools, setup, and psychology for student developers.",
  keywords: "vibe coding students, aesthetic coding environment, AI coding assistant, beautiful code editor, student programming setup, Cursor Pro, GitHub Copilot, coding environment setup",
  openGraph: {
    title: "Intro to Vibe Coding for Students - Transform Your Programming Experience",
    description: "Complete guide to creating beautiful, AI-powered development environments for students",
    type: "article",
  },
  authors: [{ name: "Build in College" }],
  publishedTime: "2025-01-25T00:00:00.000Z",
};

export default function IntroToVibeCodingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}