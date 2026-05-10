import "@/styles/main.css";

import clsx from "clsx";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Providers } from "@/components/providers";
import { OpenGraph } from "@/lib/og";

export const metadata: Metadata = {
  ...OpenGraph,
};

const inter = localFont({
  src: [
    {
      path: "../public/assets/inter/regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/inter/medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/inter/semi-bold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(inter.className)} suppressHydrationWarning data-scroll-behavior="smooth">
      <body>
        <Providers>
          <main className="mx-auto max-w-screen-sm overflow-x-hidden px-6 py-24 md:overflow-x-visible">
            <article className="article">{children}</article>
          </main>
        </Providers>
      </body>
    </html>
  );
}
