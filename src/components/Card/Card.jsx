import React from 'react'
import styles from './Card.module.scss'
import "@fontsource/kumbh-sans"
const preLink = require.context('../../', true)

const Card = ({ item, handleClick, theme }) => {
  return (
    <div className={styles.containerCard}>
      <span className={styles.containerimg} style={{backgroundColor: item.logoBackground}}>
        <img src={preLink(item.logo)} alt='Company logo' className={styles.logo} />        
      </span>
      <div key={item.id} className={`${styles.card} ${styles[theme]}`} onClick={() => handleClick(item)}>
        <div className={styles.container}>
          <p className={styles.text1}>{item.postedAt}</p>
          <p className={styles.text1}>·</p>
          <p className={styles.text1}>{item.contract}</p>
        </div>
        <p className={`${styles.position} ${styles[theme]}`}>{item.position}</p>
        <p className={styles.text1}>{item.company}</p>
        <p className={styles.location}>{item.location}</p>
      </div>    
    </div>
  )
}

export default Card