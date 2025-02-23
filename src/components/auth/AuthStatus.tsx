// src/components/auth/AuthStatus.tsx
'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function AuthStatus() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div className="h-4 w-20 animate-pulse bg-gray-200 rounded" />
  }

  return (
    <div className="flex items-center gap-4">
      {session?.user ? (
        <>
          <span className="text-sm text-gray-600">
            {session.user.email}
          </span>
          <Link
            href="/api/auth/signout"
            className="text-sm text-red-600 hover:text-red-700"
          >
            退出
          </Link>
        </>
      ) : (
        <Link
          href="/login"
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          登录
        </Link>
      )}
    </div>
  )
}