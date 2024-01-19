import './App.css'
import { useState } from 'react'
import DayNight from './assets/components/dayNight/DayNight'

function App() {

  const [darkMode, setDarkMode] = useState(false)
  return (
    <>
      <DayNight darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  )
}

export default App
