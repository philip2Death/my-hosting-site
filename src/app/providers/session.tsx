// src/app/providers/session.tsx
'use client'
import { SessionProvider } from 'next-auth/react'

// 保持默认导出不变
export default function AuthProviders({
  children
}: {
  children: React.ReactNode
}) {
  return <SessionProvider refetchInterval={300}>{children}</SessionProvider>
}