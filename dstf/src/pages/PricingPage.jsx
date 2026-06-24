import { Check, Zap, Shield, Lock } from 'lucide-react'
import { plans } from '../data/mockData'

export default function PricingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 gradient-bg rounded-full px-4 py-1.5 mb-4">
          <Lock size={12} color="black" />
          <span className="text-black font-black text-xs tracking-widest">DSTF SUBSCRIPTIONS</span>
        </div>
        <h1 className="text-4xl font-black text-white mt-2">
          You Choose What to Protect.<br />
          <span className="gradient-text">We Protect Your Future.</span>
        </h1>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Start free with basic protection. Upgrade anytime for full AI-powered spoiler detection across all platforms.
        </p>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {plans.map(plan => (
          <div
            key={plan.id}
            className={`rounded-2xl p-6 flex flex-col ${plan.highlight ? 'gradient-border' : ''}`}
            style={{
              background: plan.highlight ? '#1f1510' : '#1a1a1a',
              border: plan.highlight ? undefined : '1px solid #2a2a2a',
            }}
          >
            {/* Tag */}
            <div className={`text-xs font-black tracking-widest mb-4 ${plan.highlight ? 'gradient-text' : 'text-gray-500'}`}>
              {plan.tag}
            </div>

            <h2 className="text-xl font-black text-white">{plan.name}</h2>

            <div className="mt-3 mb-6">
              <span className={`text-4xl font-black ${plan.highlight ? 'gradient-text' : 'text-white'}`}>
                {plan.price}
              </span>
              <span className="text-gray-500 text-sm ml-1">{plan.period}</span>
            </div>

            <ul className="space-y-3 flex-1">
              {plan.features.map(f => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                  <Check size={14} className={`mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-orange-400' : 'text-gray-500'}`} />
                  {f}
                </li>
              ))}
            </ul>

            <button
              className={`mt-8 w-full font-black text-sm py-3 rounded-full transition-all ${
                plan.highlight
                  ? 'gradient-bg text-black hover:opacity-90'
                  : 'border border-[#2a2a2a] text-white hover:border-orange-500/50 hover:text-orange-400'
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      {/* Feature comparison */}
      <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #2a2a2a' }}>
        <div className="px-6 py-4" style={{ background: '#1a1a1a', borderBottom: '1px solid #2a2a2a' }}>
          <h2 className="text-lg font-black text-white">What's Included</h2>
        </div>
        <div style={{ background: '#111' }}>
          {[
            { feature: 'AI Spoiler Detection', free: true, movies: true, games: true },
            { feature: 'Real-Time Redaction', free: false, movies: true, games: true },
            { feature: 'Social Media Overlay', free: false, movies: true, games: true },
            { feature: 'Browser Extension', free: true, movies: true, games: true },
            { feature: 'Custom Spoiler Profiles', free: false, movies: true, games: true },
            { feature: 'Video Game Protection', free: false, movies: false, games: true },
            { feature: 'Leak & Rumour Blocking', free: false, movies: false, games: true },
            { feature: 'No Ads', free: false, movies: true, games: true },
            { feature: 'Protected Titles', free: 'Up to 3', movies: 'Unlimited', games: 'Unlimited' },
          ].map((row, i) => (
            <div
              key={row.feature}
              className="grid grid-cols-4 px-6 py-3 text-sm"
              style={{ borderBottom: i < 8 ? '1px solid #1a1a1a' : 'none' }}
            >
              <div className="text-gray-400 font-medium">{row.feature}</div>
              {[row.free, row.movies, row.games].map((val, j) => (
                <div key={j} className="text-center">
                  {typeof val === 'string' ? (
                    <span className="text-orange-400 font-bold text-xs">{val}</span>
                  ) : val ? (
                    <Check size={14} className="text-orange-400 mx-auto" />
                  ) : (
                    <span className="text-gray-700">—</span>
                  )}
                </div>
              ))}
            </div>
          ))}
          <div className="grid grid-cols-4 px-6 py-2 text-xs font-bold text-gray-600" style={{ borderTop: '1px solid #1a1a1a' }}>
            <div />
            <div className="text-center">FREE</div>
            <div className="text-center gradient-text">MOVIES & TV</div>
            <div className="text-center text-orange-400">+ GAMES</div>
          </div>
        </div>
      </div>

      {/* Colour scheme / brand info */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { name: 'ALERT RED', hex: '#e63c2f', desc: 'Warning & Protection' },
          { name: 'BURNT ORANGE', hex: '#e87722', desc: 'Energy & Focus' },
          { name: 'DEEP BLACK', hex: '#0a0a0a', desc: 'Stealth & Privacy' },
          { name: 'WHITE', hex: '#ffffff', desc: 'Clarity & Readability' },
        ].map(c => (
          <div key={c.name} className="rounded-xl p-4" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            <div className="w-8 h-8 rounded-full mb-2 border border-[#333]" style={{ background: c.hex }} />
            <div className="text-xs font-black text-white">{c.name}</div>
            <div className="text-xs text-gray-500 mt-0.5">{c.desc}</div>
          </div>
        ))}
      </div>

      {/* Guarantee */}
      <div className="mt-10 text-center">
        <p className="text-gray-600 text-sm">
          No contracts. Cancel anytime. Your data, your settings, your future.
        </p>
        <div className="flex justify-center gap-8 mt-6 text-xs text-gray-700">
          <span>Respect other people's experience</span>
          <span>•</span>
          <span>No spoilers. No exceptions.</span>
          <span>•</span>
          <span>Technology that puts you first</span>
        </div>
      </div>
    </div>
  )
}
