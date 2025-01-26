import { ClerkProvider } from '@clerk/nextjs';
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import "~/styles/globals.css";

export const metadata: Metadata = {
  title: "Counter",
  description: "Tinder for Furniture",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={GeistSans.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}