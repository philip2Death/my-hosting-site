// src/app/layout.tsx
import './globals.css'
import Link from 'next/link'
import AuthStatus from '@/components/auth/AuthStatus'
import type { Metadata } from 'next'
import AuthProviders from './providers/session'

export const metadata: Metadata = {
  title: 'IT Hosting Pro - 专业云服务',
  description: '提供企业级 Web Hosting、数据库托管和域名注册服务',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-HK" suppressHydrationWarning>
      <body className="min-h-screen bg-gray-50">
        <AuthProviders>
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto p-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              IT Hosting Pro
            </Link>
            <div className="flex gap-6 items-center">
              <Link href="/services" className="hover:text-gray-600">服务</Link>
              <Link href="/dashboard" className="hover:text-gray-600">控制台</Link>
              <AuthStatus />
            </div>
          </div>
        </nav>
        
        <main className="container mx-auto p-4 min-h-[calc(100vh-160px)]">
          {children}
        </main>

        <footer className="bg-gray-800 text-white mt-12">
          <div className="container mx-auto p-6 text-center">
            <p className="mb-2">© {new Date().getFullYear()} IT Hosting Pro - 高端云服务提供商</p>
            <div className="flex justify-center gap-4">
              <Link href="/terms" className="hover:text-blue-400">服务条款</Link>
              <Link href="/privacy" className="hover:text-blue-400">隐私政策</Link>
            </div>
          </div>
        </footer>
        </AuthProviders>
      </body>
    </html>
  )
}