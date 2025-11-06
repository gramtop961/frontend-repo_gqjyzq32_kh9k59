import { Star, ShoppingBag } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Neo Card Pro',
    price: 'Rp 1.299.000',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Glass Wallet',
    price: 'Rp 799.000',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1597664607810-e59e0318e775?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHbGFzcyUyMFdhbGxldHxlbnwwfDB8fHwxNzYyMzk4MzM0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Secure Token',
    price: 'Rp 599.000',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1635236066503-22f4217c2ad6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTZWN1cmUlMjBUb2tlbnxlbnwwfDB8fHwxNzYyMzk4MzM1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    name: 'Neo Card Lite',
    price: 'Rp 999.000',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop'
  }
]

export default function ProductShowcase() {
  return (
    <section id="products" className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Pilihan Unggulan</h2>
            <p className="mt-3 text-gray-700">Produk fintech modern dengan kualitas premium.</p>
          </div>
          <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">Lihat semua</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">{p.name}</h3>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-amber-500" />
                    <span className="text-sm font-medium">{p.rating}</span>
                  </div>
                </div>
                <p className="mt-1 text-gray-700">{p.price}</p>
                <button className="mt-3 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-black">
                  <ShoppingBag className="h-4 w-4" />
                  Tambah ke Keranjang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
