import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });

import "@/styles/base.scss";
import "@/styles/globals.css";
import DashboardLayout from '@/components/layouts/DashboardLayout';

export const metadata = {
  type: "website",
  description: "fitness king offers an innovative online platform that allows users to simulate and diagnose various health conditions. Take advantage of our advanced technology and comprehensive database to gain insights into your health status and potential conditions.",
  title: "Dashboard layout fitnessKing"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardLayout>
          {children}
        </DashboardLayout>
      </body>
    </html>
  )
}
