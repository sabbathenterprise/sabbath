import "./globals.css";
import type { Metadata } from "next";


import { GOOGLE_FONT_PROVIDER } from "next/dist/shared/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sabbath Construction",
  description: "Build and furnish your dream home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="am">
      <body>
        <Navbar  />
        {children}
        <Footer />
      </body>
    </html>
  );
}
