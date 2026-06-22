import React, { useState } from 'react';
import { AppState } from '../App';

interface Props { appState: AppState; }

const journalEntries = [
  { date: 'Today', emoji: '😤', mood: 'Frustrated', preview: 'Had a really tough day at school. Someone said something that really got to me...', time: '2h ago' },
  { date: 'Yesterday', emoji: '😊', mood: 'Good', preview: 'Actually had a really nice day. Made a new friend in art class and we...', time: '1d ago' },
  { date: 'Monday', emoji: '😔', mood: 'Low', preview: 'Feeling a bit disconnected from everyone lately. Not sure why but...', time: '2d ago' },
];

const VentScreen: React.FC<Props> = ({ appState }) => {
  const { navigate } = appState;
  const [activeTab, setActiveTab] = useState<'journal' | 'voice' | 'checkin'>('journal');
  const [journalText, setJournalText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [selectedMood, setSelectedMood] = useState('');
  const [anonymous, setAnonymous] = useState(false);

  const moods = [
    { emoji: '😊', label: 'Happy' },
    { emoji: '😌', label: 'Calm' },
    { emoji: '😐', label: 'Meh' },
    { emoji: '😔', label: 'Sad' },
    { emoji: '😤', label: 'Angry' },
    { emoji: '😰', label: 'Anxious' },
    { emoji: '😭', label: 'Upset' },
    { emoji: '😴', label: 'Tired' },
  ];

  return (
    <div>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(180deg, rgba(255,45,120,0.2) 0%, transparent 100%)',
        padding: '52px 20px 20px',
      }}>
        <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 4 }}>
          💭 <span className="glow-pink">Vent</span>
        </div>
        <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>
          Safe space to get it all out
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 8, padding: '0 20px 16px', overflowX: 'auto' }}>
        {[
          { id: 'journal', label: '📓 Journal', color: 'active-pink' },
          { id: 'voice', label: '🎙️ Voice Note', color: 'active-pink' },
          { id: 'checkin', label: '📊 Check In', color: 'active-pink' },
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

      <div style={{ padding: '0 20px' }}>
        {/* Journal Tab */}
        {activeTab === 'journal' && (
          <div className="animate-fadein">
            {!submitted ? (
              <>
                <div className="card" style={{ padding: 20, marginBottom: 16 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>What's on your mind?</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginBottom: 14 }}>
                    Write freely — no judgement here 💙
                  </div>
                  <textarea
                    className="input-field"
                    rows={7}
                    placeholder="Start typing... let it all out. This is your safe space. Nobody can see this unless you choose to share it."
                    value={journalText}
                    onChange={e => setJournalText(e.target.value)}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div
                        className={`toggle ${anonymous ? 'on' : ''}`}
                        style={{ width: 38, height: 22 }}
                        onClick={() => setAnonymous(!anonymous)}
                      >
                        <div style={{
                          position: 'absolute', width: 16, height: 16,
                          background: 'white', borderRadius: '50%',
                          top: 2, left: anonymous ? 18 : 2,
                          transition: 'left 0.2s',
                        }} />
                      </div>
                      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Anonymous</span>
                    </div>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
                      {journalText.length} chars
                    </span>
                  </div>
                </div>

                {/* Mood tag for entry */}
                <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginBottom: 10 }}>
                  How do you feel right now?
                </div>
                <div className="chip-scroll" style={{ marginBottom: 20 }}>
                  {moods.map(m => (
                    <button
                      key={m.label}
                      className={`mood-pill ${selectedMood === m.label ? 'selected' : ''}`}
                      onClick={() => setSelectedMood(m.label)}
                      style={{ fontSize: 13 }}
                    >
                      {m.emoji} {m.label}
                    </button>
                  ))}
                </div>

                <button
                  className="btn btn-pink btn-full"
                  style={{ marginBottom: 16 }}
                  onClick={() => journalText && setSubmitted(true)}
                >
                  Save Journal Entry 💾
                </button>
              </>
            ) : (
              <div className="card animate-fadein" style={{ padding: 28, textAlign: 'center', marginBottom: 20 }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>✨</div>
                <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Entry Saved!</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 20, lineHeight: 1.6 }}>
                  Well done for getting that out. It takes courage to express your feelings.
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  <button className="btn btn-outline" style={{ flex: 1 }} onClick={() => { setSubmitted(false); setJournalText(''); }}>
                    Write More
                  </button>
                  <button className="btn btn-yellow" style={{ flex: 1 }} onClick={() => navigate('reflect')}>
                    Now Reflect 🌟
                  </button>
                </div>
              </div>
            )}

            {/* Past Entries */}
            <div className="section-header">
              <span className="section-title">📖 Past Entries</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
              {journalEntries.map((e, i) => (
                <div key={i} className="community-post" style={{ cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <span style={{ fontSize: 28 }}>{e.emoji}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: 14, fontWeight: 700 }}>{e.mood}</span>
                        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{e.time}</span>
                      </div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{e.date}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
                    {e.preview}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Voice Tab */}
        {activeTab === 'voice' && (
          <div className="animate-fadein">
            <div className="card" style={{ padding: 28, textAlign: 'center', marginBottom: 16 }}>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>🎙️ Voice Journal</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 28 }}>
                Sometimes it's easier to talk than to type
              </div>

              {/* Record button */}
              <button
                onClick={() => setIsRecording(!isRecording)}
                style={{
                  width: 100, height: 100,
                  borderRadius: '50%',
                  background: isRecording
                    ? 'linear-gradient(135deg, #FF2D78, #FF6BA8)'
                    : 'rgba(255,45,120,0.15)',
                  border: `3px solid ${isRecording ? '#FF2D78' : 'rgba(255,45,120,0.4)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 40, cursor: 'pointer', marginBottom: 16,
                  boxShadow: isRecording ? '0 0 30px rgba(255,45,120,0.6)' : 'none',
                  animation: isRecording ? 'pulse 1s ease-in-out infinite' : 'none',
                  transition: 'all 0.3s',
                }}
              >
                {isRecording ? '⏹️' : '🎙️'}
              </button>

              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>
                {isRecording ? '🔴 Recording...' : 'Tap to Record'}
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
                {isRecording ? '00:12' : 'Hold to record your thoughts'}
              </div>
            </div>

            {/* Voice entries */}
            <div className="section-header">
              <span className="section-title">🎵 Saved Voice Notes</span>
            </div>
            {[
              { title: 'Morning thoughts', duration: '1:24', date: 'Today', emoji: '☀️' },
              { title: 'Vent about school', duration: '3:42', date: 'Yesterday', emoji: '😤' },
              { title: 'Gratitude entry', duration: '0:58', date: 'Monday', emoji: '💛' },
            ].map((v, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 14, padding: '14px 16px', marginBottom: 10,
              }}>
                <span style={{ fontSize: 24 }}>{v.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{v.title}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{v.date} · {v.duration}</div>
                </div>
                <button style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'rgba(255,45,120,0.15)',
                  border: '1px solid rgba(255,45,120,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', fontSize: 16,
                }}>▶️</button>
              </div>
            ))}
          </div>
        )}

        {/* Check In Tab */}
        {activeTab === 'checkin' && (
          <div className="animate-fadein">
            <div className="card" style={{ padding: 20, marginBottom: 16 }}>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>📊 Daily Emotional Check-In</div>
              {[
                { q: 'Overall mood today?', emojis: ['😢', '😔', '😐', '🙂', '😁'] },
                { q: 'Energy level?', emojis: ['🪫', '😴', '😌', '⚡', '🔋'] },
                { q: 'Anxiety level?', emojis: ['😰', '😟', '😌', '🧘', '✨'] },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: 10 }}>
                    {item.q}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {item.emojis.map((e, j) => (
                      <button key={j} style={{
                        width: 52, height: 52, borderRadius: 14,
                        background: j === 3 ? 'rgba(255,45,120,0.2)' : 'rgba(255,255,255,0.05)',
                        border: j === 3 ? '2px solid rgba(255,45,120,0.5)' : '1px solid rgba(255,255,255,0.06)',
                        fontSize: 26, cursor: 'pointer', transition: 'all 0.2s',
                      }}>
                        {e}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="card" style={{ padding: 20, marginBottom: 16 }}>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>What's one thing affecting you today?</div>
              <textarea
                className="input-field"
                rows={4}
                placeholder="e.g. argument with a friend, feeling overwhelmed with school work..."
              />
            </div>

            <button className="btn btn-pink btn-full" style={{ marginBottom: 20 }}>
              Save Check-In 💙
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VentScreen;
