import React, { useState } from 'react';
import './index.css';

import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import VentScreen from './screens/VentScreen';
import ReflectScreen from './screens/ReflectScreen';
import ConnectScreen from './screens/ConnectScreen';
import GrowScreen from './screens/GrowScreen';
import BuddyScreen from './screens/BuddyScreen';
import ProfileScreen from './screens/ProfileScreen';
import ControlScreen from './screens/ControlScreen';
import SafetyScreen from './screens/SafetyScreen';
import PremiumScreen from './screens/PremiumScreen';
import SettingsScreen from './screens/SettingsScreen';
import BottomNav from './components/BottomNav';

export type Screen =
  | 'splash'
  | 'onboarding'
  | 'login'
  | 'home'
  | 'vent'
  | 'reflect'
  | 'connect'
  | 'grow'
  | 'buddy'
  | 'profile'
  | 'control'
  | 'safety'
  | 'premium'
  | 'settings';

export interface AppState {
  user: {
    name: string;
    avatar: string;
    streak: number;
    growthScore: number;
    mood: string;
    premium: boolean;
  };
  navigate: (screen: Screen) => void;
}

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');

  const navigate = (screen: Screen) => setCurrentScreen(screen);

  const appState: AppState = {
    user: {
      name: 'Alex',
      avatar: '🧑',
      streak: 7,
      growthScore: 340,
      mood: '😊',
      premium: false,
    },
    navigate,
  };

  const mainScreens: Screen[] = ['home', 'vent', 'reflect', 'connect', 'grow'];
  const showNav = mainScreens.includes(currentScreen);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash': return <SplashScreen navigate={navigate} />;
      case 'onboarding': return <OnboardingScreen navigate={navigate} />;
      case 'login': return <LoginScreen navigate={navigate} />;
      case 'home': return <HomeScreen appState={appState} />;
      case 'vent': return <VentScreen appState={appState} />;
      case 'reflect': return <ReflectScreen appState={appState} />;
      case 'connect': return <ConnectScreen appState={appState} />;
      case 'grow': return <GrowScreen appState={appState} />;
      case 'buddy': return <BuddyScreen appState={appState} />;
      case 'profile': return <ProfileScreen appState={appState} />;
      case 'control': return <ControlScreen appState={appState} />;
      case 'safety': return <SafetyScreen appState={appState} />;
      case 'premium': return <PremiumScreen appState={appState} />;
      case 'settings': return <SettingsScreen appState={appState} />;
      default: return <HomeScreen appState={appState} />;
    }
  };

  return (
    <div className="app-shell">
      <div className="screen">
        {renderScreen()}
      </div>
      {showNav && (
        <BottomNav current={currentScreen} navigate={navigate} />
      )}
    </div>
  );
};

export default App;
