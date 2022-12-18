import React from 'react'
import iconEllipsis from '../../assets/images/icon-ellipsis.svg'
import iconWork from '../../assets/images/icon-work.svg'
import iconPlay from '../../assets/images/icon-play.svg'
import iconSocial from '../../assets/images/icon-social.svg'
import iconStudy from '../../assets/images/icon-study.svg'
import iconSelfCare from '../../assets/images/icon-self-care.svg'
import iconExercise from '../../assets/images/icon-exercise.svg'

export const Card = ({ title, timeframes, valueTime }) => {
    let titleToBG = title.toLowerCase().replace(" ", "")
    
    return (
        <article className='flex flex-col text-white lg:w-56 justify-between'>
            <>
                {
                    titleToBG === 'work'
                    &&
                    <div className={` bg-work  h-16  rounded-t-xl -mb-4`}>
                        <img src={iconWork} className='mr-5 ml-auto' alt="" />
                    </div>
                }
                {
                    titleToBG === 'play'
                    &&
                    <div className={` bg-play  h-16  rounded-t-xl -mb-4`}>
                        <img src={iconPlay} className='mr-5 ml-auto' alt="" />

                    </div>
                }
                {
                    titleToBG === 'study'
                    &&
                    <div className={` bg-study  h-16  rounded-t-xl -mb-4`}>
                        <img src={iconStudy} className='mr-5 ml-auto' alt="" />

                    </div>
                }
                {
                    titleToBG === 'exercise'
                    &&
                    <div className={` bg-exercise  h-16  rounded-t-xl -mb-4`}>
                        <img src={iconExercise} className='mr-5 ml-auto' alt="" />

                    </div>
                }
                {
                    titleToBG === 'social'
                    &&
                    <div className={` bg-social  h-16  rounded-t-xl -mb-4`}>
                        <img src={iconSocial} className='mr-5 ml-auto' alt="" />

                    </div>
                }
                {
                    titleToBG === 'selfcare'
                    &&
                    <div className={` bg-selfcare h-16  rounded-t-xl -mb-4`}>
                        <img src={iconSelfCare} className='mr-5 ml-auto' alt="" />

                    </div>
                }
            </>

            <div className='bg-DarkBlue px-3 py-4 flex flex-col rounded-xl lg:h-40 lg:px-6 hover:brightness-125 cursor-pointer '>
                <div className=' flex justify-between'>
                    <p className='text-lg'>{title}</p>
                    <img src={iconEllipsis} alt="icon ellipsis" className='object-contain' />
                </div>
                <div className='flex justify-between items-center lg:flex-col lg:items-start lg:mt-3 lg:gap-2'>
                    <p className='text-3xl font-thin lg:text-5xl'>
                        {
                            valueTime === 'daily'
                            && <>{timeframes.daily.current}hrs</>
                        }
                        {
                            valueTime === 'weekly'
                            && <>{timeframes.weekly.current}hrs</>
                        }
                        {
                            valueTime === 'monthly'
                            && <>{timeframes.monthly.current}hrs</>
                        }
                    </p>
                    <span className='text-PaleBlue text-sm'>

                        {
                            valueTime === 'daily'
                            && <>Last day - {timeframes.daily.current}hrs</>
                        }
                        {
                            valueTime === 'weekly'
                            && <>Last week - {timeframes.weekly.current}hrs</>
                        }
                        {
                            valueTime === 'monthly'
                            && <>Last month - {timeframes.monthly.current}hrs</>
                        }
                    </span>
                </div>
            </div>
        </article>
    )
}