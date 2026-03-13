import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "灵轨（Ling） - AI Agent 能力扩展工具包",
  description: "面向 Gemini CLI、Antigravity 与 Codex 的中文 AI Agent 模板集合，包含技能、规则与工作流。",
  metadataBase: new URL("https://github.com/MisonL/Ling"),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://github.com/MisonL/Ling",
    siteName: "灵轨（Ling）",
    images: [
      "https://raw.githubusercontent.com/MisonL/Ling/main/web/public/images/logo.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
