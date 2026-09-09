import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TrustStrip from './components/TrustStrip.jsx'
import Features from './components/Features.jsx'
import CryptoPayments from './components/CryptoPayments.jsx'
import InstallGuide from './components/InstallGuide.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-cream font-sans text-ink">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Features />
        <CryptoPayments />
        <InstallGuide />
        <FAQ />
      </main>
      <Footer />

      {/* Film-grain overlay for a premium printed-paper feel */}
      <div aria-hidden="true" className="noise-overlay fixed inset-0 z-[60]" />
    </div>
  )
}
