import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GitHub Student Pack Benefits 2025 | $200K+ Free Developer Tools",
  description: "Complete guide to GitHub Student Pack benefits. Get free Heroku hosting, domains, GitHub Pro, Notion AI, and 100+ developer tools worth $200,000+ with your .edu email.",
  keywords: "GitHub Student Pack, free developer tools students, GitHub education, student developer benefits, free hosting students, GitHub Pro free",
  openGraph: {
    title: "GitHub Student Pack Benefits - $200K+ Free Tools",
    description: "Access $200,000+ worth of free developer tools with your student email",
    type: "website",
  },
};

export default function GitHubStudentPackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}