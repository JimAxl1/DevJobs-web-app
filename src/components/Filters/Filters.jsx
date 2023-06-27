import React from 'react'
import Button from '../Button'
import { useState } from 'react'
import styles from './Filters.module.scss'

const Filters = ({ handleFunction, theme }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [filter, setFilter] = useState({title: '', location: '', time: false})

  const updateState = (propertie, text) => {
    setFilter({...filter, [propertie]: text})
  }

  const menuSearch = () => {
    if (window.innerWidth < 768){
          setShowMenu(!showMenu)
    }
    handleFunction(filter)
  }

  const placeHolderInput1 = window.innerWidth >= 992 ? 'Filter by title, companies, expertise…' : 'Filter by title...'

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <input type='text' placeholder={placeHolderInput1} onChange={(e) => updateState('title', e.target.value)} className={`${styles.inputText} ${styles[theme]}`}/>
      <div className={showMenu === true ? styles.modalMoreFilters : styles.hideFilters}>
        <div className={showMenu === true ? `${styles.moreFilters} ${styles[theme]}` : styles.hideFilters}>
          <input type='text' placeholder='Filter by location…' onChange={(e) => updateState('location', e.target.value)} className={`${styles.location} ${styles[theme]}`} />
          <div className={styles.container2}>
            <label className={`${styles.labelCheck} ${styles[theme]}`}>
              <input type='checkbox' checked={filter.time} onChange={() => updateState('time', !filter.time)} className={`${styles.checkbox} ${styles[theme]}`}/>
            </label>
            <Button text='Search' className='searchMoreFilters' handleClick={() => menuSearch()}/>    
          </div>
        </div>
      </div>
      <div className={styles.containerButtons}>
        <Button className='filter' handleClick={() => setShowMenu(!showMenu)} theme={theme} />
        <Button className='search' handleClick={() => handleFunction(filter)} theme={theme} />        
      </div>
    </div>
  )
}

export default Filters