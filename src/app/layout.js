import { Inter } from 'next/font/google';
import "./globals.css";
import Header from "./Components/Header";
<link rel="icon" href="/favicon.ico" />


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Movie Clone",
  description: "This is a movie clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
