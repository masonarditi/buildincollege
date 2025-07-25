import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build in College Blog | Student Developer Guides & Tutorials",
  description: "Expert guides, tutorials, and insights for student developers. Learn about free coding tools, AI assistants, and resources to accelerate your programming journey.",
  keywords: "student developer blog, coding tutorials students, free programming tools guide, AI coding assistant tutorials, student developer resources blog",
  openGraph: {
    title: "Build in College Blog - Developer Guides for Students",
    description: "Expert guides and tutorials for student developers",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}