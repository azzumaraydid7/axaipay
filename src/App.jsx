import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ThankYou from './pages/ThankYou.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-black text-white font-bold">AX</span>
            <span className="font-semibold">Axaipay Demo</span>
          </NavLink>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#features" className="hover:underline">Features</a>
            <a href="#how" className="hover:underline">How it works</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>

      <footer id="contact" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 sm:grid-cols-3 text-sm">
          <div>
            <div className="font-semibold mb-2">Axaipay Demo</div>
            <p className="text-gray-600">Conversion‑focused landing pages & funnels for payment acceptance.</p>
          </div>
          <div>
            <div className="font-semibold mb-2">Contact</div>
            <p className="text-gray-600">hello@example.com</p>
          </div>
          <div>
            <div className="font-semibold mb-2">Follow</div>
            <p className="text-gray-600">LinkedIn • GitHub • X</p>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 pb-6">© 2025 Axaipay Demo. For recruitment demo only.</div>
      </footer>
    </div>
  )
}
