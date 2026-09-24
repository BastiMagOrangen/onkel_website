import type { Metadata } from "next";
import { Figtree, Fraunces } from "next/font/google";
import type { ReactNode } from "react";
import { CookieBanner } from "@/components/CookieBanner";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CookieConsentProvider } from "@/lib/cookie-consent";
import "./globals.css";

const body = Figtree({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Ordination Dr. Clemens Seidl",
    template: "%s | Ordination Dr. Clemens Seidl",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className={`${body.variable} ${display.variable}`}>
      <body>
        <CookieConsentProvider>
          <SiteHeader />
          <main id="inhalt">{children}</main>
          <SiteFooter />
          <CookieBanner />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
