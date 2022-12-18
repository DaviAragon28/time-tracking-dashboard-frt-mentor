import React, { useState } from 'react'
import { CardsDetails } from '../../containers/CardsDetails'
import { User } from '../User/User'

export const Main = () => {
  const [valueTime, setValueTime] = useState('daily')

  const onHandleTime = time => {
    setValueTime(time)
  }

  return (
    <main className='py-10 px-3 flex flex-col gap-4 max-w-lg m-auto lg:flex-row lg:max-w-7xl lg:gap-5'>
      <User 
        onHandleTime={onHandleTime} 
        valueTime={valueTime} 
        setValueTime={setValueTime}  
      />
      <CardsDetails valueTime={valueTime} />
    </main>
  )
}
