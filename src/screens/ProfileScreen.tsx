import React, { useState } from 'react';
import { AppState } from '../App';

interface Props { appState: AppState; }

const ProfileScreen: React.FC<Props> = ({ appState }) => {
  const { navigate, user } = appState;
  const [activeTab, setActiveTab] = useState<'profile' | 'stats'>('profile');

  return (
    <div style={{ background: '#0D0D0F', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(180deg, rgba(255,45,120,0.2) 0%, transparent 100%)',
        padding: '50px 20px 24px', textAlign: 'center',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <button
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', fontSize: 22, cursor: 'pointer' }}
            onClick={() => navigate('home')}
          >
            ←
          </button>
          <div style={{ fontSize: 18, fontWeight: 800 }}>My Profile</div>
          <button
            style={{ marginLeft: 'auto', background: 'none', border: 'none', color: '#FF2D78', fontSize: 14, cursor: 'pointer', fontWeight: 700, fontFamily: 'Inter, sans-serif' }}
            onClick={() => navigate('settings')}
          >
            ⚙️ Settings
          </button>
        </div>

        {/* Avatar */}
        <div style={{
          width: 90, height: 90, borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(255,45,120,0.3), rgba(123,47,190,0.3))',
          border: '3px solid rgba(255,45,120,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 44, margin: '0 auto 14px',
          boxShadow: '0 0 30px rgba(255,45,120,0.25)',
        }}>
          {user.avatar}
        </div>
        <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>{user.name}</div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 12 }}>
          Member since January 2025
        </div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.25)',
          borderRadius: 100, padding: '6px 14px',
          fontSize: 13, fontWeight: 700, color: '#FFD700',
        }}>
          ⭐ Growth Score: {user.growthScore}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 8, padding: '0 20px 16px' }}>
        {[
          { id: 'profile', label: '👤 Profile' },
          { id: 'stats', label: '📊 My Stats' },
        ].map(t => (
          <button
            key={t.id}
            className={`chip ${activeTab === t.id ? 'active-pink' : ''}`}
            onClick={() => setActiveTab(t.id as any)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div style={{ padding: '0 20px 20px' }}>
        {activeTab === 'profile' && (
          <div className="animate-fadein">
            {/* Quick stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }}>
              {[
                { icon: '🔥', value: '7', label: 'Day Streak', color: '#FF2D78' },
                { icon: '📓', value: '23', label: 'Journal Entries', color: '#9B59B6' },
                { icon: '🌟', value: '15', label: 'Reflections', color: '#FFD700' },
                { icon: '🏅', value: '4', label: 'Badges Earned', color: '#00B4FF' },
              ].map(s => (
                <div key={s.label} style={{
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 16, padding: '16px', textAlign: 'center',
                }}>
                  <div style={{ fontSize: 26 }}>{s.icon}</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: s.color }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Recent badges */}
            <div style={{ fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.5)', marginBottom: 12 }}>
              RECENT BADGES
            </div>
            <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
              {[
                { icon: '🔥', color: '#FF2D78' },
                { icon: '💭', color: '#9B59B6' },
                { icon: '🌟', color: '#FFD700' },
                { icon: '🤝', color: '#00B4FF' },
              ].map((b, i) => (
                <div key={i} style={{
                  width: 58, height: 58, borderRadius: '50%',
                  background: `${b.color}15`, border: `2px solid ${b.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 26, boxShadow: `0 0 15px ${b.color}25`,
                }}>
                  {b.icon}
                </div>
              ))}
              <button
                onClick={() => navigate('grow')}
                style={{
                  width: 58, height: 58, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)', border: '1px dashed rgba(255,255,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22, cursor: 'pointer',
                }}
              >
                +
              </button>
            </div>

            {/* Bio */}
            <div className="card" style={{ padding: 20, marginBottom: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 10 }}>About Me</div>
              <textarea
                className="input-field"
                rows={3}
                defaultValue="Just trying to be my best self every day. Working on building confidence and managing anxiety."
              />
            </div>

            {/* Premium upgrade */}
            <button
              onClick={() => navigate('premium')}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #7B2FBE, #FF2D78)',
                border: 'none', borderRadius: 18, padding: '18px 20px',
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14, textAlign: 'left',
              }}
            >
              <span style={{ fontSize: 32 }}>👑</span>
              <div>
                <div style={{ fontSize: 15, fontWeight: 800, color: 'white', marginBottom: 2 }}>Upgrade to Premium</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>7-day free trial. Cancel anytime.</div>
              </div>
              <span style={{ color: 'white', marginLeft: 'auto', fontSize: 18 }}>→</span>
            </button>
          </div>
        )}

        {activeTab === 'stats' && (
          <div className="animate-fadein">
            <div className="card" style={{ padding: 20, marginBottom: 16 }}>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 16 }}>📈 30-Day Mood Trend</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 80 }}>
                {[55, 60, 45, 70, 65, 80, 75, 55, 60, 72, 78, 65, 80, 85, 70, 75, 68, 80, 88, 76, 82, 78, 85, 90, 80, 88, 84, 92, 86, 88].map((h, i) => (
                  <div key={i} style={{
                    flex: 1, height: `${h}%`, borderRadius: 4,
                    background: i >= 25 ? 'linear-gradient(to top, #FF2D78, #FF6BA8)' : `rgba(255,45,120,${0.2 + h * 0.004})`,
                  }} />
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>30 days ago</span>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>Today</span>
              </div>
            </div>

            {[
              { label: 'Total check-ins', value: '28', icon: '📊', color: '#FF2D78' },
              { label: 'Avg mood score', value: '7.2/10', icon: '😊', color: '#FFD700' },
              { label: 'Best mood day', value: 'Saturday', icon: '🌟', color: '#00B4FF' },
              { label: 'Reflections this month', value: '12', icon: '🧠', color: '#9B59B6' },
              { label: 'Words journaled', value: '4,230', icon: '📝', color: '#FF2D78' },
              { label: 'Community posts liked', value: '47', icon: '❤️', color: '#FFD700' },
            ].map((s, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 14, padding: '12px 16px', marginBottom: 10,
              }}>
                <span style={{ fontSize: 22 }}>{s.icon}</span>
                <span style={{ flex: 1, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{s.label}</span>
                <span style={{ fontSize: 16, fontWeight: 800, color: s.color }}>{s.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileScreen;
