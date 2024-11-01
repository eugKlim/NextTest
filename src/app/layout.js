import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";


import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



// 
export const metadata = {
  title: 'ГЛАВНАЯ',
  description: 'Описание страницы',
  icons: {
    icon: [
      {
        url: '/fav/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        url: '/fav/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/fav/favicon.ico',
        rel: 'shortcut icon',
      },
    ],
    apple: '/fav/apple-touch-icon.png',
  },
  manifest: '/fav/site.webmanifest', // Указание манифеста
};

// 

export default function RootLayout({ children }) {
  return (
    <html lang="en">

    

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
