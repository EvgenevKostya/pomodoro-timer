import React, { useContext } from 'react'
import ReactSlider from 'react-slider'
import BackButton from './BackButton'
import SettingsContext from './SettingsContext'
import './slider.css'

const Setting = () => {
  const settingsInfo = useContext(SettingsContext)
  return (
    <div style={{fontSize: '30px'}}>
        <label><p>Work minutes: {settingsInfo.workMinutes}:00</p></label>
        <ReactSlider
            className={'slider'}
            thumbClassName={'thumb'}
            trackClassName={'track'}
            value={settingsInfo.workMinutes}
            onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
            min={1}
            max={120}
         />
        <label><p>Chill minutes: {settingsInfo.breakMinutes}:00</p></label>
        <ReactSlider
            className={'chill-slider'}
            thumbClassName={'chill-thumb'}
            trackClassName={'track'}
            value={settingsInfo.breakMinutes}
            onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
            min={1}
            max={120}
        />
        <div style={{marginTop:'70px'}}>
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
        </div>
    </div>
  )
}

export default Setting