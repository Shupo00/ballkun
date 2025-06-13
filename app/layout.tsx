
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from 'next/font/google';

import { Zen_Maru_Gothic } from 'next/font/google';
const zenMaru = Zen_Maru_Gothic({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={zenMaru.className}>{children}</body>
    </html>
  );
}


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'ぼくの価値、だれが決めた？',
  description: 'ぼーるくんの診断アプリ',
};




