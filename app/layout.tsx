import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Inventory Alerts for Shopify | Prevent Stockouts",
  description: "Predict stockouts before they happen. Real-time Shopify inventory tracking with automated supplier notifications. Built for stores with 100+ SKUs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="268ffad5-b83b-4d90-853e-a3f0aa2c3ffa"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
