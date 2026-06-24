import { useState } from 'react'
import { Shield, Search, Bell, Menu, X, Lock } from 'lucide-react'

export default function Navbar({ activePage, setActivePage }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchVal, setSearchVal] = useState('')

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'browse', label: 'Browse' },
    { id: 'my-protection', label: 'My Protection' },
    { id: 'pricing', label: 'Pricing' },
  ]

  return (
    <nav style={{ background: '#0f0f0f', borderBottom: '1px solid #1f1f1f' }} className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-4 h-16">
        {/* Logo */}
        <button
          onClick={() => setActivePage('home')}
          className="flex items-center gap-2 flex-shrink-0"
        >
          <div className="gradient-bg rounded-lg p-1.5">
            <Lock size={18} color="black" strokeWidth={2.5} />
          </div>
          <span className="font-black text-xl tracking-tighter gradient-text">DSTF</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 ml-4">
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => setActivePage(l.id)}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                activePage === l.id
                  ? 'text-orange-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md ml-auto">
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              value={searchVal}
              onChange={e => setSearchVal(e.target.value)}
              placeholder="Search movies, shows, games..."
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-full text-sm text-white placeholder-gray-600 pl-9 pr-4 py-2 focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-gray-400 hover:text-white transition-colors">
            <Bell size={18} />
          </button>
          <button
            onClick={() => setActivePage('pricing')}
            className="gradient-bg text-black font-bold text-xs px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            PROTECT NOW
          </button>
        </div>

        {/* Mobile menu */}
        <button
          className="md:hidden text-gray-400 hover:text-white ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0f0f0f] border-t border-[#1f1f1f] px-4 pb-4">
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => { setActivePage(l.id); setMenuOpen(false) }}
              className={`block w-full text-left py-2.5 text-sm border-b border-[#1a1a1a] ${
                activePage === l.id ? 'text-orange-400' : 'text-gray-400'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
