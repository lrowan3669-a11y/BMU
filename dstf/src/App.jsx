import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import BrowsePage from './pages/BrowsePage'
import MyProtectionPage from './pages/MyProtectionPage'
import PricingPage from './pages/PricingPage'
import { featuredContent, trending } from './data/mockData'
import './index.css'

const seedContent = [...featuredContent, ...trending]

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [activePage, setActivePage] = useState('home')
  const [content, setContent] = useState(seedContent)

  function handleToggleProtect(id) {
    setContent(prev =>
      prev.map(item => item.id === id ? { ...item, protected: !item.protected } : item)
    )
  }

  const pages = {
    home: <HomePage setActivePage={setActivePage} content={content.slice(0, 6)} onToggleProtect={handleToggleProtect} />,
    browse: <BrowsePage content={content} onToggleProtect={handleToggleProtect} />,
    'my-protection': <MyProtectionPage content={content} onToggleProtect={handleToggleProtect} setActivePage={setActivePage} />,
    pricing: <PricingPage />,
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main style={{ flex: 1 }}>
        {pages[activePage] || pages.home}
      </main>
      <Footer setActivePage={setActivePage} />
    </div>
  )
}
