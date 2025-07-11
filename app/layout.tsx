import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "POLKA - Bisnis Digital",
    default: "POLKA - Bisnis Digital", 
  },
  description: "Created by Reunia Sapti Azahra ",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
