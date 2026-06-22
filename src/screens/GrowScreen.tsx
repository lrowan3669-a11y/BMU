import React, { useState } from 'react';
import { AppState } from '../App';

interface Props { appState: AppState; }

const badges = [
  { icon: '🔥', name: 'First Flame', desc: '7-day streak', earned: true, color: '#FF2D78' },
  { icon: '💭', name: 'Open Book', desc: '10 journal entries', earned: true, color: '#9B59B6' },
  { icon: '🌟', name: 'Star Reflector', desc: '5 reflections', earned: true, color: '#FFD700' },
  { icon: '🤝', name: 'Community Friend', desc: 'First post', earned: true, color: '#00B4FF' },
  { icon: '💪', name: 'Resilience Rising', desc: 'Complete 30 days', earned: false, color: '#FF2D78' },
  { icon: '🏆', name: 'Growth Champion', desc: 'Reach 500 points', earned: false, color: '#FFD700' },
  { icon: '🦋', name: 'Transformation', desc: 'Complete a growth journey', earned: false, color: '#9B59B6' },
  { icon: '🌈', name: 'Rainbow Days', desc: 'Log 50 moods', earned: false, color: '#00B4FF' },
];

const journeys = [
  {
    title: 'Building Confidence', icon: '💪', color: '#FF2D78',
    progress: 60, days: '12 of 21 days',
    steps: ['Understanding self-worth', 'Body language & presence', 'Speaking up', 'Handling criticism', 'Celebrating wins'],
    currentStep: 2,
  },
  {
    title: 'Stress Management', icon: '🧘', color: '#00B4FF',
    progress: 35, days: '7 of 21 days',
    steps: ['Identifying triggers', 'Breathing techniques', 'Grounding exercises', 'Sleep & recovery', 'Long-term habits'],
    currentStep: 1,
  },
  {
    title: 'Beating Anxiety', icon: '🦋', color: '#9B59B6',
    progress: 0, days: 'Not started',
    steps: ['Understanding anxiety', 'Thought challenging', 'Exposure ladder', 'Social confidence', 'Maintenance'],
    currentStep: 0,
  },
];

const habits = [
  { icon: '📓', label: 'Journal', done: true, streak: 7 },
  { icon: '🧘', label: 'Breathe', done: true, streak: 3 },
  { icon: '💧', label: 'Hydrate', done: false, streak: 0 },
  { icon: '🚶', label: 'Walk', done: false, streak: 2 },
  { icon: '🙏', label: 'Gratitude', done: true, streak: 5 },
  { icon: '📵', label: 'Screen break', done: false, streak: 1 },
];

const GrowScreen: React.FC<Props> = ({ appState }) => {
  const { navigate } = appState;
  const [activeTab, setActiveTab] = useState<'overview' | 'badges' | 'journeys' | 'habits'>('overview');
  const [expandedJourney, setExpandedJourney] = useState<number | null>(null);
  const [habitsDone, setHabitsDone] = useState<boolean[]>(habits.map(h => h.done));

  const totalBadges = badges.filter(b => b.earned).length;

  return (
    <div>
      <div style={{
        background: 'linear-gradient(180deg, rgba(123,47,190,0.2) 0%, transparent 100%)',
        padding: '52px 20px 20px',
      }}>
        <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 4 }}>
          🌱 <span className="glow-purple">Grow</span>
        </div>
        <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)' }}>
          Track your journey. Celebrate your wins.
        </div>
      </div>

      {/* Stats */}
      <div style={{ padding: '0 20px 16px' }}>
        <div style={{ display: 'flex', gap: 10 }}>
          {[
            { icon: '⭐', value: '340', label: 'Growth Score', color: '#FFD700' },
            { icon: '🏅', value: `${totalBadges}`, label: 'Badges', color: '#FF2D78' },
            { icon: '🔥', value: '7', label: 'Day Streak', color: '#9B59B6' },
          ].map(s => (
            <div key={s.label} style={{
              flex: 1, background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 16, padding: '12px 10px', textAlign: 'center',
            }}>
              <div style={{ fontSize: 22 }}>{s.icon}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 8, padding: '0 20px 16px', overflowX: 'auto' }}>
        {[
          { id: 'overview', label: '📊 Overview' },
          { id: 'badges', label: '🏅 Badges' },
          { id: 'journeys', label: '🗺️ Journeys' },
          { id: 'habits', label: '✅ Habits' },
        ].map(t => (
          <button
            key={t.id}
            className={`chip ${activeTab === t.id ? 'active-purple' : ''}`}
            onClick={() => setActiveTab(t.id as any)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div style={{ padding: '0 20px' }}>
        {activeTab === 'overview' && (
          <div className="animate-fadein">
            {/* Growth score card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(123,47,190,0.3), rgba(255,45,120,0.15))',
              border: '1px solid rgba(123,47,190,0.3)',
              borderRadius: 22, padding: 24, marginBottom: 20,
            }}>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 600, marginBottom: 8 }}>
                CURRENT GROWTH SCORE
              </div>
              <div style={{ fontSize: 52, fontWeight: 900, color: '#FFD700', textShadow: '0 0 20px rgba(255,215,0,0.5)', marginBottom: 8 }}>
                340
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 14 }}>
                160 points to next level: Resilience Master 🏆
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '68%', background: 'linear-gradient(90deg, #9B59B6, #FFD700)' }} />
              </div>
            </div>

            {/* Personal victories */}
            <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.5)', marginBottom: 12 }}>
              🏆 PERSONAL VICTORIES THIS WEEK
            </div>
            {[
              { text: 'Had a difficult conversation with a friend', icon: '💬', points: '+20' },
              { text: 'Journaled every day this week', icon: '📓', points: '+35' },
              { text: 'Used breathing technique during anxiety', icon: '🌬️', points: '+15' },
              { text: 'Asked for help when I needed it', icon: '🙋', points: '+25' },
            ].map((v, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 14, padding: '12px 16px', marginBottom: 10,
              }}>
                <span style={{ fontSize: 22 }}>{v.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{v.text}</div>
                </div>
                <div style={{
                  fontSize: 13, fontWeight: 700, color: '#9B59B6',
                  background: 'rgba(123,47,190,0.15)', padding: '4px 8px', borderRadius: 8,
                }}>
                  {v.points}
                </div>
              </div>
            ))}

            {/* Premium prompt */}
            <button
              onClick={() => navigate('premium')}
              style={{
                width: '100%', marginTop: 8,
                background: 'linear-gradient(135deg, #7B2FBE, #FF2D78)',
                border: 'none', borderRadius: 18, padding: '18px 20px',
                cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 14,
              }}
            >
              <span style={{ fontSize: 32 }}>👑</span>
              <div>
                <div style={{ fontSize: 15, fontWeight: 800, color: 'white', marginBottom: 2 }}>Unlock Premium Growth</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>Advanced analytics + personalised journey</div>
              </div>
              <span style={{ color: 'rgba(255,255,255,0.8)', marginLeft: 'auto' }}>→</span>
            </button>
          </div>
        )}

        {activeTab === 'badges' && (
          <div className="animate-fadein">
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
              {totalBadges} of {badges.length} badges earned 🌟
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {badges.map((b, i) => (
                <div key={i} style={{
                  background: b.earned ? `linear-gradient(135deg, ${b.color}20, ${b.color}08)` : 'rgba(255,255,255,0.03)',
                  border: b.earned ? `1px solid ${b.color}30` : '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 18, padding: '20px 14px', textAlign: 'center',
                  opacity: b.earned ? 1 : 0.5,
                }}>
                  <div style={{
                    fontSize: 38, marginBottom: 8,
                    filter: b.earned ? 'none' : 'grayscale(1)',
                    textShadow: b.earned ? `0 0 20px ${b.color}` : 'none',
                  }}>
                    {b.icon}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4, color: b.earned ? 'white' : 'rgba(255,255,255,0.4)' }}>
                    {b.name}
                  </div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{b.desc}</div>
                  {b.earned && (
                    <div style={{
                      marginTop: 8, fontSize: 10, fontWeight: 700,
                      color: b.color, background: `${b.color}15`,
                      padding: '3px 8px', borderRadius: 100, display: 'inline-block',
                    }}>
                      ✓ EARNED
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'journeys' && (
          <div className="animate-fadein">
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
              Guided 21-day growth journeys 🗺️
            </div>
            {journeys.map((j, i) => (
              <div key={i} style={{
                background: `linear-gradient(135deg, ${j.color}12, ${j.color}04)`,
                border: `1px solid ${j.color}25`,
                borderRadius: 20, padding: 20, marginBottom: 14,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 34 }}>{j.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>{j.title}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>{j.days}</div>
                  </div>
                </div>

                <div style={{ marginBottom: 12 }}>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${j.progress}%`, background: j.color }} />
                  </div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 6 }}>
                    {j.progress}% complete
                  </div>
                </div>

                {expandedJourney === i && (
                  <div style={{ marginBottom: 12 }}>
                    {j.steps.map((step, si) => (
                      <div key={si} style={{
                        display: 'flex', alignItems: 'center', gap: 10,
                        padding: '8px 0',
                        borderBottom: si < j.steps.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                      }}>
                        <div style={{
                          width: 24, height: 24, borderRadius: '50%',
                          background: si < j.currentStep ? j.color : si === j.currentStep ? `${j.color}40` : 'rgba(255,255,255,0.05)',
                          border: si === j.currentStep ? `2px solid ${j.color}` : 'none',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 11, fontWeight: 700, flexShrink: 0,
                          color: si < j.currentStep ? 'white' : si === j.currentStep ? j.color : 'rgba(255,255,255,0.3)',
                        }}>
                          {si < j.currentStep ? '✓' : si + 1}
                        </div>
                        <span style={{
                          fontSize: 13, fontWeight: si === j.currentStep ? 600 : 400,
                          color: si <= j.currentStep ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.35)',
                        }}>
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <div style={{ display: 'flex', gap: 10 }}>
                  <button
                    style={{
                      flex: 1, padding: '10px 0', borderRadius: 100,
                      background: j.progress > 0 ? j.color : 'rgba(255,255,255,0.08)',
                      border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 700,
                      color: j.progress > 0 && j.color === '#FFD700' ? '#111' : j.progress > 0 ? 'white' : 'rgba(255,255,255,0.6)',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {j.progress === 0 ? 'Start Journey' : 'Continue →'}
                  </button>
                  <button
                    style={{
                      padding: '10px 16px', borderRadius: 100,
                      background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                      cursor: 'pointer', fontSize: 13, color: 'rgba(255,255,255,0.6)',
                      fontFamily: 'Inter, sans-serif', fontWeight: 600,
                    }}
                    onClick={() => setExpandedJourney(expandedJourney === i ? null : i)}
                  >
                    {expandedJourney === i ? 'Less' : 'Steps'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'habits' && (
          <div className="animate-fadein">
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
              Today's positive habits — tap to mark done ✅
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 20 }}>
              {habits.map((h, i) => (
                <button
                  key={i}
                  onClick={() => setHabitsDone(d => d.map((v, j) => j === i ? !v : v))}
                  style={{
                    background: habitsDone[i] ? 'rgba(123,47,190,0.2)' : 'rgba(255,255,255,0.04)',
                    border: habitsDone[i] ? '2px solid rgba(123,47,190,0.4)' : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 18, padding: '18px 10px', textAlign: 'center',
                    cursor: 'pointer', transition: 'all 0.2s',
                  }}
                >
                  <div style={{ fontSize: 30, marginBottom: 6, filter: habitsDone[i] ? 'none' : 'grayscale(0.5)' }}>
                    {h.icon}
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: habitsDone[i] ? '#9B59B6' : 'rgba(255,255,255,0.5)' }}>
                    {h.label}
                  </div>
                  {h.streak > 0 && (
                    <div style={{ fontSize: 10, color: '#FFD700', marginTop: 4 }}>
                      🔥 {h.streak}d
                    </div>
                  )}
                  {habitsDone[i] && (
                    <div style={{ fontSize: 16, marginTop: 4 }}>✓</div>
                  )}
                </button>
              ))}
            </div>

            {/* Goal setting */}
            <div className="card" style={{ padding: 20 }}>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>🎯 Set a New Goal</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 14 }}>
                What's one thing you want to work on?
              </div>
              <input className="input-field" placeholder="e.g. Be kinder to myself this week..." style={{ marginBottom: 12 }} />
              <button className="btn btn-purple btn-full">Add Goal</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GrowScreen;
