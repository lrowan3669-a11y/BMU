import React, { useState, useRef, useEffect } from 'react';
import { AppState } from '../App';

interface Props { appState: AppState; }

interface Message {
  role: 'ai' | 'user';
  text: string;
}

const starters = [
  "I'm really struggling with something at school",
  "I've been feeling really anxious lately",
  "Someone's been bullying me and I don't know what to do",
  "I feel like nobody understands me",
];

const responses: Record<string, string> = {
  default: "I'm really glad you're talking to me. That sounds like a lot to carry. Can you tell me a bit more about what's been going on? I'm here and I'm listening. 💙",
  anxious: "Anxiety is tough — it can feel like your mind is working against you. But here's the thing: you recognised what you're feeling, and that's actually a big deal. What does your anxiety feel like right now? Does it show up as racing thoughts, or more like a physical feeling?",
  bully: "I'm so sorry you're going through that. Nobody deserves to be treated that way — ever. You were right to reach out. Can you tell me what's been happening? You don't have to face this alone. 🛡️",
  lonely: "Feeling like nobody understands you is one of the loneliest feelings in the world. But I want you to know — you're not alone. I see you. What's been making you feel disconnected lately?",
  school: "School can feel incredibly overwhelming sometimes. There's pressure coming from every direction. What's the main thing that's been weighing on you most?",
};

const getResponse = (msg: string): string => {
  const lower = msg.toLowerCase();
  if (lower.includes('anxious') || lower.includes('anxiety') || lower.includes('worried') || lower.includes('panic')) return responses.anxious;
  if (lower.includes('bully') || lower.includes('bullied') || lower.includes('mean') || lower.includes('picking on')) return responses.bully;
  if (lower.includes('alone') || lower.includes('lonely') || lower.includes('nobody') || lower.includes('understand')) return responses.lonely;
  if (lower.includes('school') || lower.includes('exam') || lower.includes('grade') || lower.includes('teacher')) return responses.school;
  return responses.default;
};

const BuddyScreen: React.FC<Props> = ({ appState }) => {
  const { navigate } = appState;
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'ai',
      text: "Hey! I'm your BMU Buddy 👋 Think of me as a trusted friend you can talk to about anything — no judgement, no lectures, just genuine support.\n\nWhat's on your mind today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: 'user', text };
    setMessages(m => [...m, userMsg]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(m => [...m, { role: 'ai', text: getResponse(text) }]);
    }, 1500 + Math.random() * 800);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#0D0D0F' }}>
      {/* Header */}
      <div style={{
        padding: '50px 20px 16px',
        background: 'linear-gradient(180deg, rgba(123,47,190,0.2) 0%, transparent 100%)',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', fontSize: 22, cursor: 'pointer' }}
            onClick={() => navigate('home')}
          >
            ←
          </button>
          <div style={{
            width: 46, height: 46, borderRadius: '50%',
            background: 'linear-gradient(135deg, #7B2FBE, #FF2D78)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 24, boxShadow: '0 0 20px rgba(123,47,190,0.5)',
          }}>
            🤖
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 800 }}>BMU Buddy</div>
            <div style={{ fontSize: 12, color: '#9B59B6', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#4CAF50' }} />
              Always here for you
            </div>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 10 }}>
            <button style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '7px 10px', fontSize: 16, cursor: 'pointer' }}>
              🔊
            </button>
          </div>
        </div>
      </div>

      {/* Safety banner */}
      <div style={{
        margin: '0 16px 8px',
        background: 'rgba(0,180,255,0.08)', border: '1px solid rgba(0,180,255,0.15)',
        borderRadius: 12, padding: '8px 14px',
        fontSize: 12, color: 'rgba(255,255,255,0.55)',
        display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0,
      }}>
        <span>🛡️</span>
        <span>BMU Buddy is AI-powered support, not a replacement for professional help.</span>
        <button
          style={{ background: 'none', border: 'none', color: '#00B4FF', fontSize: 12, cursor: 'pointer', fontWeight: 600, fontFamily: 'Inter, sans-serif', flexShrink: 0 }}
          onClick={() => navigate('safety')}
        >
          Get Help →
        </button>
      </div>

      {/* Chat area */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '8px 16px', display: 'flex', flexDirection: 'column', gap: 2, scrollbarWidth: 'none' }}>
        {/* Starters (show only at beginning) */}
        {messages.length === 1 && (
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 8, fontWeight: 600 }}>
              QUICK STARTERS
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {starters.map((s, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(s)}
                  style={{
                    background: 'rgba(123,47,190,0.12)', border: '1px solid rgba(123,47,190,0.25)',
                    borderRadius: 16, padding: '10px 14px', textAlign: 'left',
                    cursor: 'pointer', fontSize: 13, color: 'rgba(255,255,255,0.75)',
                    fontFamily: 'Inter, sans-serif', transition: 'all 0.2s',
                  }}
                >
                  "{s}"
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: msg.role === 'ai' ? 'flex-start' : 'flex-end' }}>
            {msg.role === 'ai' && (
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginBottom: 4 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #7B2FBE, #FF2D78)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, flexShrink: 0,
                }}>🤖</div>
                <div className="chat-bubble ai" style={{ whiteSpace: 'pre-wrap' }}>
                  {msg.text}
                </div>
              </div>
            )}
            {msg.role === 'user' && (
              <div className="chat-bubble user">
                {msg.text}
              </div>
            )}
          </div>
        ))}

        {typing && (
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8 }}>
            <div style={{
              width: 28, height: 28, borderRadius: '50%',
              background: 'linear-gradient(135deg, #7B2FBE, #FF2D78)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14,
            }}>🤖</div>
            <div className="chat-bubble ai" style={{ display: 'flex', gap: 6, alignItems: 'center', padding: '14px 18px' }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  width: 8, height: 8, borderRadius: '50%', background: '#9B59B6',
                  animation: `pulse 1s ease-in-out ${i * 0.2}s infinite`,
                }} />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input area */}
      <div style={{
        padding: '12px 16px 32px',
        background: 'rgba(22,22,28,0.97)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end' }}>
          <textarea
            className="input-field"
            rows={1}
            placeholder="Talk to your Buddy..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage(input);
              }
            }}
            style={{ flex: 1, minHeight: 46, maxHeight: 120 }}
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || typing}
            style={{
              width: 46, height: 46, borderRadius: '50%', flexShrink: 0,
              background: input.trim() ? '#FF2D78' : 'rgba(255,255,255,0.08)',
              border: 'none', cursor: input.trim() ? 'pointer' : 'default',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20, transition: 'all 0.2s',
              boxShadow: input.trim() ? '0 0 15px rgba(255,45,120,0.4)' : 'none',
            }}
          >
            ➤
          </button>
        </div>
        <div style={{ textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,0.2)', marginTop: 8 }}>
          Your conversations are private & secure 🔒
        </div>
      </div>
    </div>
  );
};

export default BuddyScreen;
