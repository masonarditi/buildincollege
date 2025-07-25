import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Developer Setup Guide 2025 | Complete Development Environment",
  description: "Step-by-step guide to building a professional development environment as a student. Free tools, student discounts, and configuration tips for coding success.",
  keywords: "student developer setup, programming environment setup, free developer tools students, GitHub student pack setup, coding environment guide, student development stack",
  openGraph: {
    title: "Complete Student Developer Setup Guide 2025",
    description: "Build a professional development environment with free tools and student discounts",
    type: "article",
    publishedTime: "2025-01-25T00:00:00.000Z",
  },
  authors: [{ name: "Build in College" }],
};

export default function StudentDeveloperSetupGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}