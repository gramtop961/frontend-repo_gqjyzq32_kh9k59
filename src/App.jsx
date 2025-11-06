import Navbar from './components/Navbar'
import Hero3D from './components/Hero3D'
import FeatureGrid from './components/FeatureGrid'
import ProductShowcase from './components/ProductShowcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero3D />
        <FeatureGrid />
        <ProductShowcase />
      </main>
      <Footer />
    </div>
  )
}

export default App
