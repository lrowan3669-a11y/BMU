import { useState } from 'react'
import { Shield, ShieldOff, Star, Eye, EyeOff, Lock } from 'lucide-react'

export default function ContentCard({ item, onToggleProtect }) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div
      className="rounded-xl overflow-hidden cursor-pointer group transition-transform hover:-translate-y-1"
      style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}
    >
      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Protected overlay */}
        {item.protected && !revealed && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-2"
            style={{ background: 'rgba(10,10,10,0.92)' }}
          >
            <div className="gradient-bg rounded-full p-3">
              <Lock size={20} color="black" />
            </div>
            <span className="text-xs font-bold text-orange-400 tracking-widest">PROTECTED</span>
            <button
              onClick={() => setRevealed(true)}
              className="mt-1 text-xs text-gray-500 hover:text-gray-300 flex items-center gap-1"
            >
              <Eye size={10} /> Reveal
            </button>
          </div>
        )}

        {/* Revealed badge */}
        {item.protected && revealed && (
          <div className="absolute top-2 right-2">
            <button
              onClick={() => setRevealed(false)}
              className="bg-black/70 text-orange-400 rounded-full p-1.5 hover:bg-black"
            >
              <EyeOff size={12} />
            </button>
          </div>
        )}

        {/* Type badge */}
        <div className="absolute top-2 left-2">
          <span
            className="text-[10px] font-bold px-2 py-0.5 rounded"
            style={{ background: 'rgba(0,0,0,0.8)', color: '#e87722', border: '1px solid #e87722' }}
          >
            {item.type.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="font-bold text-sm text-white truncate">{item.title}</h3>
        <div className="flex items-center justify-between mt-1">
          <span className="text-gray-500 text-xs">{item.year}</span>
          {item.rating > 0 && (
            <div className="flex items-center gap-1">
              <Star size={11} className="text-yellow-400 fill-yellow-400" />
              <span className="text-xs font-bold text-yellow-400">{item.rating}</span>
            </div>
          )}
        </div>

        {/* Genres */}
        <div className="flex flex-wrap gap-1 mt-2">
          {item.genre.slice(0, 2).map(g => (
            <span key={g} className="text-[10px] text-gray-500 bg-[#222] px-2 py-0.5 rounded-full">
              {g}
            </span>
          ))}
        </div>

        {/* Protect toggle */}
        <button
          onClick={() => onToggleProtect(item.id)}
          className={`mt-3 w-full text-xs font-bold py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
            item.protected
              ? 'bg-orange-500/10 text-orange-400 border border-orange-500/30 hover:bg-orange-500/20'
              : 'bg-[#222] text-gray-400 border border-[#333] hover:border-orange-500/30 hover:text-orange-400'
          }`}
        >
          {item.protected ? <><Shield size={11} /> Protected</> : <><ShieldOff size={11} /> Unprotected</>}
        </button>
      </div>
    </div>
  )
}
