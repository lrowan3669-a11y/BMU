import React, { useState } from 'react';
import { AppState } from '../App';

interface Props { appState: AppState; }

const moods = [
  { emoji: '😊', label: 'Good' },
  { emoji: '😐', label: 'Okay' },
  { emoji: '😔', label: 'Low' },
  { emoji: '😤', label: 'Angry' },
  { emoji: '😰', label: 'Anxious' },
  { emoji: '😴', label: 'Tired' },
];

const quotes = [
  "You are braver than you believe, stronger than you seem, and smarter than you think.",
  "Every day is a second chance.",
  "You don't have to be perfect to be amazing.",
  "Progress, not perfection.",
  "Your feelings are valid. Your struggles are real. You are enough.",
];

const HomeScreen: React.FC<Props> = ({ appState }) => {
  const { navigate, user } = appState;
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [moodSaved, setMoodSaved] = useState(false);
  const quote = quotes[new Date().getDay() % quotes.length];

  const saveMood = (m: string) => {
    setSelectedMood(m);
    setTimeout(() => setMoodSaved(true), 300);
  };

  return (
    <div style={{ padding: '0 0 20px' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(180deg, rgba(123,47,190,0.2) 0%, transparent 100%)',
        padding: '52px 20px 20px',
        marginBottom: 4,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>Good day,</div>
            <div style={{ fontSize: 26, fontWeight: 800 }}>Hey {user.name}! 👋</div>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <button
              style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer' }}
              onClick={() => navigate('buddy')}
            >🤖</button>
            <button
              style={{
                width: 42, height: 42, borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                border: '2px solid rgba(255,45,120,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, cursor: 'pointer',
              }}
              onClick={() => navigate('profile')}
            >
              {user.avatar}
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
          {[
            { icon: '🔥', value: `${user.streak}`, label: 'Day Streak', color: '#FF2D78' },
            { icon: '⭐', value: `${user.growthScore}`, label: 'Growth Score', color: '#FFD700' },
            { icon: '🏆', value: '5', label: 'Badges', color: '#9B59B6' },
          ].map(stat => (
            <div key={stat.label} style={{
              flex: 1,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 14,
              padding: '10px 8px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 18 }}>{stat.icon}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: stat.color }}>{stat.value}</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '0 20px' }}>
        {/* Daily Quote */}
        <div className="quote-card animate-fadein" style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 11, color: '#9B59B6', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>
            💜 Daily Inspiration
          </div>
          <p style={{ fontSize: 15, fontStyle: 'italic', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)' }}>
            "{quote}"
          </p>
        </div>

        {/* Mood Check-in */}
        <div className="card" style={{ padding: 20, marginBottom: 20 }}>
          <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>
            {moodSaved ? '✅ Mood Saved!' : 'How are you feeling today?'}
          </div>
          {!moodSaved ? (
            <>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 14 }}>
                Tap your mood to check in
              </div>
              <div className="chip-scroll">
                {moods.map(m => (
                  <button
                    key={m.label}
                    className={`mood-pill ${selectedMood === m.label ? 'selected' : ''}`}
                    onClick={() => saveMood(m.label)}
                  >
                    {m.emoji} {m.label}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 36 }}>{moods.find(m => m.label === selectedMood)?.emoji}</span>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600 }}>You're feeling {selectedMood}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>That's completely valid 💙</div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="section-header">
          <span className="section-title">What do you need?</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
          {[
            { icon: '💭', title: 'Vent It Out', subtitle: 'Get it off your chest', color: '#FF2D78', screen: 'vent' as const },
            { icon: '🌟', title: 'Reflect', subtitle: 'Gain perspective', color: '#FFD700', screen: 'reflect' as const },
            { icon: '🤖', title: 'BMU Buddy', subtitle: 'Chat with AI support', color: '#9B59B6', screen: 'buddy' as const },
            { icon: '⚖️', title: 'Control Check', subtitle: 'What can you control?', color: '#00B4FF', screen: 'control' as const },
          ].map(item => (
            <button
              key={item.title}
              onClick={() => navigate(item.screen)}
              style={{
                background: `linear-gradient(135deg, ${item.color}20, ${item.color}08)`,
                border: `1px solid ${item.color}30`,
                borderRadius: 18,
                padding: '18px 14px',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'transform 0.2s',
              }}
              onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.96)')}
              onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
              onTouchStart={e => (e.currentTarget.style.transform = 'scale(0.96)')}
              onTouchEnd={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <div style={{ fontSize: 30, marginBottom: 8 }}>{item.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'white', marginBottom: 2 }}>{item.title}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{item.subtitle}</div>
            </button>
          ))}
        </div>

        {/* Weekly Mood Graph (decorative) */}
        <div className="card" style={{ padding: 20, marginBottom: 20 }}>
          <div className="section-header">
            <span style={{ fontSize: 15, fontWeight: 700 }}>📈 This Week's Mood</span>
            <button className="see-all" onClick={() => navigate('vent')}>Details</button>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 60 }}>
            {[40, 70, 55, 80, 65, 90, 75].map((h, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <div style={{
                  width: '100%', height: `${h}%`,
                  borderRadius: 6,
                  background: i === 6
                    ? 'linear-gradient(to top, #FF2D78, #FF6BA8)'
                    : `rgba(255,45,120,${0.2 + h * 0.003})`,
                  boxShadow: i === 6 ? '0 0 12px rgba(255,45,120,0.5)' : 'none',
                  transition: 'height 0.5s',
                }} />
                <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)' }}>
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Goals */}
        <div className="section-header">
          <span className="section-title">Today's Goals</span>
          <button className="see-all" onClick={() => navigate('grow')}>See all</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
          {[
            { text: 'Complete daily mood check-in', done: moodSaved, color: '#FF2D78' },
            { text: 'Write one journal entry', done: false, color: '#FFD700' },
            { text: 'Read a daily affirmation', done: true, color: '#00B4FF' },
          ].map((goal, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 14, padding: '12px 16px',
            }}>
              <div style={{
                width: 22, height: 22, borderRadius: '50%',
                background: goal.done ? goal.color : 'transparent',
                border: `2px solid ${goal.done ? goal.color : 'rgba(255,255,255,0.2)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, flexShrink: 0, transition: 'all 0.2s',
              }}>
                {goal.done && '✓'}
              </div>
              <span style={{
                fontSize: 14, fontWeight: 500,
                textDecoration: goal.done ? 'line-through' : 'none',
                color: goal.done ? 'rgba(255,255,255,0.35)' : 'white',
              }}>
                {goal.text}
              </span>
            </div>
          ))}
        </div>

        {/* Safety banner */}
        <button
          onClick={() => navigate('safety')}
          style={{
            width: '100%',
            background: 'linear-gradient(135deg, rgba(255,45,120,0.15), rgba(123,47,190,0.15))',
            border: '1px solid rgba(255,45,120,0.25)',
            borderRadius: 16, padding: '14px 18px',
            display: 'flex', alignItems: 'center', gap: 12,
            cursor: 'pointer', textAlign: 'left',
          }}
        >
          <span style={{ fontSize: 28 }}>🆘</span>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: 'white', marginBottom: 2 }}>Need urgent support?</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Crisis resources & trusted contacts →</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
