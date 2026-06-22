import React, { useState } from 'react';
import { Screen } from '../App';

interface Props {
  navigate: (s: Screen) => void;
}

const LoginScreen: React.FC<Props> = ({ navigate }) => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = () => navigate('home');

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at top, #1A0A2E 0%, #0D0D0F 60%)',
      display: 'flex',
      flexDirection: 'column',
      padding: '60px 24px 40px',
    }}>
      {/* Logo */}
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <div style={{ fontSize: 48, fontWeight: 900, letterSpacing: -1, marginBottom: 4 }}>
          <span style={{ color: '#FF2D78' }}>B</span>
          <span style={{ color: '#FFD700' }}>M</span>
          <span style={{ color: '#00B4FF' }}>U</span>
        </div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', letterSpacing: 3, textTransform: 'uppercase' }}>
          Back Me Up
        </div>
      </div>

      {/* Mode switcher */}
      <div style={{
        display: 'flex',
        background: 'rgba(255,255,255,0.05)',
        borderRadius: 100,
        padding: 4,
        marginBottom: 28,
        border: '1px solid rgba(255,255,255,0.08)',
      }}>
        {(['login', 'register'] as const).map(m => (
          <button
            key={m}
            onClick={() => setMode(m)}
            style={{
              flex: 1,
              padding: '10px 0',
              borderRadius: 100,
              border: 'none',
              fontWeight: 700,
              fontSize: 14,
              cursor: 'pointer',
              transition: 'all 0.2s',
              background: mode === m ? '#FF2D78' : 'transparent',
              color: mode === m ? 'white' : 'rgba(255,255,255,0.5)',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {m === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        ))}
      </div>

      {/* Form */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 24 }}>
        {mode === 'register' && (
          <div>
            <label style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 600, marginBottom: 6, display: 'block' }}>
              Your Name
            </label>
            <input
              className="input-field"
              placeholder="What should we call you?"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
        )}
        <div>
          <label style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 600, marginBottom: 6, display: 'block' }}>
            Email Address
          </label>
          <input
            className="input-field"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 600, marginBottom: 6, display: 'block' }}>
            Password
          </label>
          <input
            className="input-field"
            type="password"
            placeholder="••••••••"
            value={pass}
            onChange={e => setPass(e.target.value)}
          />
        </div>
      </div>

      {mode === 'login' && (
        <button style={{ background: 'none', border: 'none', color: '#FF2D78', fontSize: 13, fontWeight: 600, cursor: 'pointer', textAlign: 'right', marginBottom: 20, fontFamily: 'Inter, sans-serif' }}>
          Forgot password?
        </button>
      )}

      <button className="btn btn-pink btn-full" style={{ fontSize: 16, marginBottom: 20 }} onClick={handleSubmit}>
        {mode === 'login' ? 'Sign In 👋' : 'Join BMU 🚀'}
      </button>

      {/* Divider */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>OR CONTINUE WITH</span>
        <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
      </div>

      {/* Social buttons */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 28 }}>
        {['🍎 Apple', '🌐 Google'].map(label => (
          <button
            key={label}
            className="btn btn-outline"
            style={{ flex: 1, fontSize: 14 }}
            onClick={handleSubmit}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Anonymous option */}
      <div style={{
        background: 'rgba(255,215,0,0.08)',
        border: '1px solid rgba(255,215,0,0.2)',
        borderRadius: 16,
        padding: 16,
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 8 }}>
          🎭 Want to stay anonymous?
        </div>
        <button
          style={{ background: 'none', border: 'none', color: '#FFD700', fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}
          onClick={handleSubmit}
        >
          Continue Without Account →
        </button>
      </div>

      <div style={{ marginTop: 'auto', paddingTop: 24, textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.25)', lineHeight: 1.8 }}>
        By continuing you agree to our Terms of Service<br />and Privacy Policy.
      </div>
    </div>
  );
};

export default LoginScreen;
