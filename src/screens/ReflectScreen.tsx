import React, { useState } from 'react';
import { AppState } from '../App';

interface Props { appState: AppState; }

const exercises = [
  {
    id: 'friend',
    icon: '🤝',
    title: 'The Friend Test',
    subtitle: 'See it through a friend\'s eyes',
    color: '#FF2D78',
    question: 'What would you say to a close friend going through exactly this same situation?',
    hint: 'We\'re often kinder to others than ourselves. What advice would you give them?',
  },
  {
    id: 'future',
    icon: '⏰',
    title: 'Future You',
    subtitle: 'Will this matter?',
    color: '#FFD700',
    question: 'In one week, one month, or one year — will this situation still feel as big as it does right now?',
    hint: 'Think about past worries that felt massive but faded with time.',
  },
  {
    id: 'control',
    icon: '🎯',
    title: 'Control Check',
    subtitle: 'What can you actually control?',
    color: '#00B4FF',
    question: 'In this situation, what can you actually control? What is outside your control?',
    hint: 'We waste energy on things we can\'t change. Focus on what you CAN do.',
  },
  {
    id: 'gratitude',
    icon: '💛',
    title: 'Gratitude Moment',
    subtitle: 'Find the light',
    color: '#9B59B6',
    question: 'Even on a tough day, can you find three things — big or small — that you are grateful for?',
    hint: 'They can be tiny things: a warm drink, someone who smiled at you, a favourite song.',
  },
  {
    id: 'reframe',
    icon: '🔄',
    title: 'Thought Reframe',
    subtitle: 'Challenge the thought',
    color: '#FF2D78',
    question: 'What\'s the most negative thought you\'re having right now? What\'s the evidence FOR and AGAINST it being true?',
    hint: 'Our minds often jump to worst-case scenarios. Let\'s test the thought.',
  },
];

const ReflectScreen: React.FC<Props> = ({ appState }) => {
  const { navigate } = appState;
  const [activeExercise, setActiveExercise] = useState<typeof exercises[0] | null>(null);
  const [answer, setAnswer] = useState('');
  const [completed, setCompleted] = useState(false);
  const [activeTab, setActiveTab] = useState<'exercises' | 'patterns' | 'affirmations'>('exercises');

  const affirmations = [
    "I am stronger than my struggles.",
    "My feelings are valid and I can process them.",
    "I am worthy of kindness and support.",
    "I have overcome tough times before.",
    "I am growing every single day.",
    "I choose to focus on what I can control.",
  ];

  if (activeExercise && !completed) {
    return (
      <div style={{ padding: '52px 20px 20px' }}>
        <button
          style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', fontSize: 14, cursor: 'pointer', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'Inter, sans-serif' }}
          onClick={() => setActiveExercise(null)}
        >
          ← Back to exercises
        </button>

        <div style={{
          background: `linear-gradient(135deg, ${activeExercise.color}20, ${activeExercise.color}08)`,
          border: `1px solid ${activeExercise.color}30`,
          borderRadius: 20, padding: 24, marginBottom: 20,
        }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>{activeExercise.icon}</div>
          <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 6, color: activeExercise.color }}>
            {activeExercise.title}
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>
            {activeExercise.question}
          </p>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 14, padding: '12px 16px', marginBottom: 16,
          display: 'flex', gap: 10, alignItems: 'flex-start',
        }}>
          <span style={{ fontSize: 18 }}>💡</span>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{activeExercise.hint}</p>
        </div>

        <textarea
          className="input-field"
          rows={6}
          placeholder="Take your time. Write your honest thoughts here..."
          value={answer}
          onChange={e => setAnswer(e.target.value)}
          style={{ marginBottom: 16 }}
        />

        <button
          className="btn btn-full"
          style={{
            background: activeExercise.color,
            color: activeExercise.color === '#FFD700' ? '#111' : 'white',
            fontSize: 15, marginBottom: 12,
          }}
          onClick={() => answer && setCompleted(true)}
        >
          Save Reflection ✨
        </button>
      </div>
    );
  }

  if (completed) {
    return (
      <div style={{ padding: '52px 20px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '80vh', justifyContent: 'center' }}>
        <div className="animate-fadein" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 72, marginBottom: 20 }}>🌟</div>
          <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>Brilliant Reflection!</div>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 28, maxWidth: 280, textAlign: 'center' }}>
            Taking time to reflect takes real courage. You're building something powerful: self-awareness.
          </p>
          <div style={{
            background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.2)',
            borderRadius: 16, padding: '16px 20px', marginBottom: 24,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <span style={{ fontSize: 28 }}>🏆</span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#FFD700' }}>+15 Growth Points!</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Reflection exercise completed</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', maxWidth: 300 }}>
            <button className="btn btn-yellow btn-full" onClick={() => { setCompleted(false); setActiveExercise(null); setAnswer(''); }}>
              Do Another Exercise
            </button>
            <button className="btn btn-outline btn-full" onClick={() => navigate('home')}>
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{
        background: 'linear-gradient(180deg, rgba(255,215,0,0.15) 0%, transparent 100%)',
        padding: '52px 20px 20px',
      }}>
        <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 4 }}>
          🌟 <span className="glow-yellow">Reflect</span>
        </div>
        <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)' }}>
          Shift your perspective. Find clarity.
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8, padding: '8px 20px 16px', overflowX: 'auto' }}>
        {[
          { id: 'exercises', label: '🧠 Exercises' },
          { id: 'patterns', label: '📈 My Patterns' },
          { id: 'affirmations', label: '✨ Affirmations' },
        ].map(t => (
          <button
            key={t.id}
            className={`chip ${activeTab === t.id ? 'active-yellow' : ''}`}
            onClick={() => setActiveTab(t.id as any)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div style={{ padding: '0 20px' }}>
        {activeTab === 'exercises' && (
          <div className="animate-fadein">
            {/* AI Prompt of the Day */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,45,120,0.08))',
              border: '1px solid rgba(255,215,0,0.2)',
              borderRadius: 20, padding: 20, marginBottom: 20,
            }}>
              <div style={{ fontSize: 12, color: '#FFD700', fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>
                🤔 TODAY'S REFLECTION PROMPT
              </div>
              <p style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.6, marginBottom: 12 }}>
                "What is one small thing you can do today to be kind to yourself?"
              </p>
              <button
                className="btn btn-yellow"
                style={{ padding: '10px 20px', fontSize: 14 }}
                onClick={() => setActiveExercise(exercises[3])}
              >
                Reflect on this →
              </button>
            </div>

            {/* Exercise cards */}
            <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: 12 }}>
              REFLECTION EXERCISES
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {exercises.map((ex) => (
                <button
                  key={ex.id}
                  style={{
                    background: `linear-gradient(135deg, ${ex.color}15, ${ex.color}05)`,
                    border: `1px solid ${ex.color}25`,
                    borderRadius: 18, padding: '18px 18px',
                    display: 'flex', alignItems: 'center', gap: 14,
                    cursor: 'pointer', textAlign: 'left', width: '100%',
                    transition: 'transform 0.15s',
                  }}
                  onClick={() => setActiveExercise(ex)}
                  onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.98)')}
                  onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <div style={{
                    width: 54, height: 54, borderRadius: 16,
                    background: `${ex.color}20`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 26, flexShrink: 0,
                  }}>
                    {ex.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 2, color: 'white' }}>{ex.title}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{ex.subtitle}</div>
                  </div>
                  <span style={{ color: ex.color, fontSize: 20 }}>→</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'patterns' && (
          <div className="animate-fadein">
            <div className="card" style={{ padding: 20, marginBottom: 16 }}>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>📊 Your Emotional Patterns</div>
              {[
                { label: 'Anxiety triggers', value: 'Social situations', pct: 72, color: '#FF2D78' },
                { label: 'Most common mood', value: 'Okay / Neutral', pct: 45, color: '#FFD700' },
                { label: 'Best days', value: 'Weekends', pct: 85, color: '#00B4FF' },
                { label: 'Journaling streak', value: '7 days', pct: 70, color: '#9B59B6' },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{item.label}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: item.color }}>{item.value}</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${item.pct}%`, background: item.color }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="card" style={{ padding: 20 }}>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>🧠 Thought Pattern Recognition</div>
              {[
                { pattern: 'Catastrophising', description: 'Jumping to worst case', count: 8, color: '#FF2D78' },
                { pattern: 'Mind Reading', description: 'Assuming what others think', count: 5, color: '#FFD700' },
                { pattern: 'Black & White Thinking', description: 'All or nothing', count: 3, color: '#00B4FF' },
              ].map((p, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '10px 0',
                  borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: '50%',
                    background: p.color, flexShrink: 0,
                  }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>{p.pattern}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{p.description}</div>
                  </div>
                  <div style={{
                    background: `${p.color}20`, border: `1px solid ${p.color}30`,
                    borderRadius: 8, padding: '4px 10px',
                    fontSize: 13, fontWeight: 700, color: p.color,
                  }}>
                    {p.count}x
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'affirmations' && (
          <div className="animate-fadein">
            <div style={{
              background: 'linear-gradient(135deg, rgba(123,47,190,0.2), rgba(255,45,120,0.1))',
              border: '1px solid rgba(123,47,190,0.25)',
              borderRadius: 24, padding: 28, textAlign: 'center', marginBottom: 20,
            }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>✨</div>
              <p style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.6, color: 'white', marginBottom: 8 }}>
                "I am stronger than my struggles."
              </p>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>Today's Affirmation · Tap to hear it</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {affirmations.map((a, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 16, padding: '16px 18px',
                  display: 'flex', gap: 12, alignItems: 'center',
                }}>
                  <span style={{ fontSize: 20 }}>{['💪', '💙', '🌟', '🦋', '🌱', '🎯'][i]}</span>
                  <p style={{ fontSize: 14, lineHeight: 1.5, color: 'rgba(255,255,255,0.85)' }}>{a}</p>
                </div>
              ))}
            </div>

            <button className="btn btn-purple btn-full" style={{ marginTop: 20 }}>
              🎲 New Affirmation Pack
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReflectScreen;
