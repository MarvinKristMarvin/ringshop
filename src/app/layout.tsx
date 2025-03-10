import type { Metadata } from "next";
import "./globals.scss";
import "./layout.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BasketModal from "./components/BasketModal/BasketModal";
import { Toaster } from "react-hot-toast";
import { Cinzel, Jost } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Marvin's Gold Jewelry",
  description: "Jewelry shop with categories, filters, basket and clean design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${jost.variable} ${cinzel.className}`}
      >
        <Toaster position="top-center" />
        <BasketModal />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
