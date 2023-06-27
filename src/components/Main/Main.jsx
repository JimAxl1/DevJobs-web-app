import React from 'react'
import { useState } from 'react'
import Filters from '../Filters'
import SectionCards from '../SectionCards'
import styles from './Main.module.scss'

const Main = ({ handleClick, theme }) => {
  const [filters, setFilters] = useState({title: '', location: '', time: false})

  return (
    <main className={`${styles.main} ${styles[theme]}`}>
      <Filters handleFunction={(x) => setFilters(x)} theme={theme}/>
      <SectionCards handleClick={handleClick} filters={filters} theme={theme}/>
    </main>
  )
}

export default Main