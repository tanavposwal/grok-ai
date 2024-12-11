import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider, SignIn, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.className} max-w-screen-sm mx-auto h-screen antialiased dark flex flex-col items-center justify-center`}
        >
          <SignedOut>
            <h1 className="text-4xl font-bold mb-2">Highly Brutal AI</h1>
            <p className="text-lg mb-3 text-primary/70">A simple chatbot powered by Grok AI</p>
          <SignIn />
          </SignedOut>
          <SignedIn>
          {children}
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
