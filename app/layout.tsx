import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { NavigationHeader } from "@/components/navigation-header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Free Stuff for College Builders",
  description: "Free Stuff for College Builders",
  icons: [
    {
      rel: "icon",
      url: "/buildincollege.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <NavigationHeader />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
