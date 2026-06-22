import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "URI Tech | IT Staffing & Recruitment",
  description:
    "URI Tech is a leading IT staffing and recruitment firm connecting exceptional talent with forward-thinking organizations across India.",
  keywords: [
    "IT staffing",
    "recruitment",
    "campus hiring",
    "contract hiring",
    "permanent placement",
    "HR consulting",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
