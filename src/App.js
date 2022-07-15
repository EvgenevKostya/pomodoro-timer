import { useState } from 'react';
import './App.css';
import Setting from './components/Setting';
import SettingsContext from './components/SettingsContext';
import Timer from './components/Timer'
import videoBg from './assets/backgrounds/videoBg.mp4'

function App() {
  const [showSettings, setShowSettings] = useState(false)
  const [workMinutes, setWorkMinutes] = useState(45)
  const [breakMinutes, setBreakMinutes] = useState(15)

  return (
    <main>
      <video autoPlay loop muted 
      style={{
        position:'absolute',
        width: '100%',
        left:'50%',
        top:'50%',
        height: '100%',
        objectFit: 'cover',
        transform: 'translate(-50%, -50%)',
        zIndex: '-1'
      }}
      >
        <source src={videoBg} type='video/mp4' />
      </video>
      <SettingsContext.Provider value={{
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
        showSettings, 
        setShowSettings
      }}>
        {showSettings ? <Setting /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;

