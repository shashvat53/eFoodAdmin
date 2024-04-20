import react, { useEffect, useState } from 'react'
import SearchBox from '../../components/ui/SearchBox'
import DeliverymanListTable from '../../components/ui/table/DeliverymanListTable'
// import DeliverymanListJson from '../../components/json/DeliverymanListJson'
import DeliveryMan from '../../helper/DeliveryMan'

const DeliveryManList = () => {
  const [data,setData]=useState()
  const DeliveryList=async()=>{
    try {
    const response=await DeliveryMan()
        console.log(response.data.deliveryPartner,'123411')
        setData(response.data.deliveryPartner)
    } catch (error) {
        console.log(error,'deliveryman ')
    }
}
useEffect(()=>{
  DeliveryList()
},[])
  return (
    <div className='overflow-x-hidden'>
        <h1 className="text-2xl font-semibold pl-3 flex gap-2 items-center">
        <i className="ri-truck-line text-red-400 font-semibold"></i>  
        Deliveryman List
      </h1>
      <div>

      <div className='w-full flex justify-between items-center p-6'>

        <SearchBox/>
        <button className='border-red-400 hover:bg-red-400 hover:text-white border-2 px-4 py-2 rounded-md text-red-400 flex items-center justify-center gap-2'>
      <i className="ri-download-2-line"></i>
        Export
        <i className="ri-arrow-drop-down-line"></i>
        </button>
        </div>
        <div className='overflow-x-auto'>

        <DeliverymanListTable data={data} />
        </div>
      </div>
    </div>
  )
}

export default DeliveryManList