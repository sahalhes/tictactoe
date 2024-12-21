import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ModeToggle } from "@/components/Toggle";
// Import the Google font "Inter"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex justify-end p-4">
            <ModeToggle/> 
          </div>
            {children}
          </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}