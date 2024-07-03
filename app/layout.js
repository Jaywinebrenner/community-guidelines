import { Inter } from "next/font/google";
import { Nanum_Gothic_Coding } from 'next/font/google';
import "./globals.css";

// Import Inter font
const inter = Inter({ subsets: ["latin"] });

// Import Nanum Gothic Coding font
const nanumGothicCoding = Nanum_Gothic_Coding({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: "Community Guidelines Records",
  description: "Records",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${nanumGothicCoding.className}`}>
        {children}
      </body>
    </html>
  );
}
