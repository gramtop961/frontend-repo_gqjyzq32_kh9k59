import { Shield, Zap, CreditCard, Sparkles } from 'lucide-react'

export default function FeatureGrid() {
  const features = [
    {
      icon: CreditCard,
      title: 'Pembayaran Fleksibel',
      desc: 'Kartu kredit/debit, e-wallet, dan cicilan 0% untuk kemudahan bertransaksi.'
    },
    {
      icon: Shield,
      title: 'Keamanan Kelas Bank',
      desc: 'Enkripsi end‑to‑end dan deteksi fraud otomatis menjaga data Anda.'
    },
    {
      icon: Zap,
      title: 'Super Cepat',
      desc: 'Antarmuka responsif dan checkout instan untuk pengalaman tanpa hambatan.'
    },
    {
      icon: Sparkles,
      title: 'Desain 3D Modern',
      desc: 'Glassmorphism halus dengan elemen 3D interaktif yang memukau.'
    }
  ]

  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Kenapa Memilih Kami?</h2>
          <p className="mt-3 text-gray-700">Fitur canggih untuk pengalaman belanja yang cepat, aman, dan menyenangkan.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl p-6 bg-gradient-to-br from-white to-white/60 border border-gray-200 overflow-hidden">
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-400/20 via-blue-400/20 to-cyan-300/20 blur-2xl pointer-events-none" />
              <div className="h-12 w-12 rounded-xl bg-gray-900 text-white flex items-center justify-center shadow-lg shadow-gray-900/10">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-semibold text-lg text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
