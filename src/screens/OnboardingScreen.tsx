import React, { useState } from 'react';
import { Screen } from '../App';

interface Props {
  navigate: (s: Screen) => void;
}

const slides = [
  {
    bg: 'radial-gradient(ellipse at top left, rgba(255,45,120,0.25) 0%, transparent 60%)',
    emoji: '💭',
    title: 'Vent Without Judgement',
    subtitle: 'Got something on your mind? Let it out. Your thoughts are safe here.',
    color: '#FF2D78',
    accent: 'onboard-1',
  },
  {
    bg: 'radial-gradient(ellipse at top right, rgba(255,215,0,0.18) 0%, transparent 60%)',
    emoji: '🌟',
    title: 'Gain Perspective',
    subtitle: 'See situations from a fresh angle. Reflection tools to help you think differently.',
    color: '#FFD700',
    accent: 'onboard-2',
  },
  {
    bg: 'radial-gradient(ellipse at bottom, rgba(0,180,255,0.18) 0%, transparent 60%)',
    emoji: '🤝',
    title: 'You\'re Not Alone',
    subtitle: 'A safe community of people who get it. Share, support, connect.',
    color: '#00B4FF',
    accent: 'onboard-3',
  },
  {
    bg: 'radial-gradient(ellipse at top, rgba(123,47,190,0.25) 0%, transparent 60%)',
    emoji: '🌱',
    title: 'Grow Every Day',
    subtitle: 'Track your confidence, build resilience, celebrate your wins — big and small.',
    color: '#9B59B6',
    accent: 'onboard-4',
  },
];

const OnboardingScreen: React.FC<Props> = ({ navigate }) => {
  const [step, setStep] = useState(0);

  const slide = slides[step];
  const isLast = step === slides.length - 1;

  return (
    <div style={{
      minHeight: '100vh',
      background: `${slide.bg}, #0D0D0F`,
      display: 'flex',
      flexDirection: 'column',
      padding: '60px 28px 40px',
      transition: 'background 0.5s ease',
    }}>
      {/* Skip button */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 40 }}>
        <button
          className="btn btn-outline"
          style={{ padding: '8px 20px', fontSize: 13 }}
          onClick={() => navigate('login')}
        >
          Skip
        </button>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className="animate-float" style={{
          width: 140, height: 140,
          borderRadius: '50%',
          background: `rgba(${slide.color === '#FF2D78' ? '255,45,120' : slide.color === '#FFD700' ? '255,215,0' : slide.color === '#00B4FF' ? '0,180,255' : '123,47,190'}, 0.15)`,
          border: `2px solid ${slide.color}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 68, marginBottom: 40,
          boxShadow: `0 0 40px ${slide.color}30`,
        }}>
          {slide.emoji}
        </div>

        <h1 style={{
          fontSize: 30, fontWeight: 800,
          textAlign: 'center', marginBottom: 16,
          color: slide.color,
          textShadow: `0 0 20px ${slide.color}50`,
        }}>
          {slide.title}
        </h1>

        <p style={{
          fontSize: 16, color: 'rgba(255,255,255,0.7)',
          textAlign: 'center', lineHeight: 1.7,
          maxWidth: 300,
        }}>
          {slide.subtitle}
        </p>
      </div>

      {/* Dots */}
      <div className="dot-row" style={{ marginBottom: 32 }}>
        {slides.map((_, i) => (
          <div key={i} className={`dot ${i === step ? 'active' : ''}`}
            style={i === step ? { background: slide.color } : {}}
          />
        ))}
      </div>

      {/* CTA */}
      {isLast ? (
        <button
          className="btn btn-full"
          style={{ background: slide.color, color: step === 1 ? '#111' : 'white', fontSize: 16 }}
          onClick={() => navigate('login')}
        >
          Let's Get Started 🚀
        </button>
      ) : (
        <div style={{ display: 'flex', gap: 12 }}>
          {step > 0 && (
            <button
              className="btn btn-outline"
              style={{ flex: 1 }}
              onClick={() => setStep(s => s - 1)}
            >
              Back
            </button>
          )}
          <button
            className="btn"
            style={{ flex: 2, background: slide.color, color: step === 1 ? '#111' : 'white', fontSize: 16 }}
            onClick={() => setStep(s => s + 1)}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
};

export default OnboardingScreen;
