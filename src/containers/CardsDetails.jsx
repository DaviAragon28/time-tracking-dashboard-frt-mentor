import React from 'react'
import { Card } from '../components/Card/Card'
import data from '../data/data.json'

export const CardsDetails = ({ valueTime }) => {
  return (
    <div className='flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:gap-5 '>
      {
        data.map(detail => (
          <Card key={detail.title} 
            title={detail.title} 
            timeframes={detail.timeframes}  
            valueTime={valueTime}
          />
        ))
      }
    </div>
  )
}
