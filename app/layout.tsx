import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solohitech — Digital Solutions Company",
  description: "We build scalable digital products, apps, cloud systems and enterprise platforms.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
