import type { Metadata } from "next";
import "./globals.css";
import { NavigationHeader } from "@/components/navigation-header";
import { Footer } from "@/components/footer";



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
    <html lang="en">
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
