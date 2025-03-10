// /app/tour/layout.tsx
import Navbar2 from '@/components/layout/Navbar2';
import Footer2 from '@/components/layout/Footer2';
export default function TourLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="min-h-dvh flex flex-col">
        <Navbar2 />
        <main className="flex-1">{children}</main>
        <Footer2 />
      </div>
    )
  }
  