import React, { useEffect, useState } from 'react'
import image from '../../assets/react.svg'
import graph from '../../assets/graph.svg'
import graph1 from '../../assets/graph1.svg'
import instance from '../../config/Axios'

const Dashboard = () => {

    const [getOrder, setgetOrder] = useState()

    const fetchAllOrder = async()=>{
        try {
            const {data} = await instance.get('/order');
            console.log(data)
        } catch (error) {
            
        }
    }

    useEffect(() => {
      fetchAllOrder()
    
      return () => {
        
      }
    }, [])
    
  
    return (
        <div className='w-full min-h-screen p-5'>
            <h1 className='font-bold text-red-700'> Welcome, Admin</h1>
            <p className='text-gray-600'>Monitor your business analytics and statistics</p>
            <div className='w-full flex flex-col justify-between h-fit mt-5 rounded-xl p-5 gap-5 border drop-shadow-md shadow-lg'>
                <div className='flex items-center w-full justify-between'>
                    <div className='flex items-center gap-2'>
                        <img className='w-6' src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/business_analytics.png" alt="" />
                        <h1 className='text-sm md:text-lg'>Business Analytics</h1>
                    </div>
                    <div>
                        <select className="border md:text-sm text-xs border-red-300 bg-gray-50 rounded-md p-2">
                            <option value="Option 1">This Month's Statistics</option>
                            <option value="Option 2">Overall Statistics</option>
                            <option value="Option 3">Today's Statistics</option>
                        </select>
                    </div>
                </div>
                <div className='w-full grid-flow-row grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 p-3 items-center justify-center gap-2 py-2'>
                    <div className='w-full h-36 rounded-lg relative border px-8 py-11'>
                        <h1 className='font-semibold mb-1'>Pending</h1>
                        <h1 className='font-bold text-2xl'>11</h1>
                        <img className='w-8 absolute top-5 right-5' src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/pending.png" alt="" />
                    </div>
                    <div className='w-full h-36 rounded-lg relative bg-white border px-8 py-11'>
                        <h1 className='font-semibold mb-1'>Confirmed</h1>
                        <h1 className='font-bold text-2xl'>11</h1>
                        <img className='w-8 absolute top-5 right-5' src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/confirmed.png" alt="" />
                    </div>
                    <div className='w-full h-36 rounded-lg relative bg-white border px-8 py-11'>
                        <h1 className='font-semibold mb-1'>Processing</h1>
                        <h1 className='font-bold text-2xl'>2</h1>
                        <img className='w-8 absolute top-5 right-5' src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/packaging.png" alt="" />
                    </div>
                    <div className='w-full h-36 rounded-lg relative bg-white border px-8 py-11'>
                        <h1 className='font-semibold mb-1'>pending</h1>
                        <h1 className='font-bold text-2xl'>0</h1>
                        <img className='w-8 absolute top-5 right-5' src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/out_for_delivery.png" alt="" />
                    </div>
                </div>
                <div className='grid-flow-row grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 p-3 items-center justify-center gap-4 py-2'>
                    <div className='w-full flex items-center justify-between h-20 rounded-lg relative bg-gray-100 px-5'>
                        <div className='flex items-center gap-2'>
                            <img className='w-8' src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/delivered.png" alt="" />
                            <h1 className='font-semibold text-gray-600'>Out for delivery</h1>
                        </div>
                        <h2 className='font-semibold text-blue-500'>0</h2>
                    </div>
                    <div className='w-full flex items-center justify-between h-20 rounded-lg relative bg-gray-100 px-5'>
                        <div className='flex items-center gap-2'>
                            <img className='w-8' src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/canceled.png" alt="" />
                            <h1 className='font-semibold text-gray-600'>Canceled</h1>
                        </div>
                        <h2 className='font-semibold text-red-500'>1</h2>
                    </div>
                    <div className='w-full flex items-center justify-between h-20 rounded-lg relative bg-gray-100 px-5'>
                        <div className='flex items-center gap-2'>
                            <img className='w-8' src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/returned.png" alt="" />
                            <h1 className='font-semibold text-gray-600'>Returned</h1>
                        </div>
                        <h2 className='font-semibold text-blue-500'>1</h2>
                    </div>
                    <div className='w-full flex items-center justify-between h-20 rounded-lg relative bg-gray-100 px-5'>
                        <div className='flex items-center gap-2'>
                            <img className='w-8' src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/failed_to_deliver.png" alt="" />
                            <h1 className='font-semibold text-gray-600'>Failed To Deliver</h1>
                        </div>
                        <h2 className='font-semibold text-red-500'>0</h2>
                    </div>

                </div>
            </div>
            <div className='w-full flex flex-col gap-5 md:flex-row mih-h-fit mt-5'>
                <div className='md:w-[75vw] h-full gap-5 flex flex-col '>
                    <div className='w-full min-h-fit  rounded-xl drop-shadow-md shadow-lg p-5'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <img className='md:w-8 w-4' src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/earning_statistics.png" alt="" />
                                <h1 className='font-semibold text-sm md:text-xl'>Order statistics</h1>
                            </div>
                            <div className='w-[60%] flex gap-1 md:w-[27%]  px-1 rounded-md  md:py-2 py-2 border items-center justify-center'>
                                <button className='text-[10px] md:text-sm bg-red-950 p-1 text-white rounded'>This Year</button>
                                <button className='text-[10px] md:text-sm bg-green-950 p-1 text-white rounded'>This Month</button>
                                <button className='text-[10px] md:text-sm bg-blue-950 p-1 text-white rounded'>This Weak</button>
                            </div>
                        </div>
                        <div className='w-full h-fit md:h-[49vh] mt-5'>
                            <img className='w-full h-full ' src={graph} alt="" />
                        </div>
                    </div>
                    <div className='w-full min-h-fit  rounded-xl drop-shadow-md shadow-lg p-5'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <img className='md:w-8 w-4' src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/earning_statistics.png" alt="" />
                                <h1 className='font-semibold text-sm md:text-xl'>Order statistics</h1>
                            </div>
                            <div className='w-[60%] flex gap-1 md:w-[27%]  px-1 rounded-md  md:py-2 py-2 border items-center justify-center'>
                                <button className='text-[10px] md:text-sm bg-red-950 p-1 text-white rounded'>This Year</button>
                                <button className='text-[10px] md:text-sm bg-green-950 p-1 text-white rounded'>This Month</button>
                                <button className='text-[10px] md:text-sm bg-blue-950 p-1 text-white rounded'>This Weak</button>
                            </div>
                        </div>
                        <div className='w-full h-fit md:h-[49vh] mt-5'>
                            <img className='w-full h-full ' src={graph1} alt="" />
                        </div>
                    </div>
                </div>
                <div className='md:w-[25vw] h-fit gap-5 flex flex-col '>
                    <div className='w-full h-[54vh] py-7 rounded-xl drop-shadow-md border shadow-lg'>
                        <h1 className='text-center'>Order Status Statistics</h1>
                        <div className='flex items-center justify-center h-full w-full flex-col relative'>
                            <div className='w-full h-[20vh] md:h-[28vh] flex items-center justify-center relative mb-5'>
                                <img className='w-[250px] absolute top-0' src={image} alt="" />
                                <div className='flex flex-col'>
                                    <h1 className='font-bold text-center'>101</h1>
                                    <p>Orders</p>
                                </div>
                            </div>
                            <div className=''>

                                <div className='flex gap-5'>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-2 h-2 bg-red-300 rounded-full'></div>
                                        <p className='text-gray-600 text-sm'>Pending (35)</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-2 h-2 bg-red-800 rounded-full'></div>
                                        <p className='text-gray-600 text-sm'>Ongoing (35)</p>
                                    </div>
                                </div>
                                <div className='flex gap-5'>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                                        <p className='text-gray-600 text-sm'>Delivered (31)</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-2 h-2 bg-black rounded-full'></div>
                                        <p className='text-gray-600 text-sm'>Canceled (3)</p>
                                    </div>
                                </div>
                                <div className='flex gap-5'>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-2 h-2 bg-blue-700 rounded-full'></div>
                                        <p className='text-gray-600 text-sm'>Returned (2)</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-2 h-2 bg-red-600 rounded-full'></div>
                                        <p className='text-gray-600 text-sm'>Failed to deliver (2)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full min-h-fit py-5 rounded-xl drop-shadow-md border shadow-lg'>
                        <div className='flex justify-between px-5 border-b-2 py-4'>
                            <h1 className='font-bold'>Recent Orders</h1>
                            <h1 className='hover:text-blue-700 cursor-pointer hover:font-semibold'>View All</h1>
                        </div>
                        <div>
                            <div className='flex justify-between items-center px-5 mt-4'>
                                <div>
                                    <h1 className='font-semibold'>Order# 100111</h1>
                                    <p className='text-gray-600'>22-10-24, 12:03 PM</p>
                                </div>
                                <h1 className='text-orange-500'>Confirmed</h1>
                            </div>
                            <div className='flex justify-between items-center px-5 mt-4'>
                                <div>
                                    <h1 className='font-semibold'>Order# 100111</h1>
                                    <p className='text-gray-600'>22-10-24, 12:03 PM</p>
                                </div>
                                <h1 className='text-green-500'>Delivered</h1>
                            </div>
                            <div className='flex justify-between items-center px-5 mt-4'>
                                <div>
                                    <h1 className='font-semibold'>Order# 100111</h1>
                                    <p className='text-gray-600'>22-10-24, 12:03 PM</p>
                                </div>
                                <h1 className='text-red-500'>Pending</h1>
                            </div>
                            <div className='flex justify-between items-center px-5 mt-4'>
                                <div>
                                    <h1 className='font-semibold'>Order# 100111</h1>
                                    <p className='text-gray-600'>22-10-24, 12:03 PM</p>
                                </div>
                                <h1 className='text-orange-500'>Confirmed</h1>
                            </div>
                            <div className='flex justify-between items-center px-5 mt-4'>
                                <div>
                                    <h1 className='font-semibold'>Order# 100111</h1>
                                    <p className='text-gray-600'>22-10-24, 12:03 PM</p>
                                </div>
                                <h1 className='text-green-500'>Delivered</h1>
                            </div>
                            <div className='flex justify-between items-center px-5 mt-4'>
                                <div>
                                    <h1 className='font-semibold'>Order# 100111</h1>
                                    <p className='text-gray-600'>22-10-24, 12:03 PM</p>
                                </div>
                                <h1 className='text-red-500'>Pending</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-fit py-5 grid-flow-row grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 p-3 gap-5'>
                <div className='w-full h-fit py-5 border rounded-md drop-shadow-lg shadow-lg'>
                    <div className='flex justify-between px-5 border-b-2 py-4'>
                        <h1 className='font-bold'>Top Selling Products</h1>
                        <h1 className='hover:text-blue-700 cursor-pointer hover:font-semibold'>View All</h1>
                    </div>
                    <div>
                        <div className='flex justify-between items-center px-5 mt-4 cursor-pointer'>
                            <div className='flex gap-2 items-center '>
                                <div className='w-12 h-12 rounded-md bg-red-500 overflow-hidden '>
                                    <img className='w-full h-full object-cover' src="	https://efood-admin.6amtech.com/storage/app/public/product/2023-03-08-640971a60477f.png" alt="" />
                                </div>
                                <h1 className='w-24 line-clamp-1 hover:text-red-400 '>Ice Cream</h1>
                            </div>
                            <button className='bg-red-100 text-red-400 px-1 rounded'>sold :20</button>
                        </div>
                        <div className='flex justify-between items-center px-5 mt-4 cursor-pointer'>
                            <div className='flex gap-2 items-center '>
                                <div className='w-12 h-12 rounded-md bg-red-500 overflow-hidden '>
                                    <img className='w-full h-full object-cover' src="https://efood-admin.6amtech.com/storage/app/public/product/2021-02-26-6038903ac16c7.png" alt="" />
                                </div>
                                <h1 className='w-24 line-clamp-1 hover:text-red-400 '>Zinger & Pop </h1>
                            </div>
                            <button className='bg-red-100 text-red-400 px-1 rounded'>sold :20</button>
                        </div>
                        <div className='flex justify-between items-center px-5 mt-4 cursor-pointer'>
                            <div className='flex gap-2 items-center '>
                                <div className='w-12 h-12 rounded-md bg-red-500 overflow-hidden '>
                                    <img className='w-full h-full object-cover' src="https://efood-admin.6amtech.com/storage/app/public/product/2021-02-24-60360c3059cae.png" alt="" />
                                </div>
                                <h1 className='w-24 line-clamp-1 hover:text-red-400 '>Spicy Burger </h1>
                            </div>
                            <button className='bg-red-100 text-red-400 px-1 rounded'>sold :20</button>
                        </div>

                        <div className='flex justify-between items-center px-5 mt-4 cursor-pointer'>
                            <div className='flex gap-2 items-center '>
                                <div className='w-12 h-12 rounded-md bg-red-500 overflow-hidden '>
                                    <img className='w-full h-full object-cover' src="https://efood-admin.6amtech.com/storage/app/public/product/2021-02-26-6038935d27cb8.png" alt="" />
                                </div>
                                <h1 className='w-24 line-clamp-1 hover:text-red-400 '>Chizza Meal </h1>
                            </div>
                            <button className='bg-red-100 text-red-400 px-1 rounded'>sold :20</button>
                        </div>

                        <div className='flex justify-between items-center px-5 mt-4 cursor-pointer'>
                            <div className='flex gap-2 items-center '>
                                <div className='w-12 h-12 rounded-md bg-red-500 overflow-hidden '>
                                    <img className='w-full h-full object-cover' src="https://efood-admin.6amtech.com/storage/app/public/product/2021-02-26-6038911d8ddfa.png" alt="" />
                                </div>
                                <h1 className='w-24 line-clamp-1 hover:text-red-400 '>Popcorn Rice Bowl </h1>
                            </div>
                            <button className='bg-red-100 text-red-400 px-1 rounded'>sold :20</button>
                        </div>

                        <div className='flex justify-between items-center px-5 mt-4 cursor-pointer'>
                            <div className='flex gap-2 items-center '>
                                <div className='w-12 h-12 rounded-md bg-red-500 overflow-hidden '>
                                    <img className='w-full h-full object-cover' src="https://efood-admin.6amtech.com/storage/app/public/product/2021-02-13-6027c27beddb2.png" alt="" />
                                </div>
                                <h1 className='w-24 line-clamp-1 hover:text-red-400 '>Italian Spicy Pizza</h1>
                            </div>
                            <button className='bg-red-100 text-red-400 px-1 rounded'>sold :20</button>
                        </div>
                    </div>
                </div>
                <div className='w-full h-fit py-5 border rounded-md drop-shadow-lg shadow-lg'>
                    <div className='flex justify-between px-5 border-b-2 py-4'>
                        <h1 className='font-bold'>Top Selling Products</h1>
                        <h1 className='hover:text-blue-700 cursor-pointer hover:font-semibold'>View All</h1>
                    </div>
                    <div>
                        <div className='flex justify-between items-center px-5 mt-4 cursor-pointer'>
                            <div className='flex gap-2 items-center '>
                                <div className='w-12 h-12 rounded-md bg-red-500 overflow-hidden '>
                                    <img className='w-full h-full object-cover' src="	https://efood-admin.6amtech.com/storage/app/public/product/2023-03-08-640971a60477f.png" alt="" />
                                </div>
                                <h1 className='w-24 line-clamp-1 hover:text-red-400 '>Ice Cream</h1>
                            </div>
                            <button className='bg-red-100 text-red-400 px-1 rounded'>sold :20</button>
                        </div>
                        <div className='flex justify-between items-center px-5 mt-4 cursor-pointer'>
                            <div className='flex gap-2 items-center '>
                                <div className='w-12 h-12 rounded-md bg-red-500 overflow-hidden '>
                                    <img className='w-full h-full object-cover' src="https://efood-admin.6amtech.com/storage/app/public/product/2021-02-26-6038903ac16c7.png" alt="" />
                                </div>
                                <h1 className='w-24 line-clamp-1 hover:text-red-400 '>Zinger & Pop </h1>
                            </div>
                            <button className='bg-red-100 text-red-400 px-1 rounded'>sold :20</button>
                        </div>
                        <div className='flex justify-between items-center px-5 mt-4 cursor-pointer'>
                            <div className='flex gap-2 items-center '>
                                <div className='w-12 h-12 rounded-md bg-red-500 overflow-hidden '>
                                    <img className='w-full h-full object-cover' src="https://efood-admin.6amtech.com/storage/app/public/product/2021-02-24-60360c3059cae.png" alt="" />
                                </div>
                                <h1 className='w-24 line-clamp-1 hover:text-red-400 '>Spicy Burger </h1>
                            </div>
                            <button className='bg-red-100 text-red-400 px-1 rounded'>sold :20</button>
                        </div>

                        <div className='flex justify-between items-center px-5 mt-4 cursor-pointer'>
                            <div className='flex gap-2 items-center '>
                                <div className='w-12 h-12 rounded-md bg-red-500 overflow-hidden '>
                                    <img className='w-full h-full object-cover' src="https://efood-admin.6amtech.com/storage/app/public/product/2021-02-26-6038935d27cb8.png" alt="" />
                                </div>
                                <h1 className='w-24 line-clamp-1 hover:text-red-400 '>Chizza Meal </h1>
                            </div>
                            <button className='bg-red-100 text-red-400 px-1 rounded'>sold :20</button>
                        </div>

                        <div className='flex justify-between items-center px-5 mt-4 cursor-pointer'>
                            <div className='flex gap-2 items-center '>
                                <div className='w-12 h-12 rounded-md bg-red-500 overflow-hidden '>
                                    <img className='w-full h-full object-cover' src="https://efood-admin.6amtech.com/storage/app/public/product/2021-02-26-6038911d8ddfa.png" alt="" />
                                </div>
                                <h1 className='w-24 line-clamp-1 hover:text-red-400 '>Popcorn Rice Bowl </h1>
                            </div>
                            <button className='bg-red-100 text-red-400 px-1 rounded'>sold :20</button>
                        </div>

                        <div className='flex justify-between items-center px-5 mt-4 cursor-pointer'>
                            <div className='flex gap-2 items-center '>
                                <div className='w-12 h-12 rounded-md bg-red-500 overflow-hidden '>
                                    <img className='w-full h-full object-cover' src="https://efood-admin.6amtech.com/storage/app/public/product/2021-02-13-6027c27beddb2.png" alt="" />
                                </div>
                                <h1 className='w-24 line-clamp-1 hover:text-red-400 '>Italian Spicy Pizza</h1>
                            </div>
                            <button className='bg-red-100 text-red-400 px-1 rounded'>sold :20</button>
                        </div>
                    </div>
                </div>
                <div className='w-full h-fit py-5 border rounded-md drop-shadow-lg shadow-lg'>
                    <div className='flex justify-between px-5 border-b-2 py-4'>
                        <h1 className='font-bold'>Top Selling Products</h1>
                        <h1 className='hover:text-blue-700 cursor-pointer hover:font-semibold'>View All</h1>
                    </div>
                    <div>
                        <div className='flex justify-between items-center px-5 mt-4 cursor-pointer'>
                            <div className='flex gap-2 items-center '>
                                <div className='w-12 h-12 rounded-md bg-red-500 overflow-hidden '>
                                    <img className='w-full h-full object-cover' src="	https://efood-admin.6amtech.com/storage/app/public/product/2023-03-08-640971a60477f.png" alt="" />
                                </div>
                                <h1 className='w-24 line-clamp-1 hover:text-red-400 '>Ice Cream</h1>
                            </div>
                            <button className='bg-red-100 text-red-400 px-1 rounded'>sold :20</button>
                        </div>
                        <div className='flex justify-between items-center px-5 mt-4 cursor-pointer'>
                            <div className='flex gap-2 items-center '>
                                <div className='w-12 h-12 rounded-md bg-red-500 overflow-hidden '>
                                    <img className='w-full h-full object-cover' src="https://efood-admin.6amtech.com/storage/app/public/product/2021-02-26-6038903ac16c7.png" alt="" />
                                </div>
                                <h1 className='w-24 line-clamp-1 hover:text-red-400 '>Zinger & Pop </h1>
                            </div>
                            <button className='bg-red-100 text-red-400 px-1 rounded'>sold :20</button>
                        </div>
                        <div className='flex justify-between items-center px-5 mt-4 cursor-pointer'>
                            <div className='flex gap-2 items-center '>
                                <div className='w-12 h-12 rounded-md bg-red-500 overflow-hidden '>
                                    <img className='w-full h-full object-cover' src="https://efood-admin.6amtech.com/storage/app/public/product/2021-02-24-60360c3059cae.png" alt="" />
                                </div>
                                <h1 className='w-24 line-clamp-1 hover:text-red-400 '>Spicy Burger </h1>
                            </div>
                            <button className='bg-red-100 text-red-400 px-1 rounded'>sold :20</button>
                        </div>

                        <div className='flex justify-between items-center px-5 mt-4 cursor-pointer'>
                            <div className='flex gap-2 items-center '>
                                <div className='w-12 h-12 rounded-md bg-red-500 overflow-hidden '>
                                    <img className='w-full h-full object-cover' src="https://efood-admin.6amtech.com/storage/app/public/product/2021-02-26-6038935d27cb8.png" alt="" />
                                </div>
                                <h1 className='w-24 line-clamp-1 hover:text-red-400 '>Chizza Meal </h1>
                            </div>
                            <button className='bg-red-100 text-red-400 px-1 rounded'>sold :20</button>
                        </div>

                        <div className='flex justify-between items-center px-5 mt-4 cursor-pointer'>
                            <div className='flex gap-2 items-center '>
                                <div className='w-12 h-12 rounded-md bg-red-500 overflow-hidden '>
                                    <img className='w-full h-full object-cover' src="https://efood-admin.6amtech.com/storage/app/public/product/2021-02-26-6038911d8ddfa.png" alt="" />
                                </div>
                                <h1 className='w-24 line-clamp-1 hover:text-red-400 '>Popcorn Rice Bowl </h1>
                            </div>
                            <button className='bg-red-100 text-red-400 px-1 rounded'>sold :20</button>
                        </div>

                        <div className='flex justify-between items-center px-5 mt-4 cursor-pointer'>
                            <div className='flex gap-2 items-center '>
                                <div className='w-12 h-12 rounded-md bg-red-500 overflow-hidden '>
                                    <img className='w-full h-full object-cover' src="https://efood-admin.6amtech.com/storage/app/public/product/2021-02-13-6027c27beddb2.png" alt="" />
                                </div>
                                <h1 className='w-24 line-clamp-1 hover:text-red-400 '>Italian Spicy Pizza</h1>
                            </div>
                            <button className='bg-red-100 text-red-400 px-1 rounded'>sold :20</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard