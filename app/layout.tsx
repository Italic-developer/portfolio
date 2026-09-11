import type { Metadata } from "next";
import {
  Barlow_Condensed,
  JetBrains_Mono,
  Plus_Jakarta_Sans,
  Inter,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patrick Umekwe",
  description: "Personal developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body
        className={`${jakarta.variable} ${barlow.variable} ${jetbrains.variable}`}
      >
        {children}
        <Toaster
          position="bottom-right"
          theme="dark"
          closeButton
          toastOptions={{
            classNames: {
              toast: "achievement-toast",
              title: "achievement-toast-title",
              description: "achievement-toast-description",
            },
          }}
        />
      </body>
    </html>
  );
}
