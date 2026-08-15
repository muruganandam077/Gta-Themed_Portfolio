import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | AI & Creative Developer",
  description: "GTA-inspired cinematic portfolio showcasing AI, ML, and full-stack development projects",
  keywords: ["portfolio", "developer", "AI", "machine learning", "full stack", "creative developer"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Portfolio | AI & Creative Developer",
    description: "Interactive cinematic portfolio experience",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="lenis">
      <body>
        {children}
      </body>
    </html>
  );
}
