import React from 'react'

const TableStatusCard = ({icon, tag, count, color}) => {
  return (
    <div className='bg-gray-100 cursor-pointer shadow-sm hover:shadow-lg flex gap-8 p-3 py-4 rounded-md w-full justify-between'>
        <span className=''>
        <i className={`${icon} ${color} p-2  border-[1px] rounded-full font-bold mr-3`}></i>
        <span>{tag}</span>
        </span>
        <span className={`${color} font-bold text-lg`}>{count}</span>
    </div>
  )
}

export default TableStatusCard