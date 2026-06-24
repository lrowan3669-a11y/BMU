import { useEffect, useState } from 'react'
import { Lock } from 'lucide-react'

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState(0)

  // phase 0: logo appears (0-1s)
  // phase 1: text animates in (1-2.5s)
  // phase 2: redact bars sweep (2.5-3.5s)
  // phase 3: fade out (3.5-4s)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 800)
    const t2 = setTimeout(() => setPhase(2), 2000)
    const t3 = setTimeout(() => setPhase(3), 3200)
    const t4 = setTimeout(() => onComplete(), 4000)
    return () => [t1, t2, t3, t4].forEach(clearTimeout)
  }, [onComplete])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#0a0a0a',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: phase === 3 ? 0 : 1,
        transition: phase === 3 ? 'opacity 0.8s ease' : 'none',
      }}
    >
      {/* Classified stamp */}
      <div
        style={{
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'translateY(0)' : 'translateY(-12px)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
          marginBottom: 12,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <div
          style={{
            border: '2px solid #e63c2f',
            borderRadius: 4,
            padding: '2px 10px',
            fontFamily: 'Courier New, monospace',
            fontWeight: 'bold',
            fontSize: 11,
            color: '#e63c2f',
            letterSpacing: 4,
            transform: 'rotate(-3deg)',
          }}
        >
          CLASSIFIED
        </div>
        <span style={{ color: '#333', fontSize: 11, fontFamily: 'Courier New, monospace', letterSpacing: 2 }}>
          FILE NO. 042025
        </span>
      </div>

      {/* Redact lines above */}
      <div style={{ width: 280, marginBottom: 16 }}>
        {[1, 0.6, 0.85].map((w, i) => (
          <div
            key={i}
            style={{
              height: 10,
              background: '#111',
              borderRadius: 2,
              marginBottom: 6,
              width: `${w * 100}%`,
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: phase >= 2 ? '#1a1a1a' : '#111',
                transform: phase >= 2 ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left',
                transition: `transform ${0.3 + i * 0.1}s ease ${i * 0.08}s`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Main logo */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          opacity: phase >= 0 ? 1 : 0,
          transform: phase >= 0 ? 'scale(1)' : 'scale(0.8)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        {/* Icon */}
        <div
          style={{
            background: 'linear-gradient(135deg, #e63c2f, #e87722)',
            borderRadius: 16,
            padding: 14,
            marginBottom: 16,
          }}
        >
          <Lock size={32} color="black" strokeWidth={2.5} />
        </div>

        {/* DSTF wordmark */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            letterSpacing: -2,
            lineHeight: 1,
            background: 'linear-gradient(135deg, #e63c2f, #e87722)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          DSTF
        </div>

        <div
          style={{
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginTop: 8,
          }}
        >
          <div style={{ height: 1, width: 40, background: 'linear-gradient(to right, transparent, #e87722)' }} />
          <Lock size={10} color="#e87722" />
          <span style={{ color: '#e87722', fontSize: 11, fontWeight: 700, letterSpacing: 3 }}>
            DON'T SPOIL THE FUTURE
          </span>
          <Lock size={10} color="#e87722" />
          <div style={{ height: 1, width: 40, background: 'linear-gradient(to left, transparent, #e87722)' }} />
        </div>
      </div>

      {/* Redact lines below */}
      <div style={{ width: 280, marginTop: 16 }}>
        {[0.7, 1, 0.5].map((w, i) => (
          <div
            key={i}
            style={{
              height: 10,
              background: '#111',
              borderRadius: 2,
              marginBottom: 6,
              width: `${w * 100}%`,
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: phase >= 2 ? '#1a1a1a' : '#111',
                transform: phase >= 2 ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'right',
                transition: `transform ${0.3 + i * 0.1}s ease ${i * 0.08 + 0.15}s`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Status line */}
      <div
        style={{
          marginTop: 40,
          opacity: phase >= 1 ? 1 : 0,
          transition: 'opacity 0.5s ease 0.4s',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#e87722',
            animation: 'pulse 1s infinite',
          }}
        />
        <span style={{ color: '#444', fontSize: 11, fontFamily: 'Courier New, monospace', letterSpacing: 2 }}>
          {phase < 2 ? 'INITIALISING PROTECTION...' : 'PROTECTION ACTIVE'}
        </span>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  )
}
