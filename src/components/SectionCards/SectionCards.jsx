import React from 'react'
import { useState } from 'react'
import Button from '../Button'
import FilterCards from '../FilterCards'
import styles from './SectionCards.module.scss'

const SectionCards = ({ handleClick, filters, theme }) => {
  const [loadMore, setLoadMore] = useState(true)
  const [totalCards, setTotalCards] = useState(15)

  return (
    <section className={styles.container}>
      <FilterCards limit={loadMore}
        handleClick={handleClick} 
        filters={filters} 
        cardsNumber={(x) => setTotalCards(x)}
        theme={theme}
      />
      {totalCards > 12 && loadMore === true &&
        <Button handleClick={() => setLoadMore(!loadMore)} text='Load More' className='loadMore' /> 
      }
      {totalCards === 0 && <p className={`${styles.text} ${styles[theme]}`}>No jobs found</p>}
    </section>
  )
}

export default SectionCards