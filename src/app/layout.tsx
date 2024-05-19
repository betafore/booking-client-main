import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReduxProvider } from "@/components/ReduxProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./Calender.css";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const newake = localFont({
  src: [
    {
      path: "../../public/fonts/NewakeFont.otf",
      weight: "800",
    },
  ],
  variable: "--font-newake",
});

export const metadata: Metadata = {
  title: "Shuttle to Moraine & Louise",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${newake.variable} ${inter.className}`}>
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
