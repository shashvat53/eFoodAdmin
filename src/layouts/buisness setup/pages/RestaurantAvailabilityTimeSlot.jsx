import React, { Fragment, useState } from 'react'
import RestaurantTimeJson from '../../../components/json/RestaurantTimeJson'

const RestaurantAvailabilityTimeSlot = () => {
    const [resTime, setResTime] = useState(RestaurantTimeJson())
    const daysCard = (title1, card)=>{
        return<div className='flex flex-col sm:flex-row gap-1'>
                <div className='h-24 flex items-center justify-center p-3 w-40 border-[1px]'>
                    <p>{title1}</p>
                </div>
                <div className='p-2 flex flex-col gap-2 items-center justify-center border-[1px] rounded-md '>
                    <p>{card[0].title2}</p>
                    <span className='text-sm text-gray-500'>{card[0].time}</span>
                </div>
                <div className='p-2 flex flex-col gap-2 items-center justify-center border-[1px] rounded-md '>
                    <p>{card[1].title2}</p>
                    <span className='text-sm text-gray-500'>{card[1].time}</span>
                </div>
            </div>
       
    }
  return (
    <div className='border-[1px] p-2 rounded-md'>
        <h1 className='border-b-[1px] pb-3'><i className="ri-calendar-line"></i> Restaurant Opening-Closing Schedules</h1>
        <div className='flex flex-col gap-3'>
            {resTime?.map((elem, ind)=>{
               
                    return<Fragment key={ind }>
                        {daysCard(elem.title1, elem.card)}
                    </Fragment>
                
            })}
        </div>
    </div>
  )
}

export default RestaurantAvailabilityTimeSlot