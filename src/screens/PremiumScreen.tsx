import React, { useState } from 'react';
import { AppState } from '../App';

interface Props { appState: AppState; }

const PremiumScreen: React.FC<Props> = ({ appState }) => {
  const { navigate } = appState;
  const [plan, setPlan] = useState<'monthly' | 'yearly'>('yearly');

  const premiumFeatures = [
    { text: 'Unlimited BMU Buddy AI conversations', icon: '🤖' },
    { text: 'Advanced mood analytics & insights', icon: '📊' },
    { text: 'Full growth journey library (21+ journeys)', icon: '🗺️' },
    { text: 'Voice journal with AI transcription', icon: '🎙️' },
    { text: 'Priority community features', icon: '🌟' },
    { text: 'Personalised weekly wellbeing report', icon: '📋' },
    { text: 'Exclusive challenges & workshops', icon: '🎯' },
    { text: 'Ad-free experience', icon: '✨' },
    { text: 'Export your journal & progress', icon: '💾' },
    { text: 'Premium badges & rewards', icon: '🏆' },
  ];

  return (
    <div style={{ background: '#0D0D0F', minHeight: '100vh' }}>
      <div style={{ background: 'linear-gradient(180deg, rgba(123,47,190,0.35) 0%, transparent 70%)', padding: '50px 20px 24px', textAlign: 'center' }}>
        <button style={{ position: 'absolute', top: 50, left: 20, background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', fontSize: 22, cursor: 'pointer' }} onClick={() => navigate('home')}>←</button>
        <div style={{ fontSize: 40, marginBottom: 8 }}>👑</div>
        <div style={{ fontSize: 28, fontWeight: 900, marginBottom: 8 }}><span style={{ color: '#FFD700', textShadow: '0 0 20px rgba(255,215,0,0.5)' }}>BMU</span> Premium</div>
        <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, maxWidth: 280, margin: '0 auto' }}>Unlock your full potential with the complete BMU experience</div>
      </div>
      <div style={{ padding: '0 20px 40px' }}>
        <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: 100, padding: 4, marginBottom: 24, border: '1px solid rgba(255,255,255,0.08)' }}>
          {[{ id: 'monthly', label: 'Monthly' }, { id: 'yearly', label: 'Yearly  🎉 Save 40%' }].map(p => (
            <button key={p.id} onClick={() => setPlan(p.id as any)} style={{ flex: 1, padding: '11px 0', borderRadius: 100, border: 'none', background: plan === p.id ? 'linear-gradient(135deg, #7B2FBE, #FF2D78)' : 'transparent', color: 'white', fontWeight: 700, fontSize: 13, cursor: 'pointer', fontFamily: 'Inter, sans-serif', transition: 'all 0.2s' }}>{p.label}</button>
          ))}
        </div>
        <div style={{ background: 'linear-gradient(135deg, rgba(123,47,190,0.3), rgba(255,45,120,0.15))', border: '1px solid rgba(123,47,190,0.35)', borderRadius: 24, padding: 24, textAlign: 'center', marginBottom: 24 }}>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 600, marginBottom: 8 }}>{plan === 'yearly' ? 'ANNUAL PLAN' : 'MONTHLY PLAN'}</div>
          <div style={{ fontSize: 52, fontWeight: 900, color: '#FFD700', lineHeight: 1 }}>{plan === 'yearly' ? '£2.99' : '£4.99'}</div>
          <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>{plan === 'yearly' ? 'per month, billed £35.88/year' : 'per month'}</div>
          {plan === 'yearly' && <div style={{ display: 'inline-block', background: 'rgba(255,215,0,0.15)', border: '1px solid rgba(255,215,0,0.3)', borderRadius: 100, padding: '6px 16px', fontSize: 13, fontWeight: 700, color: '#FFD700' }}>🎉 Save £23.88 a year</div>}
        </div>
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.5)', marginBottom: 14, letterSpacing: 0.5 }}>EVERYTHING IN PREMIUM</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {premiumFeatures.map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, padding: '12px 16px' }}>
                <span style={{ fontSize: 22 }}>{f.icon}</span>
                <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{f.text}</span>
                <span style={{ marginLeft: 'auto', color: '#9B59B6', fontSize: 16 }}>✓</span>
              </div>
            ))}
          </div>
        </div>
        <button style={{ width: '100%', padding: '18px 0', background: 'linear-gradient(135deg, #7B2FBE, #FF2D78)', border: 'none', borderRadius: 18, cursor: 'pointer', fontSize: 17, fontWeight: 800, color: 'white', fontFamily: 'Inter, sans-serif', boxShadow: '0 0 30px rgba(123,47,190,0.4)', marginBottom: 12 }}>👑 Start Free Trial — 7 Days Free</button>
        <button className="btn btn-outline btn-full" style={{ marginBottom: 20, fontSize: 14 }} onClick={() => navigate('home')}>Maybe Later</button>
        <div style={{ textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.3)', lineHeight: 1.8 }}>Cancel anytime. No hidden fees.<br />Your subscription helps fund free access for those in need. 💙</div>
      </div>
    </div>
  );
};

export default PremiumScreen;
