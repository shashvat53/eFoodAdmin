import React from 'react'
import SearchBox from '../../components/ui/SearchBox'
import DeliveryMenReviewTable from './DeliveryMenReviewTable'
import DeliveryMenReviewJson from '../../components/json/DeliveryMenReviewJson'

const DeliveryMenReview = () => {
  return (
    <div className='flex flex-col p-5 gap-3 h-fit'>
        <h1 className="text-2xl font-semibold pl-3 flex gap-2 items-center">
        <i className="ri-truck-line text-red-400 font-semibold"></i>  
        Delivery Men Review
      </h1>
        <div>
            <SearchBox/>
        </div>
        <div className='overflow-auto'>
            <DeliveryMenReviewTable data={DeliveryMenReviewJson()}/>
        </div>
    </div>
  )
}

export default DeliveryMenReview