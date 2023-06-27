import React from 'react'
import styles from './Button.module.scss'

const Button = ({ handleClick, className, text, theme }) => {
  return <button onClick={handleClick} className={`${styles[className]} ${styles[theme]}`}>{text}</button>
}

export default Button