import { Lock } from 'lucide-react'

export default function Footer({ setActivePage }) {
  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid #1a1a1a' }}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="gradient-bg rounded-lg p-1.5">
                <Lock size={14} color="black" strokeWidth={2.5} />
              </div>
              <span className="font-black text-lg gradient-text tracking-tighter">DSTF</span>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed">
              Don't Spoil The Future. Browse freely. Stay spoiler-free.
            </p>
          </div>

          {[
            {
              title: 'Product',
              links: ['Features', 'Pricing', 'Browser Extension', 'Mobile App']
            },
            {
              title: 'Protect',
              links: ['Movies & TV', 'Sports', 'Video Games', 'Reality TV']
            },
            {
              title: 'Company',
              links: ['About', 'Blog', 'Privacy Policy', 'Terms']
            }
          ].map(col => (
            <div key={col.title}>
              <h3 className="text-white font-bold text-sm mb-3">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map(l => (
                  <li key={l}>
                    <a href="#" className="text-gray-600 text-xs hover:text-orange-400 transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-[#1a1a1a] gap-4">
          <p className="text-gray-700 text-xs">© 2025 DSTF — Don't Spoil The Future. File No. 042025.</p>
          <div className="flex items-center gap-4 text-xs text-gray-700">
            <span className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              Protection Active
            </span>
            <span>DETECTS. REDACTS. PROTECTS. RESPECTS.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
