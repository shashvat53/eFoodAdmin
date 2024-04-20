import React, { useEffect, useState } from 'react'
import FilterCard from '../../components/Table-order/FilterCard'
import TableStatusCard from '../../components/Table-order/TableStatusCard'
import SearchBox from '../../components/ui/SearchBox'
import Table from '../../components/ui/Table'
import { useParams } from 'react-router-dom'
import OrderDetailsJson from '../../components/json/OrderDetailsJson'

const AllTableOrder = () => {
  const [orderData, setOrderData] = useState(OrderDetailsJson())
  const {name} = useParams()
  useEffect(()=>{
    // console.log(orderData);
  },[])

  const title = {
    All:'All Table Orders',
    Confirmed:'Confirmed Table Orders',
    Cooking:'Cooking Table Orders',
    ReadyForServe:'Ready For Serve Table Orders',
    Completed:'Completed Table Orders',
    Canceled:'Canceled Table Orders',
    OnTable:'On Table Table Orders',
  }



  return (
    <div className='shadow-sm overflow-hidden py-6 mb-4'>
      <h1 className='text-2xl font-semibold pl-3'><i className="ri-restaurant-line text-red-400 font-semibold"></i> {title[name]}</h1>
    <FilterCard/>
    { name === 'All' && <div className='grid-flow-row grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-3 p-3   '>
      <TableStatusCard icon={'ri-check-double-line'} tag={'Confirmed'} count={6} color={'text-green-500 border-green-500'}/>
      <TableStatusCard icon={'ri-timer-flash-line'} tag={'Cooking'} count={12} color={'text-yellow-500 border-yellow-500'}/>
      <TableStatusCard icon={'ri-verified-badge-line'} tag={'Ready to server'} count={12} color={'text-green-500 border-green-500 '}/>
      <TableStatusCard icon={'ri-restaurant-line'} tag={'Completed'} count={2} color={'text-blue-500 border-blue-500'}/>
      <TableStatusCard icon={'ri-close-line'} tag={'Canceled'} count={1} color={'text-red-500 border-red-500'}/>
      <TableStatusCard icon={'ri-knife-line'} tag={'Running'} count={5} color={'text-yellow-500 border-yellow-500'}/>
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

    <Table data={orderData} filter={name}/>
    </div>
    </div>
  )
}

export default AllTableOrder