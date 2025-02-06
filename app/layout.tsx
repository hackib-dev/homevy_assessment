import type { Metadata } from "next";
import { Manrope, Open_Sans } from "next/font/google";
import "./globals.css";

// const manrope = Manrope({
//   // variable: "--font-geist-sans",
//   // subsets: ["latin"],
//   subsets: ["latin"],
// });

const manrope = Manrope({ subsets: ["latin"] });
export const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boldo",
  icons: {
    icon: "/images/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope} antialiased`}>{children}</body>
    </html>
  );
}
