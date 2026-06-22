import React from 'react';
import { Screen } from '../App';

interface Props {
  current: Screen;
  navigate: (s: Screen) => void;
}

const BottomNav: React.FC<Props> = ({ current, navigate }) => {
  const items = [
    { id: 'home' as Screen, icon: '🏠', label: 'Home' },
    { id: 'vent' as Screen, icon: '💭', label: 'Vent' },
    { id: 'reflect' as Screen, icon: '🌟', label: 'Reflect' },
    { id: 'connect' as Screen, icon: '🤝', label: 'Connect' },
    { id: 'grow' as Screen, icon: '🌱', label: 'Grow' },
  ];

  return (
    <nav className="bottom-nav">
      {items.map((item) => (
        <button
          key={item.id}
          className={`nav-item ${current === item.id ? 'active' : ''}`}
          onClick={() => navigate(item.id)}
        >
          <span className="nav-icon">{item.icon}</span>
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
