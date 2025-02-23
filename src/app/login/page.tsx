// src/app/login/page.tsx
'use client'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    const result = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false
    })

    if (result?.error) {
      alert('登录失败，请检查凭证')
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <div className="max-w-md mx-auto my-12 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">会员登录</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="电子邮箱"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="密码"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          required
        />
        <button 
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
        >
          登录
        </button>
      </form>
    </div>
  )
}