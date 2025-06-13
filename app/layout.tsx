
;
import "./globals.css";


import { Zen_Maru_Gothic } from 'next/font/google';
const zenMaru = Zen_Maru_Gothic({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={zenMaru.className}>{children}</body>
    </html>
  );
}



export const metadata = {
  title: 'ぼくの価値、だれが決めた？',
  description: 'ぼーるくんの診断アプリ',
};




