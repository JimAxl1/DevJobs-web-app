import { useState } from 'react'
import Header from "./components/Header"
import Main from "./components/Main"
import Info from './components/Info'
import styles from './App.module.scss'

function App() {
  const [showInfo, setShowInfo] = useState({show: false, info:{}})
  const [theme, setTheme] = useState('light')

  return (
    <>
      <Header handleFunction={() => setShowInfo({show: false, info:{}})}
      theme={theme}
       changeTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
      {showInfo.show === false ?
        <Main handleClick={(item) => setShowInfo({show:true, info:item})} theme={theme}/> :
        <Info item={showInfo.info} theme={theme} />
      }
    </>
  )
}

export default App;