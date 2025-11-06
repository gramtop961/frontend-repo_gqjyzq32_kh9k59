import Spline from '@splinetool/react-spline'

export default function Hero3D() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden pt-20">
      <div className="absolute inset-0">
        {/* 3D Scene */}
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Glass Morphic Overlay Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10 py-16">
        <div className="w-full lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/30 backdrop-blur border border-white/40 text-gray-800 text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Live 3D • Fintech Edition
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Belanja Modern dengan Sentuhan 3D yang Mewah
          </h1>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Eksplorasi pengalaman ecommerce futuristik bernuansa glassmorphism dan objek 3D kartu kredit yang interaktif. Desain modern, minimalis, dan digital — dibuat untuk memukau.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#products" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gray-900 text-white hover:bg-black transition-colors shadow-lg shadow-gray-900/10">
              Jelajahi Produk
            </a>
            <a href="#features" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/70 backdrop-blur border border-gray-200 text-gray-900 hover:bg-white">
              Lihat Fitur
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="relative rounded-2xl p-6 bg-white/30 backdrop-blur-xl border border-white/50 shadow-2xl">
            <div className="absolute -top-16 -right-16 h-64 w-64 bg-gradient-to-tr from-indigo-500/30 via-blue-500/30 to-cyan-400/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 h-64 w-64 bg-gradient-to-tr from-fuchsia-500/30 via-purple-500/30 to-pink-400/30 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <h3 className="text-xl font-semibold text-gray-900">Pembayaran Aman & Cepat</h3>
              <p className="mt-2 text-gray-700">
                Kartu virtual, dompet digital, dan proteksi transaksi tingkat lanjut untuk pengalaman checkout yang nyaman.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay for readability, non-blocking */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-white/10 to-white/70" />
    </section>
  )
}
