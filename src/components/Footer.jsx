export default function Footer() {
  return (
    <footer className="pt-16 pb-10 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-blue-500 to-cyan-400 shadow-lg shadow-indigo-500/30 mb-3" />
            <h4 className="font-semibold text-gray-900">NeoPay Store</h4>
            <p className="mt-2 text-gray-600">Ecommerce futuristik dengan sentuhan 3D dan desain glassmorphism.</p>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900">Bantuan</h5>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>Pusat Bantuan</li>
              <li>Pengembalian</li>
              <li>Pengiriman</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900">Perusahaan</h5>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>Tentang Kami</li>
              <li>Karir</li>
              <li>Kontak</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900">Subscribe</h5>
            <p className="mt-3 text-gray-600">Dapatkan info promosi dan produk terbaru.</p>
            <div className="mt-3 flex gap-2">
              <input type="email" placeholder="Email Anda" className="flex-1 px-3 py-2 rounded-xl border border-gray-200" />
              <button className="px-4 py-2 rounded-xl bg-gray-900 text-white">Kirim</button>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6 text-sm text-gray-600 flex flex-col sm:flex-row justify-between">
          <p>© {new Date().getFullYear()} NeoPay Store. Semua hak dilindungi.</p>
          <p className="mt-2 sm:mt-0">Privasi • Syarat & Ketentuan</p>
        </div>
      </div>
    </footer>
  )
}
