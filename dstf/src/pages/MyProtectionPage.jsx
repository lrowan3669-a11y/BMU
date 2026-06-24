import { Shield, ShieldOff, Lock, Eye, Trash2, Plus } from 'lucide-react'
import ContentCard from '../components/ContentCard'

export default function MyProtectionPage({ content, onToggleProtect, setActivePage }) {
  const protected_ = content.filter(c => c.protected)
  const unprotected = content.filter(c => !c.protected)

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-white">My Protection</h1>
          <p className="text-gray-500 mt-1">Manage what DSTF is protecting for you.</p>
        </div>
        <button
          onClick={() => setActivePage('browse')}
          className="gradient-bg text-black font-black text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <Plus size={14} /> Add Title
        </button>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        {[
          { label: 'Protected Titles', value: protected_.length, icon: <Shield size={18} />, color: 'text-orange-400' },
          { label: 'Spoilers Blocked', value: '1,247', icon: <Eye size={18} />, color: 'text-red-400' },
          { label: 'Unprotected', value: unprotected.length, icon: <ShieldOff size={18} />, color: 'text-gray-500' },
        ].map(s => (
          <div
            key={s.label}
            className="rounded-xl p-4 flex items-center gap-3"
            style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}
          >
            <div className={`${s.color}`}>{s.icon}</div>
            <div>
              <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
              <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Protected section */}
      {protected_.length > 0 && (
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="gradient-bg p-1.5 rounded-lg">
              <Lock size={14} color="black" />
            </div>
            <h2 className="text-lg font-black text-white">Currently Protected</h2>
            <span className="gradient-text text-sm font-bold ml-1">({protected_.length})</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {protected_.map(item => (
              <ContentCard key={item.id} item={item} onToggleProtect={onToggleProtect} />
            ))}
          </div>
        </div>
      )}

      {/* Unprotected section */}
      {unprotected.length > 0 && (
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <ShieldOff size={16} className="text-gray-500" />
            <h2 className="text-lg font-black text-white">Not Protected</h2>
            <span className="text-gray-500 text-sm ml-1">({unprotected.length})</span>
          </div>
          <p className="text-gray-600 text-sm mb-4">These titles are not protected — you may encounter spoilers.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {unprotected.map(item => (
              <ContentCard key={item.id} item={item} onToggleProtect={onToggleProtect} />
            ))}
          </div>
        </div>
      )}

      {/* Platforms */}
      <div className="mt-12 p-6 rounded-xl" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
        <h2 className="text-lg font-black text-white mb-1">Protection Works Across</h2>
        <p className="text-gray-500 text-sm mb-5">DSTF monitors and protects these platforms automatically.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {['Facebook', 'Instagram', 'TikTok', 'Reddit / X', 'News Sites', 'Forums & Blogs'].map(p => (
            <div
              key={p}
              className="text-center py-3 px-2 rounded-lg text-sm font-bold text-gray-400"
              style={{ background: '#111', border: '1px solid #2a2a2a' }}
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
