import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const americanCaptain = localFont({
  src: "../../public/font/American Captain.ttf",
  variable: "--font-american-captain",
});
export const metadata: Metadata = {
  title: "Personal Website",
  description: "Created with Next.js and Tailwind CSS",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={`bg-black ${americanCaptain.variable}`}>{children}</body>
    </html>
  );
}
