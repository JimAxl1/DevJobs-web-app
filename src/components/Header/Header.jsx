import React from 'react'
import styles from './Header.module.scss'
import "@fontsource/kumbh-sans"

const Header = ({ handleFunction, changeTheme, theme }) => {
  
  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <h1 className={styles.title} onClick={handleFunction}>devjobs</h1>
      <label className={styles.switch}>
        <input type="checkbox" onChange={changeTheme}/>
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </header>
  )
}

export default Header