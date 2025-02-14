import './globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto p-4">
            <a href="/" className="text-xl font-bold text-blue-600">IT Hosting</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
