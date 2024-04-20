import React from 'react'
import SearchBox from '../../components/ui/SearchBox'
import PendingDeliveryManTable from './PendingDeliveryManTable'

const DeniedDeliveryMan = () => {
  return (
    <div className='flex flex-col p-5 gap-3 h-fit'>
        <div>
            <SearchBox/>
        </div>
        <div className='overflow-auto'>
            <PendingDeliveryManTable/>
        </div>
    </div>
  )
}

export default DeniedDeliveryMan;