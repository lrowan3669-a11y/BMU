import React, { useState } from 'react';
import { AppState } from '../App';

interface Props { appState: AppState; }

const canControlItems = [
  { icon: '💪', text: 'My reactions & responses' },
  { icon: '🎯', text: 'My effort and commitment' },
  { icon: '😊', text: 'My attitude and mindset' },
  { icon: '🗣️', text: 'The words I choose to say' },
  { icon: '🚶', text: 'My actions and choices' },
  { icon: '🙏', text: 'How I treat myself' },
  { icon: '📚', text: 'How hard I prepare' },
  { icon: '🌱', text: 'My personal growth' },
];

const cannotControlItems = [
  { icon: '👥', text: 'Other people\'s opinions of me' },
  { icon: '🌦️', text: 'The weather or circumstances' },
  { icon: '🚦', text: 'Traffic or delays' },
  { icon: '💬', text: 'What others say about me' },
  { icon: '🤔', text: 'How others feel or react' },
  { icon: '⏰', text: 'The past' },
  { icon: '📰', text: 'What happens in the news' },
  { icon: '🎲', text: 'Random life events' },
];

const ControlScreen: React.FC<Props> = ({ appState }) => {
  const { navigate } = appState;
  const [userCan, setUserCan] = useState('');
  const [userCannot, setUserCannot] = useState('');
  const [saved, setSaved] = useState(false);
  const [view, setView] = useState<'learn' | 'practice'>('learn');

  return (
    <div style={{ minHeight: '100vh', background: '#0D0D0F' }}>
      {/* Header */}
      <div style={{
        padding: '50px 20px 20px',
        background: 'linear-gradient(180deg, rgba(0,180,255,0.15) 0%, transparent 100%)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <button
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', fontSize: 22, cursor: 'pointer' }}
            onClick={() => navigate('home')}
          >
            ←
          </button>
          <div>
            <div style={{ fontSize: 24, fontWeight: 800 }}>⚖️ Control Check</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>Focus your energy wisely</div>
          </div>
        </div>

        {/* Tab switcher */}
        <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: 100, padding: 3 }}>
          {[{ id: 'learn', label: '📖 Learn' }, { id: 'practice', label: '✏️ Practice' }].map(t => (
            <button
              key={t.id}
              onClick={() => setView(t.id as any)}
              style={{
                flex: 1, padding: '9px 0', borderRadius: 100, border: 'none', cursor: 'pointer',
                background: view === t.id ? '#00B4FF' : 'transparent',
                color: view === t.id ? '#111' : 'rgba(255,255,255,0.5)',
                fontWeight: 700, fontSize: 14, fontFamily: 'Inter, sans-serif',
                transition: 'all 0.2s',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: '0 20px 20px' }}>
        {view === 'learn' && (
          <div className="animate-fadein">
            {/* Intro */}
            <div style={{
              background: 'rgba(0,180,255,0.08)', border: '1px solid rgba(0,180,255,0.15)',
              borderRadius: 18, padding: 20, marginBottom: 24,
            }}>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.8)' }}>
                One of the most powerful things you can learn is the difference between what you <strong style={{ color: '#00B4FF' }}>CAN control</strong> and what you <strong style={{ color: '#FF2D78' }}>CANNOT control</strong>.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.55)', marginTop: 10 }}>
                When we focus our energy on things outside our control, we feel powerless. But when we focus on what IS in our control, we feel strong. 💪
              </p>
            </div>

            {/* I CAN Control */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(0,180,255,0.12), rgba(0,180,255,0.04))',
              border: '1px solid rgba(0,180,255,0.25)',
              borderRadius: 20, padding: 20, marginBottom: 16,
            }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: '#00B4FF', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 8 }}>
                ✅ Things I CAN Control
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 16 }}>
                Put your energy HERE
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {canControlItems.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    background: 'rgba(0,180,255,0.1)', borderRadius: 12, padding: '10px 14px',
                  }}>
                    <span style={{ fontSize: 20 }}>{item.icon}</span>
                    <span style={{ fontSize: 14, fontWeight: 500 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* I CANNOT Control */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255,45,120,0.12), rgba(255,45,120,0.04))',
              border: '1px solid rgba(255,45,120,0.25)',
              borderRadius: 20, padding: 20, marginBottom: 20,
            }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: '#FF2D78', marginBottom: 4 }}>
                ❌ Things I CANNOT Control
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 16 }}>
                Let go of these
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {cannotControlItems.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    background: 'rgba(255,45,120,0.1)', borderRadius: 12, padding: '10px 14px',
                  }}>
                    <span style={{ fontSize: 20 }}>{item.icon}</span>
                    <span style={{ fontSize: 14, fontWeight: 500 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(123,47,190,0.2), rgba(255,215,0,0.08))',
              border: '1px solid rgba(123,47,190,0.2)',
              borderRadius: 18, padding: 20,
            }}>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>💡 Remember This</div>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>
                "You can't control the wind, but you can adjust your sails."
              </p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 8 }}>
                Focus on your response. That's your power.
              </p>
            </div>
          </div>
        )}

        {view === 'practice' && (
          <div className="animate-fadein">
            {!saved ? (
              <>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 20, lineHeight: 1.6 }}>
                  Think about a situation that's stressing you out right now. Use this tool to separate what you can and can't control.
                </div>

                <div style={{
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 16, padding: 16, marginBottom: 20,
                }}>
                  <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>What's the situation?</div>
                  <textarea
                    className="input-field"
                    rows={3}
                    placeholder="e.g. Someone said something unkind about me at school..."
                  />
                </div>

                <div style={{
                  background: 'linear-gradient(135deg, rgba(0,180,255,0.12), rgba(0,180,255,0.04))',
                  border: '1px solid rgba(0,180,255,0.25)',
                  borderRadius: 20, padding: 20, marginBottom: 16,
                }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#00B4FF', marginBottom: 12 }}>
                    ✅ What CAN you control here?
                  </div>
                  <textarea
                    className="input-field"
                    rows={4}
                    placeholder="e.g. My reaction, whether I engage, who I talk to about it, how I choose to see myself..."
                    value={userCan}
                    onChange={e => setUserCan(e.target.value)}
                  />
                </div>

                <div style={{
                  background: 'linear-gradient(135deg, rgba(255,45,120,0.12), rgba(255,45,120,0.04))',
                  border: '1px solid rgba(255,45,120,0.25)',
                  borderRadius: 20, padding: 20, marginBottom: 20,
                }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#FF2D78', marginBottom: 12 }}>
                    ❌ What CANNOT you control?
                  </div>
                  <textarea
                    className="input-field"
                    rows={4}
                    placeholder="e.g. What they said, what others think, how they behave..."
                    value={userCannot}
                    onChange={e => setUserCannot(e.target.value)}
                  />
                </div>

                <button
                  className="btn btn-blue btn-full"
                  style={{ color: '#111' }}
                  onClick={() => (userCan || userCannot) && setSaved(true)}
                >
                  Save My Control Check ⚖️
                </button>
              </>
            ) : (
              <div className="animate-fadein" style={{ textAlign: 'center', paddingTop: 20 }}>
                <div style={{ fontSize: 64, marginBottom: 16 }}>⚖️</div>
                <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Clarity Unlocked!</div>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 24 }}>
                  You've separated what matters from what you can't change. Now put your energy where it counts.
                </p>
                <div style={{
                  background: 'rgba(0,180,255,0.1)', border: '1px solid rgba(0,180,255,0.2)',
                  borderRadius: 18, padding: 20, marginBottom: 16, textAlign: 'left',
                }}>
                  <div style={{ fontSize: 13, color: '#00B4FF', fontWeight: 700, marginBottom: 8 }}>✅ YOUR FOCUS ZONE</div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>{userCan}</p>
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  <button className="btn btn-outline" style={{ flex: 1 }} onClick={() => { setSaved(false); setUserCan(''); setUserCannot(''); }}>
                    Do Another
                  </button>
                  <button className="btn btn-blue" style={{ flex: 1, color: '#111' }} onClick={() => navigate('reflect')}>
                    Reflect More 🌟
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ControlScreen;
