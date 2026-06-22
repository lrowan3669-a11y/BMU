import React, { useState } from 'react';
import { AppState } from '../App';

interface Props { appState: AppState; }

const SettingsScreen: React.FC<Props> = ({ appState }) => {
  const { navigate } = appState;
  const [toggles, setToggles] = useState({
    notifications: true,
    dailyReminder: true,
    communityUpdates: false,
    darkMode: true,
    anonymous: false,
    haptics: true,
  });

  const toggle = (key: keyof typeof toggles) => {
    setToggles(t => ({ ...t, [key]: !t[key] }));
  };

  const sections = [
    {
      title: 'Notifications',
      items: [
        { key: 'notifications', label: 'Push Notifications', desc: 'Receive app notifications', icon: '🔔' },
        { key: 'dailyReminder', label: 'Daily Check-in Reminder', desc: 'Remind me to check in each day', icon: '⏰' },
        { key: 'communityUpdates', label: 'Community Updates', desc: 'Notify me of replies & likes', icon: '👥' },
      ],
    },
    {
      title: 'Privacy',
      items: [
        { key: 'anonymous', label: 'Default Anonymous Posts', desc: 'Post without showing my name', icon: '🎭' },
      ],
    },
    {
      title: 'App',
      items: [
        { key: 'darkMode', label: 'Dark Mode', desc: 'Keep the app dark', icon: '🌙' },
        { key: 'haptics', label: 'Haptic Feedback', desc: 'Vibrations when tapping', icon: '📳' },
      ],
    },
  ];

  const menuItems = [
    { icon: '👑', label: 'Upgrade to Premium', color: '#FFD700', action: () => navigate('premium') },
    { icon: '🔒', label: 'Privacy Policy', color: 'rgba(255,255,255,0.6)', action: () => {} },
    { icon: '📋', label: 'Terms of Service', color: 'rgba(255,255,255,0.6)', action: () => {} },
    { icon: '💬', label: 'Send Feedback', color: '#00B4FF', action: () => {} },
    { icon: '⭐', label: 'Rate the App', color: '#FFD700', action: () => {} },
    { icon: '🆘', label: 'Safety & Support', color: '#FF2D78', action: () => navigate('safety') },
    { icon: '🚭', label: 'Sign Out', color: '#FF2D78', action: () => navigate('login') },
  ];

  return (
    <div style={{ background: '#0D0D0F', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{
        padding: '50px 20px 20px',
        background: 'linear-gradient(180deg, rgba(123,47,190,0.15) 0%, transparent 100%)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <button
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', fontSize: 22, cursor: 'pointer' }}
            onClick={() => navigate('profile')}
          >
            ←
          </button>
          <div style={{ fontSize: 22, fontWeight: 800 }}>⚙️ Settings</div>
        </div>
      </div>

      <div style={{ padding: '0 20px 40px' }}>
        {sections.map((section, si) => (
          <div key={si} style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: 1, marginBottom: 10, textTransform: 'uppercase' }}>
              {section.title}
            </div>
            <div className="card" style={{ overflow: 'hidden' }}>
              {section.items.map((item, ii) => (
                <div key={item.key} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '14px 18px',
                  borderBottom: ii < section.items.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>{item.label}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{item.desc}</div>
                  </div>
                  <div
                    className={`toggle ${toggles[item.key as keyof typeof toggles] ? 'on' : ''}`}
                    onClick={() => toggle(item.key as keyof typeof toggles)}
                  >
                    <div style={{
                      position: 'absolute', width: 20, height: 20, background: 'white',
                      borderRadius: '50%', top: 2,
                      left: toggles[item.key as keyof typeof toggles] ? 24 : 2,
                      transition: 'left 0.2s', boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Menu items */}
        <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: 1, marginBottom: 10, textTransform: 'uppercase' }}>
          More
        </div>
        <div className="card" style={{ overflow: 'hidden' }}>
          {menuItems.map((item, i) => (
            <button
              key={i}
              onClick={item.action}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: 14,
                padding: '14px 18px', background: 'none', border: 'none',
                borderBottom: i < menuItems.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                cursor: 'pointer', textAlign: 'left',
              }}
            >
              <span style={{ fontSize: 22 }}>{item.icon}</span>
              <span style={{ flex: 1, fontSize: 14, fontWeight: 600, color: item.color, fontFamily: 'Inter, sans-serif' }}>
                {item.label}
              </span>
              <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 16 }}>→</span>
            </button>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 24, fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>
          BMU – Back Me Up<br />
          Version 1.0.0 Beta
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;
