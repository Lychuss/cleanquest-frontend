import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { StatsBadgeProvider } from "../context/StatsBadgeContext";
import { TasksProvider } from "../context/TasksContext";

const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap"
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://cleanquest-game.vercel.app"),
  title: "CleanQuest Game",
  description: "CleanQuest Game: It's an image based game where players need to take a picture of the specific task that they want to complete. Its a game that ranks players based on how clean and how tidy they are.",
  alternates: { canonical: "https://cleanquest-game.vercel.app" },
  openGraph: {
    title: "CleanQuest Game",
    description: "CleanQuest Game: It's an image based game where players need to take a picture of the specific task that they want to complete. Its a game that ranks players based on how clean and how tidy they are.",
    url: "https://cleanquest-game.vercel.app",
    images: ["/logo/cleanquest-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={`${jetBrains.variable} h-full antialiased`}>
      <body className="mx-auto min-h-screen max-w-md bg-white shadow-2xl">
          <StatsBadgeProvider>
            <TasksProvider>
              {children}
            </TasksProvider>
          </StatsBadgeProvider>
      </body>
    </html>
  );
}
