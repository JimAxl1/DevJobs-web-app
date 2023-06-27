import React from 'react'
import styles from './Info.module.scss'
const preLink = require.context('../../', true)

const Info = ({ item, theme }) => {
  return (
    <main className={`${styles.main} ${styles[theme]}`}>
      <div className={`${styles.containerCardInfo} ${styles[theme]}`}>
        <span className={styles.containerimg} style={{backgroundColor: item.logoBackground}}>
          <img src={preLink(item.logo)} alt='Company logo' className={styles.logo} />          
        </span>      
        <div className={`${styles.container1} ${styles[theme]}`}>
          <p className={`${styles.company} ${styles[theme]}`}>{item.company}</p>
          <p className={styles.website}>{item.website}</p>
          <a href={item.website} className={`${styles.linkCompany} ${styles[theme]}`} target='_blank' rel="noreferrer">Company Site</a>
        </div>
      </div>
      <div className={`${styles.container2} ${styles[theme]}`}>
        <div className={styles.containerInfo}>
          <p className={styles.info}>{item.postedAt}</p>
          <p className={styles.info}>•</p>
          <p className={styles.info}>{item.contract}</p>
        </div>
        <p className={`${styles.position} ${styles[theme]}`}>{item.position}</p>
        <p className={styles.location}>{item.location}</p>
        <a href={item.apply} className={styles.apply} target='_blank' rel="noreferrer">Apply Now</a>
        <p className={styles.description}>{item.description}</p>
        <h3 className={`${styles.descriptionHeader} ${styles[theme]}`}>Requirements</h3>
        <p className={styles.description}>{item.requirements.content}</p>
        <ul className={styles.requirements}>
          {item.requirements.items.map((item) => {
            return <li key={item} className={styles.description}>{item}</li>
          })}            
        </ul>
        <h3 className={`${styles.descriptionHeader} ${styles[theme]}`}>What You Will Do</h3>
        <p className={styles.description}>{item.role.content}</p>
        <ol className={styles.roleList}>
          {item.role.items.map((item) => {
            return <li key={item} className={styles.description}>{item}</li>
          })}              
        </ol>
      </div>
      <footer className={`${styles.footer} ${styles[theme]}`}>
        <p className={`${styles.position} ${styles[theme]}`}>{item.position}</p>
        <p className={styles.description}>So Digital Inc.</p>
        <a href={item.apply} className={styles.apply} target='_blank' rel="noreferrer">Apply Now</a>          
      </footer>
    </main>
  )
}

export default Info