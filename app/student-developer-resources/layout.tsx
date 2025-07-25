import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Developer Resources 2025 | $200K+ Free Tools & Credits",
  description: "Complete guide to free developer resources for students. Cloud credits, API access, hosting, domains, and professional software worth $200,000+.",
  keywords: "student developer resources, free cloud credits students, AWS credits students, student developer tools, college programming resources, free developer software",
  openGraph: {
    title: "Student Developer Resources - $200K+ in Free Tools",
    description: "Everything student developers need: cloud credits, APIs, hosting, and professional software",
    type: "website",
  },
};

export default function StudentDeveloperResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}