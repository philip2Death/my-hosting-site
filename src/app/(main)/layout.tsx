import './globals.css'
import Link from 'next/link'
import AuthStatus from '@/components/auth/AuthStatus'
import type { Metadata } from 'next'
import AuthProviders from './providers/session'
import Navbar from '@/components/layout/Navbar';
import Navbar2 from '@/components/layout/Navbar2';
import Footer from '@/components/layout/Footer';
import Footer2 from '@/components/layout/Footer2';

export const metadata: Metadata = {
  title: 'IT Hosting Pro - 专业云服务',
  description: '提供企业级 Web Hosting、数据库托管和域名注册服务',
  icons: [
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' }, // 內置 Favicon
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navItems = [
    { name: 'Pricing', href: '/pricing' },
    { name: 'Services', href: '/services' },
    { name: 'Dashboard', href: '/dashboard' },
  ];
  return (
    <html lang="zh-HK" suppressHydrationWarning>
      <body className="min-h-screen bg-gray-50">
        
          <Navbar/>
          
          <main className="container mx-auto p-4 min-h-[calc(100vh-160px)]">
            {children}
          </main>
          <Footer/>
        
      </body>
    </html>
  )
}