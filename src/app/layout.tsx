import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Armaan Mishra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "dark bg-[#111010] antialiased max-w-2xl mx-auto",
          sora.className
        )}
      >
        {children}
        <footer className="border-t bottom-0 p-4 max-w-2xl mx-auto">
          <p className="text-xs text-muted-foreground text-center">
            made with ❤️
          </p>
        </footer>
      </body>
    </html>
  );
}
