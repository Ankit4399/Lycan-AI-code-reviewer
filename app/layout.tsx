import { ThemeProvider } from "@/components/providers/theme-provider"
import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { QueryProvider } from "@/components/providers/query-provider";
import { Toaster } from "@/components/ui/sonner";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lycan — AI Code Reviewer for GitHub",
    template: "%s · Lycan",
  },
  description:
    "Lycan reviews every pull request with AI-powered analysis. Catch bugs, enforce patterns, and ship faster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", outfit.variable, "font-sans", jetbrainsMono.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
      <QueryProvider>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
          </QueryProvider>
      </body>
    </html>
  );
}
