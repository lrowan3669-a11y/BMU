import React, { useEffect } from 'react';
import { Screen } from '../App';

interface Props {
  navigate: (s: Screen) => void;
}

const SplashScreen: React.FC<Props> = ({ navigate }) => {
  useEffect(() => {
    const t = setTimeout(() => navigate('onboarding'), 2800);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(ellipse at top, #2D1B4E 0%, #0D0D0F 65%)',
        padding: 24,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow orbs */}
      <div style={{
        position: 'absolute', top: '10%', left: '10%',
        width: 200, height: 200, borderRadius: '50%',
        background: 'rgba(255,45,120,0.15)',
        filter: 'blur(60px)',
      }} />
      <div style={{
        position: 'absolute', bottom: '15%', right: '5%',
        width: 180, height: 180, borderRadius: '50%',
        background: 'rgba(0,180,255,0.12)',
        filter: 'blur(50px)',
      }} />
      <div style={{
        position: 'absolute', top: '40%', right: '20%',
        width: 140, height: 140, borderRadius: '50%',
        background: 'rgba(255,215,0,0.1)',
        filter: 'blur(40px)',
      }} />

      {/* Logo area */}
      <div className="animate-float" style={{ textAlign: 'center', marginBottom: 32 }}>
        <div style={{
          fontSize: 90,
          fontFamily: 'Poppins, Inter, sans-serif',
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: -2,
          marginBottom: 8,
        }}>
          <span style={{ color: '#FF2D78', textShadow: '0 0 30px rgba(255,45,120,0.8)' }}>B</span>
          <span style={{ color: '#FFD700', textShadow: '0 0 30px rgba(255,215,0,0.8)' }}>M</span>
          <span style={{ color: '#00B4FF', textShadow: '0 0 30px rgba(0,180,255,0.8)' }}>U</span>
        </div>
        {/* Puppet string decoration */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 22, marginBottom: 4, opacity: 0.6 }}>
          <div style={{ width: 2, height: 30, background: 'linear-gradient(to bottom, #9B59B6, transparent)' }} />
          <div style={{ width: 2, height: 38, background: 'linear-gradient(to bottom, #9B59B6, transparent)' }} />
          <div style={{ width: 2, height: 30, background: 'linear-gradient(to bottom, #9B59B6, transparent)' }} />
        </div>
        <div style={{
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: 4,
          color: 'rgba(255,255,255,0.5)',
          textTransform: 'uppercase',
          marginBottom: 4,
        }}>Back Me Up</div>
      </div>

      <div style={{
        fontSize: 16,
        color: 'rgba(255,255,255,0.7)',
        fontStyle: 'italic',
        textAlign: 'center',
        marginBottom: 48,
        fontWeight: 500,
      }}>
        "Because Everyone Needs Someone In Their Corner."
      </div>

      {/* Loading dots */}
      <div style={{ display: 'flex', gap: 8 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: 8, height: 8, borderRadius: '50%',
            background: i === 0 ? '#FF2D78' : i === 1 ? '#FFD700' : '#00B4FF',
            animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
          }} />
        ))}
      </div>

      <div style={{
        position: 'absolute', bottom: 32,
        fontSize: 12, color: 'rgba(255,255,255,0.25)', fontWeight: 500,
      }}>
        Your Digital Best Mate
      </div>
    </div>
  );
};

export default SplashScreen;
