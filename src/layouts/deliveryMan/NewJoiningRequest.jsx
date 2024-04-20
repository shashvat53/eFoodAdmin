import React, { useState } from 'react'
import PendingDeliveryMan from './PendingDeliveryMan'
import DeniedDeliveryMan from './DeniedDeliveryMan'

const NewJoiningRequest = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
      <div className='w-full flex gap-3 my-2 border-b-2'>
        <div onClick={()=>setIsOpen(false)} className={`cursor-pointer px-6 py-2 border-b-2 ${isOpen ? 'border-white':'border-red-400 text-red-400 font-semibold'}`}>Pending Delivery Man</div>
        <div onClick={()=>setIsOpen(true)} className={`cursor-pointer px-6 py-2 border-b-2 ${!isOpen ? 'border-white':'border-red-400 text-red-400 font-semibold'}`}>Denied Delivery Man</div>
      </div>
      {!isOpen ? <PendingDeliveryMan/> : <DeniedDeliveryMan/>}
      </>
    )
}

export default NewJoiningRequest