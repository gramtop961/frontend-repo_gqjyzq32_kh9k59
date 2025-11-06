import { useState } from 'react'
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center">
      <li className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">Produk</li>
      <li className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">Kategori</li>
      <li className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">Promo</li>
      <li className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">Kontak</li>
    </ul>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/60 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-blue-500 to-cyan-400 shadow-lg shadow-indigo-500/30" />
            <span className="font-semibold text-gray-900 text-lg">NeoPay Store</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
            <div className="relative hidden lg:block">
              <input
                type="text"
                placeholder="Cari produk..."
                className="pl-10 pr-4 py-2 rounded-full bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white hover:bg-black transition-colors">
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden sm:inline">Keranjang</span>
            </button>
            <button className="p-2 rounded-full border border-gray-200 hover:bg-white">
              <User className="h-4 w-4 text-gray-700" />
            </button>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border border-gray-200 bg-white/70">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white/80 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <NavLinks />
            <div className="mt-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari produk..."
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              </div>
              <div className="flex gap-3 mt-4">
                <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white hover:bg-black transition-colors">
                  <ShoppingCart className="h-4 w-4" />
                  Keranjang
                </button>
                <button className="px-3 py-2 rounded-full border border-gray-200">
                  <User className="h-4 w-4 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
