import React from 'react'
import Card from '../Card';
import { useEffect } from 'react';
import data from '../../data.json'

const FilterCards = ({ limit, handleClick, filters, cardsNumber, theme }) => {
  let filter = filters.title.toUpperCase();
  let list = data.map((item) => {
    let palabrasEnFiltro = filter.split(' ')
    let hallado = 0
    let firstInput = `${item.position} ${item.company}`
    for (var filtro of palabrasEnFiltro) {
      if (firstInput.toUpperCase().indexOf(filtro) > -1) {
        hallado++;
      }  
    }  
    if (hallado === palabrasEnFiltro.length) {
      return item;
    }
  })
  
  list = list.filter((item) => {
    return item !== undefined
  })

  if(filters.location !== ""){
    list = list.filter(item => {
      let x = item.location.toUpperCase()
      return x.includes(filters.location.toUpperCase())
    })
  }

  if (filters.time === true){
    list = list.filter(item => {
      return item.contract === 'Full Time'
    })
  }

  useEffect(() => {
    cardsNumber(list.length)
  }, [list]);

  if (limit === true){
    let x = 0;
    return list.map((item) => {
      if (x < 12){
        x++;
        return <Card key={item.id} item={item} handleClick={handleClick} theme={theme} />
      }
    })
  }else{
    return list.map((item) => { return <Card key={item.id} item={item} handleClick={handleClick} theme={theme} />} )
  }
}

export default FilterCards