
import type { Metadata } from "next";
import {EB_Garamond} from 'next/font/google'
import localFont from "next/font/local";
import "./globals.css";
import Providers, { ThemeProvider } from "./provider";

const eb_garamond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-eb_garamond',
  weight: ['400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: "Adebowale Mujeeb Portfolio",
  description: "Mujeeb's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${eb_garamond.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
