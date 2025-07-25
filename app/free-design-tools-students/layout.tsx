import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Design Tools for Students 2025 | Figma Pro, Adobe & More",
  description: "Get free access to professional design software including Figma Pro, Framer, Adobe Creative Cloud, and Canva Pro. Complete guide for student designers.",
  keywords: "free design tools students, Figma Pro student, Adobe student discount, Framer free students, Canva Pro student, free UI UX tools college",
  openGraph: {
    title: "Free Design Tools for Students - $1000+ Professional Software",
    description: "Access professional design software completely free with your student email",
    type: "website",
  },
};

export default function FreeDesignToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}