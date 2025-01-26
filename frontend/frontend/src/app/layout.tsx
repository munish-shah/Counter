import { ClerkProvider } from '@clerk/nextjs';
import { GeistSans } from "geist/font/sans";
import { AuthButton } from "~/components/AuthButton";
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
          <html lang="en" className={GeistSans.variable}>
            <body className="font-sans">
              {/* Navigation bar with auth button */}
              <nav className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center bg-white shadow-sm">
                <div>
                  {/* Logo space */}
                </div>
                <div>
                  <AuthButton />
                </div>
              </nav>
              
              {/* Add padding to main content to account for fixed nav */}
              <div className="pt-16">
                {children}
              </div>
            </body>
          </html>
        </ClerkProvider>
      );
}