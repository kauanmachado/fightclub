"use client"
import { Roboto_Condensed } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

const roboto = Roboto_Condensed({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <Navbar/>
        <main className="flex min-h-screen flex-col items-center justify-between bg-gray-800">
            {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
