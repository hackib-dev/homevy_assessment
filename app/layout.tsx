import type { Metadata } from "next";
import { Manrope, Open_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

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
    <html lang="en" className={`${manrope.variable} ${openSans.variable}`}>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
