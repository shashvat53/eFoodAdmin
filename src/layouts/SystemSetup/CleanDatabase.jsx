import React from 'react'

const CleanDatabase = () => {
    const arr = [
        {data:"Add Ons", number:4},
        {data:"Addon Settings", number:7},
        {data:"Messages", number:12},
        {data:"Branch Promotions", number:8},
        {data:"Banners", number:14},
        {data:"Coupons", number:6},
        {data:"Chief Branch", number:13},
        {data:"Add Ons", number:4},
        {data:"Delivery Histories", number:32},
        {data:"Delivery Man", number:9},
        {data:"Email Templates", number:4},
        {data:"Guest Users", number:20},
        {data:"Offline Payment", number:42},
        {data:"NewLetters", number:18},
        {data:"Notifications", number:10},
        {data:"Online Payment", number:16},
        {data:"Product", number:47},
        {data:"Table", number:22},
        {data:"Tags", number:12},
        {data:"Social Medias", number:17},
        {data:"Order transactions", number:24},
        {data:"Product Tag", number:6},
        {data:"Table Orders", number:2},
        {data:"Reviews", number:10},
        {data:"Track DeliveryMan", number:20},
        {data:"Translations", number:33},
    ]
    return (
        <div className='w-full h-fit'>
            <div className='w-full h-16 border-l-4 flex items-center justify-start px-5 border border-red-400 rounded bg-red-50'>
                <p><b>Note</b> :This page contains sensitive information.Make sure before changing.</p>
            </div>
            <div className='w-full p-5  mt-10'>
                <form action="">
                    <div className='w-full h-fit grid gap-5 md:gap-8 grid-flow-row md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1'>
                    {arr.map((item)=>(
                        <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox"  className='h-5 w-5 '/>
                            <p>{item.data}</p>
                        </div>
                        <span className='px-3 bg-gray-500 text-white rounded-full'>{item.number}</span>
                    </div>
                    ))}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CleanDatabase