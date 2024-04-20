import React, { useEffect, useState } from 'react'
import FilterCard from '../../components/Table-order/FilterCard'
import TableStatusCard from '../../components/Table-order/TableStatusCard'
import SearchBox from '../../components/ui/SearchBox'
import Table from '../../components/ui/Table'
import { useParams } from 'react-router-dom'
import OrderDetailsJson from '../../components/json/OrderDetailsJson'
import OrderTable from '../../components/ui/table/OrderTable'

const OrderList = () => {
  const [orderData, setOrderData] = useState(OrderDetailsJson())
  const {name} = useParams()
  useEffect(()=>{
    // console.log(name);
  },[])

  const title = {
    All:'All Orders',
    Pending:'Pending Orders',
    Confirmed:'Confirmed Orders',
    OutForDelivery:'Out For Delivery Orders',
    Delivered:'Delivered Orders',
    Returned:'Returned Orders',
    FailedToDeliver:'Failed To Deliver Orders',
    Canceled:'Canceled Orders',
    Scheduled:'Scheduled Orders',
  }

  const filterCard = [
    {
        tag:'Pending',
        theme:'text-yellow-500 border-yellow-500',
        icon:'ri-timer-2-line',
        count:'5'
    },
    {
        tag:'Confirmed',
        theme:'text-green-500 border-green-500',
        icon:'ri-verified-badge-fill',
        count:'12'
    },
    {
        tag:'Processing',
        theme:'text-yellow-500 border-yellow-500',
        icon:'ri-hourglass-fill',
        count:'9'
    },
    {
        tag:'Out For Delivery',
        theme:'text-blue-500 border-blue-500',
        icon:'ri-walk-fill',
        count:'3'
    },
    {
        tag:'Delivered',
        theme:'text-green-500 border-green-500',
        icon:'ri-check-double-fill',
        count:'6'
    },
    {
        tag:'Returned',
        theme:'text-red-500 border-red-500',
        icon:'ri-arrow-go-back-fill',
        count:'1'
    },
    {
        tag:'Failed To Deliver',
        theme:'text-yellow-500 border-yellow-500',
        icon:'ri-close-circle-fill',
        count:'1'
    },
    {
        tag:'Canceled',
        theme:'text-red-500 border-red-500',
        icon:'ri-calendar-close-fill',
        count:'5'
    },
    {
        tag:'Scheduled',
        theme:'text-blue-500 border-blue-500',
        icon:'ri-calendar-schedule-fill',
        count:'7'
    },

  ]


  return (
    <div className='shadow-sm overflow-hidden py-6 mb-4'>
      <h1 className='text-2xl font-semibold pl-3'><i className="ri-restaurant-line text-red-400 font-semibold"></i> {title[name]}</h1>
    <FilterCard/>
    { name === 'All' && <div className='grid-flow-row grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-3 p-3   '>
        {
            filterCard.map((card, index)=>{

                return<TableStatusCard key={index} icon={card.icon} tag={card.tag} count={card.count} color={card.theme}/>
            })
        }
      
    </div>}
    <div className='flex gap-2 justify-between items-center p-3 flex-wrap'>
      <SearchBox/>
      
      <button className='border-red-400 hover:bg-red-400 hover:text-white border-2 px-4 py-2 rounded-md text-red-400 flex items-center justify-center gap-2'>
      <i className="ri-download-2-line"></i>
        Export
        <i className="ri-arrow-drop-down-line"></i>
        </button>
    </div>
    <div className='overflow-auto'>

    <OrderTable data={orderData} filter={name}/>
    </div>
    </div>
  )
}

export default OrderList