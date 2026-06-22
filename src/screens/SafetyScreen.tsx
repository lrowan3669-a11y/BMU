import React, { useState } from 'react';
import { AppState } from '../App';

interface Props { appState: AppState; }

const SafetyScreen: React.FC<Props> = ({ appState }) => {
  const { navigate } = appState;
  const [activeTab, setActiveTab] = useState<'crisis' | 'anti-bully' | 'adults' | 'parents'>('crisis');

  const crisisLines = [
    { name: 'Samaritans', number: '116 123', icon: '📞', color: '#FF2D78', available: '24/7 Free', desc: 'Free 24/7 emotional support' },
    { name: 'Childline', number: '0800 1111', icon: '🌟', color: '#00B4FF', available: '24/7 Free', desc: 'For children and young people' },
    { name: 'Crisis Text Line', number: 'Text SHOUT to 85258', icon: '💬', color: '#9B59B6', available: '24/7', desc: 'Free, confidential text support' },
    { name: 'PAPYRUS HOPELINE', number: '0800 068 4141', icon: '🦋', color: '#FFD700', available: '24/7', desc: 'Young people at risk of suicide' },
  ];

  const antibullyOrgs = [
    { name: 'Anti-Bullying Alliance', desc: 'Resources, advice and support', icon: '🛡️', color: '#FF2D78' },
    { name: 'Ditch the Label', desc: 'Anti-bullying charity for young people', icon: '🏷️', color: '#00B4FF' },
    { name: 'Bullying UK', desc: 'Help, advice and forums', icon: '🇬🇧', color: '#9B59B6' },
    { name: 'Kidscape', desc: 'Preventing bullying & keeping kids safe', icon: '🔐', color: '#FFD700' },
    { name: 'Cybersmile', desc: 'Online bullying & digital wellbeing', icon: '💻', color: '#FF2D78' },
  ];

  return (
    <div style={{ background: '#0D0D0F', minHeight: '100vh' }}>
      <div style={{ background: 'linear-gradient(180deg, rgba(255,45,120,0.2) 0%, transparent 100%)', padding: '50px 20px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <button style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', fontSize: 22, cursor: 'pointer' }} onClick={() => navigate('home')}>←</button>
          <div><div style={{ fontSize: 24, fontWeight: 800 }}>🆘 Safety & Support</div><div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>You are never alone</div></div>
        </div>
        <div style={{ background: 'linear-gradient(135deg, rgba(255,45,120,0.25), rgba(255,45,120,0.1))', border: '2px solid rgba(255,45,120,0.4)', borderRadius: 18, padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ fontSize: 36 }}>🚨</span>
          <div style={{ flex: 1 }}><div style={{ fontSize: 15, fontWeight: 800, color: '#FF2D78', marginBottom: 2 }}>In immediate danger?</div><div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>Call 999 immediately</div></div>
          <button style={{ background: '#FF2D78', border: 'none', borderRadius: 12, padding: '10px 16px', color: 'white', fontWeight: 800, fontSize: 14, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>📞 999</button>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 6, padding: '0 20px 16px', overflowX: 'auto' }}>
        {[{ id: 'crisis', label: '📞 Crisis' }, { id: 'anti-bully', label: '🛡️ Bullying' }, { id: 'adults', label: '🏫 School' }, { id: 'parents', label: '👨‍👩‍👧 Parents' }].map(t => (
          <button key={t.id} className={`chip ${activeTab === t.id ? 'active-pink' : ''}`} onClick={() => setActiveTab(t.id as any)}>{t.label}</button>
        ))}
      </div>
      <div style={{ padding: '0 20px 20px' }}>
        {activeTab === 'crisis' && (
          <div className="animate-fadein">
            <div style={{ background: 'rgba(0,180,255,0.08)', border: '1px solid rgba(0,180,255,0.15)', borderRadius: 14, padding: '12px 16px', marginBottom: 20, fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>💙 If you're struggling right now, please reach out. These services are free, confidential and available 24/7.</div>
            {crisisLines.map((line, i) => (
              <div key={i} style={{ background: `linear-gradient(135deg, ${line.color}10, ${line.color}04)`, border: `1px solid ${line.color}25`, borderRadius: 18, padding: '18px 20px', marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                  <span style={{ fontSize: 28 }}>{line.icon}</span>
                  <div style={{ flex: 1 }}><div style={{ fontSize: 16, fontWeight: 800 }}>{line.name}</div><div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{line.desc}</div></div>
                  <div style={{ padding: '4px 10px', borderRadius: 100, background: `${line.color}20`, border: `1px solid ${line.color}30`, fontSize: 11, fontWeight: 700, color: line.color }}>{line.available}</div>
                </div>
                <div style={{ fontSize: 18, fontWeight: 800, color: line.color, marginBottom: 10 }}>{line.number}</div>
                <button style={{ width: '100%', padding: '12px 0', borderRadius: 12, background: line.color, border: 'none', cursor: 'pointer', color: line.color === '#FFD700' ? '#111' : 'white', fontWeight: 700, fontSize: 14, fontFamily: 'Inter, sans-serif' }}>📞 Contact Now</button>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'anti-bully' && (
          <div className="animate-fadein">
            <div style={{ background: 'rgba(255,45,120,0.08)', border: '1px solid rgba(255,45,120,0.15)', borderRadius: 14, padding: 16, marginBottom: 20 }}>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>🛡️ You Don't Have to Tolerate This</div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>Bullying is never okay. It is not your fault. There are people who want to help you — and you deserve that help.</p>
            </div>
            {antibullyOrgs.map((org, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '16px 18px', marginBottom: 10, cursor: 'pointer' }}>
                <div style={{ width: 46, height: 46, borderRadius: 14, background: `${org.color}20`, border: `1px solid ${org.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{org.icon}</div>
                <div style={{ flex: 1 }}><div style={{ fontSize: 14, fontWeight: 700 }}>{org.name}</div><div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>{org.desc}</div></div>
                <span style={{ color: org.color, fontSize: 18 }}>→</span>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'adults' && (
          <div className="animate-fadein">
            <div className="card" style={{ padding: 20, marginBottom: 16 }}>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 14 }}>🏫 School Safeguarding</div>
              {[{ role: 'School Counsellor', desc: 'Confidential emotional support', icon: '🧑‍💼' }, { role: 'Designated Safeguarding Lead', desc: 'Legally responsible for your protection', icon: '🛡️' }, { role: 'Head of Year', desc: 'Direct pastoral care and support', icon: '👩‍🏫' }, { role: 'SENCO', desc: 'Special educational needs coordinator', icon: '📋' }].map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, paddingBottom: 12, marginBottom: 12, borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <span style={{ fontSize: 24 }}>{p.icon}</span>
                  <div><div style={{ fontSize: 14, fontWeight: 600 }}>{p.role}</div><div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>{p.desc}</div></div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 'parents' && (
          <div className="animate-fadein">
            <div style={{ background: 'rgba(255,215,0,0.08)', border: '1px solid rgba(255,215,0,0.2)', borderRadius: 16, padding: 18, marginBottom: 20 }}>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>👨‍👩‍👧 Parent & Carer Support</div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>Are you a parent worried about your child? These resources can help.</p>
            </div>
            {[{ icon: '📚', name: 'Young Minds for Parents', desc: "Advice on supporting your child's mental health", color: '#FF2D78' }, { icon: '🌐', name: 'NSPCC', desc: 'Child protection advice for parents', color: '#00B4FF' }, { icon: '💬', name: 'Parent Line', desc: '0808 800 2222 — Free parenting helpline', color: '#9B59B6' }, { icon: '🏫', name: 'Anti-Bullying Alliance (Parents)', desc: 'Guidance when your child is bullied', color: '#FFD700' }].map((r, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '16px 18px', marginBottom: 10, cursor: 'pointer' }}>
                <div style={{ width: 46, height: 46, borderRadius: 14, background: `${r.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>{r.icon}</div>
                <div style={{ flex: 1 }}><div style={{ fontSize: 14, fontWeight: 700 }}>{r.name}</div><div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>{r.desc}</div></div>
                <span style={{ color: r.color }}>→</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SafetyScreen;
