import React from 'react'
import Jeremy from '../../assets/images/image-jeremy.png'

export const User = ({ valueTime, onHandleTime }) => {
  return (
    <article className='text-white flex flex-col lg:w-60'>
      <div className='z-50 flex items-center gap-4 justify-center bg-blueDesign py-5 rounded-2xl  lg:flex-col lg:items-start lg:px-6 lg:h-[70%]'>
        <img src={Jeremy} alt="Jeremy" className='w-16 border-[3px] border-white rounded-full' />
        <div>
          <span className='text-sm text-PaleBlue'>Report for</span>
          <p className='text-xl lg:text-4xl lg:pr-10 font-thin'>Jeremy Robson</p>
        </div>
      </div>
      <div className='bg-DarkBlue -mt-4 pt-3 h-16 flex justify-between items-center rounded-b-xl px-5 text-PaleBlue lg:flex-1 lg:flex-col lg:items-start lg:py-5 lg:pt-7 '>
        <p onClick={() => onHandleTime('daily')}
          className={`cursor-pointer text-lg hover:text-white ${valueTime === 'daily' ? 'text-white' : ''}`}>Daily</p>
        <p onClick={() => onHandleTime('weekly')}
          className={`cursor-pointer text-lg hover:text-white ${valueTime === 'weekly' ? 'text-white' : ''}`}>Weekly</p>
        <p onClick={() => onHandleTime('monthly')}
          className={`cursor-pointer text-lg hover:text-white ${valueTime === 'monthly' ? 'text-white' : ''}`}>Monthly</p>
      </div>
    </article>
  )
}
