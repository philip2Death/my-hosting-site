'use client';
import Link from 'next/link';
import { useActionState } from 'react'
import { usePathname } from 'next/navigation'
export default function Navbar2() {
  // 修改: 使用 useActionState 來管理 isMenuOpen 狀態
  const [isMenuOpen, toggleMenu, isPending] = useActionState(
    async (previousState) => {
      return !previousState;
    },
    false // 初始狀態
  );
  // 在元件內獲取路徑
  const pathname = usePathname()
  
  return (
    
    <nav className="height:100dvh  bg-[oklch(var(--nav-bg)/1)] text-[oklch(var(--nav-text))] backdrop-blur-[12px] p-4">
      <div className="@container/navbar mx-auto flex items-center justify-between">
        <Link 
          href="/" 
          className="text-xl font-bold tracking-tighter"
          aria-label="首頁導航"
        >
          IT Hosting Pro
        </Link>
        
        <div className="hidden @[768px]:flex items-center gap-4">
          <Link
            href="/login"
            className="text-[oklch(var(--nav-text))] hover:text-[oklch(var(--nav-text-hover))] transition-colors duration-200 ease-productive"
            role="menuitem"
          >
            登入
          </Link>
          <Link
            href="/register"
            className="text-[oklch(var(--nav-text))] hover:text-[oklch(var(--nav-text-hover))] transition-colors duration-200 ease-productive"
            role="menuitem"
          >
            註冊
          </Link>
        </div>
        <button
          className="@[768px]:hidden text-[oklch(var(--nav-text))] focus-visible:ring-2 ring-offset-2 ring-[oklch(var(--nav-text)/0.5)] touch-manipulation active:scale-[0.98]"
          aria-expanded="false"
          aria-controls="mobile-menu"
        >
          {/* SVG保持不變 */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
