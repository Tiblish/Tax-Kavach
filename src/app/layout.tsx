import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tax Kavach | National GST & Income Tax Compliance Standards | All-India Solutions",
  description: "Elite tax shield providing Central GST Department grade expertise across India. Tax Kavach offers national tax compliance standards, litigation support, and professional training for enterprises nationwide.",
  keywords: "GST Audit, Income Tax Consultation, Tax Litigation Support, GST Practitioner Course, Tax Kavach, GST Returns, Tax Compliance",
};

import { AuthProvider } from "@/context/AuthContext";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} antialiased`}>
      <body className="min-h-screen bg-warm-100 text-foreground selection:bg-brand-crimson/10 selection:text-brand-crimson">
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
