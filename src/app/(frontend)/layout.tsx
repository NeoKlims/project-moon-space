import type { Metadata } from "next";

import "./globals.css";

import { Footer } from "@/components/footer";
import { NavBar } from "@/components/nav-bar";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "MOOD SPACE",
  description: "Beauty salon in Valencia",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
