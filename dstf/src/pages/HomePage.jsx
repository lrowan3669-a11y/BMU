import { useState } from 'react'
import { Shield, Eye, Zap, Lock, ChevronRight, Star, Film, Trophy, Gamepad2 } from 'lucide-react'
import ContentCard from '../components/ContentCard'
import { featuredContent, trending } from '../data/mockData'

export default function HomePage({ setActivePage, content, onToggleProtect }) {
  const hero = content[0]

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative overflow-hidden" style={{ minHeight: 480 }}>
        <img
          src={hero.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-105"
          style={{ filter: 'brightness(0.3)' }}
        />
        {/* gradient overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.98) 40%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,1) 0%, transparent 60%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24">
          {/* DSTF Mission */}
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="gradient-bg rounded px-2 py-0.5">
                <span className="text-black font-black text-xs tracking-widest">CLASSIFIED</span>
              </div>
              <span className="text-gray-500 text-xs tracking-widest">FILE NO. 042025</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-none tracking-tighter mb-2">
              <span className="gradient-text">DON'T SPOIL</span>
              <br />
              <span className="text-white">THE FUTURE.</span>
            </h1>
            <p className="text-gray-400 mt-4 text-lg leading-relaxed">
              Browse freely. Stay spoiler-free. DSTF is the intelligent spoiler protection layer that automatically detects and redacts spoilers for the shows, movies, games and events you care about.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <button
                onClick={() => setActivePage('pricing')}
                className="gradient-bg text-black font-black px-6 py-3 rounded-full hover:opacity-90 transition-opacity text-sm tracking-wide"
              >
                START PROTECTING
              </button>
              <button
                onClick={() => setActivePage('browse')}
                className="border border-[#2a2a2a] text-white font-bold px-6 py-3 rounded-full hover:border-orange-500/50 transition-colors text-sm flex items-center gap-2"
              >
                Browse Content <ChevronRight size={14} />
              </button>
            </div>

            {/* Quick stats */}
            <div className="flex gap-6 mt-10">
              {[
                { value: '50M+', label: 'Spoilers Blocked' },
                { value: '2M+', label: 'Protected Titles' },
                { value: '6', label: 'Platforms' },
              ].map(s => (
                <div key={s.label}>
                  <div className="text-2xl font-black gradient-text">{s.value}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Spoiler Demo Banner */}
      <div style={{ background: '#111', borderTop: '1px solid #1f1f1f', borderBottom: '1px solid #1f1f1f' }}>
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="gradient-bg p-2 rounded-lg flex-shrink-0">
              <Zap size={16} color="black" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">DSTF is active — spoilers detected on this page</div>
              <div className="text-xs text-gray-500 mt-0.5">3 potential spoilers hidden. Click cards to reveal on your terms.</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-orange-400 font-bold">
            <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            REAL-TIME PROTECTION ACTIVE
          </div>
        </div>
      </div>

      {/* Featured Content */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-black text-white">Your Protected Titles</h2>
            <p className="text-gray-500 text-sm mt-1">Content you've chosen to protect from spoilers</p>
          </div>
          <button
            onClick={() => setActivePage('browse')}
            className="text-orange-400 text-sm font-bold flex items-center gap-1 hover:text-orange-300"
          >
            View All <ChevronRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {content.map(item => (
            <ContentCard key={item.id} item={item} onToggleProtect={onToggleProtect} />
          ))}
        </div>
      </div>

      {/* Trending */}
      <div className="max-w-7xl mx-auto px-4 py-6 pb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-black text-white">Trending — Add Protection</h2>
          <button
            onClick={() => setActivePage('browse')}
            className="text-orange-400 text-sm font-bold flex items-center gap-1 hover:text-orange-300"
          >
            Browse All <ChevronRight size={14} />
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {trending.map(item => (
            <ContentCard key={item.id} item={item} onToggleProtect={onToggleProtect} />
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div style={{ background: '#111', borderTop: '1px solid #1f1f1f' }}>
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white">How DSTF Works</h2>
            <p className="text-gray-500 mt-2">Five steps to a spoiler-free internet</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
            {[
              { step: '01', icon: <Film size={20} />, title: 'SELECT', desc: 'Choose your shows, movies, sports or games.' },
              { step: '02', icon: <Shield size={20} />, title: 'PROFILE', desc: 'DSTF builds your personal spoiler profile.' },
              { step: '03', icon: <Zap size={20} />, title: 'MONITOR', desc: 'AI monitors content across the web in real time.' },
              { step: '04', icon: <Eye size={20} />, title: 'DETECT', desc: 'Spoilers are detected and hidden before you see them.' },
              { step: '05', icon: <Lock size={20} />, title: 'REVEAL', desc: 'Reveal only if you choose. You stay in control.' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="relative inline-flex">
                  <div className="gradient-bg w-12 h-12 rounded-full flex items-center justify-center text-black mx-auto">
                    {s.icon}
                  </div>
                  {i < 4 && (
                    <div className="absolute top-6 left-full w-full h-px hidden sm:block" style={{ background: 'linear-gradient(to right, #e87722, transparent)' }} />
                  )}
                </div>
                <div className="gradient-text text-xs font-black tracking-widest mt-3">STEP {s.step}</div>
                <div className="text-white font-bold text-sm mt-1">{s.title}</div>
                <div className="text-gray-500 text-xs mt-1 leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="gradient-bg">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-black">
            The internet moves fast.<br />DSTF makes sure you don't have to.
          </h2>
          <p className="text-black/70 mt-4 text-lg">Never have another movie, TV show, game or sporting event ruined again.</p>
          <button
            onClick={() => setActivePage('pricing')}
            className="mt-8 bg-black text-white font-black px-8 py-4 rounded-full hover:bg-gray-900 transition-colors text-sm tracking-wide"
          >
            START FOR FREE — NO CARD REQUIRED
          </button>
        </div>
      </div>
    </div>
  )
}
