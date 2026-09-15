import type { Metadata } from "next";
import type { ReactNode } from "react";
import BackToTop from "@/components/BackToTop";
import NetworkBackground from "@/components/NetworkBackground";
import { NavigationProvider } from "./_components/NavigationContext";
import LoadingOverlay from "./_components/LoadingOverlay";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Fourward Thrive",
    default: "Fourward Thrive | Business Solutions & Services",
  },
  description: "Fourward Thrive Business Solutions & Services — building brands, creating presence, and driving growth.",
};

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var dark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        <NavigationProvider>
          <main className="bg-noir-bg font-worksans text-noir-deep min-h-screen relative">
            <NetworkBackground />
            <div className="relative z-10">
              <Header />
              {children}
              <Footer />
              <BackToTop className="bg-noir-primary hover:brightness-90 text-noir-bg" />
            </div>
          </main>
          <LoadingOverlay />
        </NavigationProvider>
      </body>
    </html>
  );
}
