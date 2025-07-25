import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Coding Tools for Students 2025 | IDEs, AI Assistants & More",
  description: "Get free access to premium coding tools like Cursor Pro, JetBrains IDEs, GitHub Copilot, and Google Colab Pro. Complete guide for student developers.",
  keywords: "free coding tools students, Cursor Pro student, JetBrains free students, GitHub Copilot student, free IDEs college students, AI coding assistant students",
  openGraph: {
    title: "Free Coding Tools for Students - $1000+ in Professional Software",
    description: "Access professional development tools completely free with your student email",
    type: "website",
  },
};

export default function FreeCodingToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}