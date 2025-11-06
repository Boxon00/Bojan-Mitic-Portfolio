import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bojan Mitić - Fullstack Web Developer Portfolio",
  description: "Portfolio website of Bojan Mitić, a passionate Fullstack Web Developer specializing in modern web technologies including Angular, React, Laravel, Node.js, and more.",
  keywords: ["Bojan Mitić", "Fullstack Developer", "Web Developer", "Angular", "React", "Laravel", "Node.js", "Portfolio"],
  authors: [{ name: "Bojan Mitić" }],
  openGraph: {
    title: "Bojan Mitić - Fullstack Web Developer",
    description: "Portfolio website showcasing my projects and skills in web development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900`}>
        {children}
      </body>
    </html>
  );
}
