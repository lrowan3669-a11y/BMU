import React, { useState } from 'react';
import { AppState } from '../App';

interface Props { appState: AppState; }

const posts = [
  {
    avatar: '🦋', username: 'Anonymous Butterfly', time: '12m ago',
    tag: 'Bullying', tagColor: '#FF2D78',
    content: "Finally stood up for myself today. It was scary but I did it. It doesn't always have to end perfectly to feel like a win. 💪",
    hearts: 47, replies: 8,
  },
  {
    avatar: '🌊', username: 'Ocean Soul', time: '1h ago',
    tag: 'Anxiety', tagColor: '#9B59B6',
    content: "Panic attack hit me at school today. Managed to get through it using the breathing technique from the BMU Buddy. Small wins still count!",
    hearts: 63, replies: 14,
  },
  {
    avatar: '☀️', username: 'Sunny Days', time: '2h ago',
    tag: 'Self-Esteem', tagColor: '#FFD700',
    content: "Reminder: your worth is not defined by your grades, your followers, or what people think of you. You exist and that's enough. 🌟",
    hearts: 128, replies: 22,
  },
  {
    avatar: '🌙', username: 'Midnight Thinker', time: '3h ago',
    tag: 'Friendship', tagColor: '#00B4FF',
    content: "Lost a friend this week. It really hurts. But I'm learning that some people leave and that's okay. New ones will come. Still sad tho. 💙",
    hearts: 89, replies: 31,
  },
];

const challenges = [
  { icon: '📝', title: 'Kindness Challenge', desc: 'Do one kind thing for someone today', participants: 342, color: '#FF2D78' },
  { icon: '🌬️', title: '5-4-3-2-1 Grounding', desc: 'Use this technique when anxious', participants: 218, color: '#00B4FF' },
  { icon: '🙏', title: 'Gratitude 7-Day Run', desc: '3 things daily for a week', participants: 567, color: '#FFD700' },
];

const ConnectScreen: React.FC<Props> = ({ appState }) => {
  const [activeTab, setActiveTab] = useState<'feed' | 'groups' | 'challenges'>('feed');
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [showPost, setShowPost] = useState(false);
  const [postText, setPostText] = useState('');
  const [postAnon, setPostAnon] = useState(true);

  const toggleLike = (i: number) => {
    setLikedPosts(p => p.includes(i) ? p.filter(x => x !== i) : [...p, i]);
  };

  const groups = [
    { icon: '🛡️', name: 'Anti-Bullying Squad', members: '2.4k', color: '#FF2D78', active: true },
    { icon: '🧠', name: 'Anxiety Warriors', members: '1.8k', color: '#9B59B6', active: false },
    { icon: '📚', name: 'School Stress Support', members: '3.1k', color: '#FFD700', active: true },
    { icon: '💪', name: 'Confidence Builders', members: '986', color: '#00B4FF', active: false },
    { icon: '👫', name: 'Friendship Zone', members: '1.2k', color: '#FF2D78', active: false },
    { icon: '🌈', name: 'LGBTQ+ Safe Space', members: '743', color: '#9B59B6', active: false },
  ];

  return (
    <div>
      <div style={{
        background: 'linear-gradient(180deg, rgba(0,180,255,0.15) 0%, transparent 100%)',
        padding: '52px 20px 20px',
      }}>
        <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 4 }}>
          🤝 <span className="glow-blue">Connect</span>
        </div>
        <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)' }}>
          You're not alone. Never were.
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 8, padding: '0 20px 16px', overflowX: 'auto' }}>
        {[
          { id: 'feed', label: '📢 Feed' },
          { id: 'groups', label: '👥 Groups' },
          { id: 'challenges', label: '🎯 Challenges' },
        ].map(t => (
          <button
            key={t.id}
            className={`chip ${activeTab === t.id ? 'active-blue' : ''}`}
            onClick={() => setActiveTab(t.id as any)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div style={{ padding: '0 20px' }}>
        {activeTab === 'feed' && (
          <div className="animate-fadein">
            {/* Moderation banner */}
            <div style={{
              background: 'rgba(0,180,255,0.08)', border: '1px solid rgba(0,180,255,0.2)',
              borderRadius: 14, padding: '10px 14px', marginBottom: 16,
              display: 'flex', gap: 10, alignItems: 'center',
            }}>
              <span style={{ fontSize: 18 }}>🛡️</span>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
                This community is <strong style={{ color: '#00B4FF' }}>moderated 24/7</strong>. Bullying and harmful content is not tolerated.
              </p>
            </div>

            {/* Share button */}
            <button
              className="btn btn-blue btn-full"
              style={{ marginBottom: 20, color: '#111' }}
              onClick={() => setShowPost(true)}
            >
              ✍️ Share Your Story
            </button>

            {/* Posts */}
            {posts.map((post, i) => (
              <div key={i} className="community-post" style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <div className="avatar" style={{ background: 'rgba(255,255,255,0.08)', fontSize: 22 }}>
                    {post.avatar}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>{post.username}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{post.time}</div>
                  </div>
                  <div style={{
                    padding: '4px 10px', borderRadius: 100,
                    background: `${post.tagColor}20`,
                    border: `1px solid ${post.tagColor}30`,
                    fontSize: 11, fontWeight: 700, color: post.tagColor,
                  }}>
                    {post.tag}
                  </div>
                </div>

                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.85)', marginBottom: 12 }}>
                  {post.content}
                </p>

                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <button
                    style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
                    onClick={() => toggleLike(i)}
                  >
                    <span style={{ fontSize: 18 }}>{likedPosts.includes(i) ? '❤️' : '🤍'}</span>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>
                      {post.hearts + (likedPosts.includes(i) ? 1 : 0)}
                    </span>
                  </button>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: 18 }}>💬</span>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>{post.replies}</span>
                  </button>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: 'auto' }}>
                    <span style={{ fontSize: 18 }}>🔗</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'groups' && (
          <div className="animate-fadein">
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 16, fontWeight: 500 }}>
              Find your people. Join a group that feels right.
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {groups.map((g, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 18, padding: '16px 18px',
                  display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer',
                }}>
                  <div style={{
                    width: 50, height: 50, borderRadius: 16,
                    background: `${g.color}20`, border: `1px solid ${g.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 24, flexShrink: 0,
                  }}>
                    {g.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 2 }}>{g.name}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{g.members} members</div>
                  </div>
                  <button style={{
                    padding: '8px 16px', borderRadius: 100, fontSize: 13, fontWeight: 700,
                    background: g.active ? `${g.color}20` : 'rgba(255,255,255,0.08)',
                    border: g.active ? `1px solid ${g.color}40` : '1px solid rgba(255,255,255,0.1)',
                    color: g.active ? g.color : 'rgba(255,255,255,0.6)',
                    cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                  }}>
                    {g.active ? 'Joined' : 'Join'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'challenges' && (
          <div className="animate-fadein">
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
              Community challenges to help you grow together 💙
            </div>
            {challenges.map((c, i) => (
              <div key={i} style={{
                background: `linear-gradient(135deg, ${c.color}12, ${c.color}04)`,
                border: `1px solid ${c.color}20`,
                borderRadius: 20, padding: 20, marginBottom: 14,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 32 }}>{c.icon}</span>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>{c.title}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{c.desc}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
                    👥 {c.participants} participating
                  </div>
                  <button style={{
                    padding: '8px 18px', borderRadius: 100, fontSize: 13, fontWeight: 700,
                    background: c.color,
                    color: c.color === '#FFD700' ? '#111' : 'white',
                    border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                  }}>
                    Join →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Post modal */}
      {showPost && (
        <div className="modal-overlay" onClick={() => setShowPost(false)}>
          <div className="modal-sheet" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <div style={{ fontSize: 18, fontWeight: 800 }}>Share Your Story</div>
              <button style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: 'rgba(255,255,255,0.5)' }} onClick={() => setShowPost(false)}>✕</button>
            </div>

            <div style={{
              background: 'rgba(0,180,255,0.08)', border: '1px solid rgba(0,180,255,0.2)',
              borderRadius: 12, padding: '10px 14px', marginBottom: 16,
              fontSize: 13, color: 'rgba(255,255,255,0.6)',
            }}>
              🛡️ Your post will be reviewed before going live. Be kind. This is a safe space.
            </div>

            <textarea
              className="input-field"
              rows={5}
              placeholder="Share your experience, ask for support, or offer encouragement..."
              value={postText}
              onChange={e => setPostText(e.target.value)}
              style={{ marginBottom: 14 }}
            />

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div
                className={`toggle ${postAnon ? 'on' : ''}`}
                onClick={() => setPostAnon(!postAnon)}
              />
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                Post anonymously
              </span>
            </div>

            <button
              className="btn btn-blue btn-full"
              style={{ color: '#111' }}
              onClick={() => setShowPost(false)}
            >
              Share Post 🚀
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConnectScreen;
