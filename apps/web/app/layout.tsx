import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Header from "../components/Header/Header";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopHub",
  description: "Shop Your Favourite Products!!",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
