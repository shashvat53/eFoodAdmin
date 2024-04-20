import React from 'react'
import Toggle from './Toggle'
const Notification = () => {
    const arr =[
        'https://efood-admin.6amtech.com/storage/app/public/banner/2023-11-07-654a2d3043188.png',
        'https://efood-admin.6amtech.com/storage/app/public/banner/2023-11-07-654a2b6723fb3.png ',
        'https://efood-admin.6amtech.com/storage/app/public/banner/2023-11-07-654a2b25d0103.png',
        'https://efood-admin.6amtech.com/storage/app/public/banner/2023-11-07-654a2add22528.png',
        'https://efood-admin.6amtech.com/storage/app/public/banner/2021-02-26-60388d186e180.png',
        'https://efood-admin.6amtech.com/storage/app/public/banner/2023-11-07-654a2add22528.png',
        'https://efood-admin.6amtech.com/storage/app/public/banner/2023-11-07-654a2d3043188.png',
        'https://efood-admin.6amtech.com/storage/app/public/banner/2023-11-07-654a2b6723fb3.png ',
        'https://efood-admin.6amtech.com/storage/app/public/banner/2023-11-07-654a2b25d0103.png',
        'https://efood-admin.6amtech.com/storage/app/public/banner/2023-11-07-654a2add22528.png',
        'https://efood-admin.6amtech.com/storage/app/public/banner/2021-02-26-60388d186e180.png',
        'https://efood-admin.6amtech.com/storage/app/public/banner/2023-11-07-654a2add22528.png',
        'https://efood-admin.6amtech.com/storage/app/public/banner/2023-11-07-654a2d3043188.png',
        'https://efood-admin.6amtech.com/storage/app/public/banner/2023-11-07-654a2b6723fb3.png ',
        'https://efood-admin.6amtech.com/storage/app/public/banner/2023-11-07-654a2b25d0103.png',
        'https://efood-admin.6amtech.com/storage/app/public/banner/2023-11-07-654a2add22528.png',
    ]
  return (
    <div>
            <div className='p-5'>
                <div className='py-4 flex items-center gap-2'>
                <i class="ri-notification-3-fill text-2xl"></i>
                    <h1 className='font-medium text-2xl'>Send Notification</h1>
                </div>
                <form action="">
                    <div className='w-full md:flex  min-h-fit rounded-xl overflow-hidden border shadow-lg pb-4'>
                        <div className='md:w-1/2 w-full h-1/2  md:h-full p-5'>
                            <label htmlFor="Title"> Title <span className='text-red-500'> *</span></label>
                            <input type="text" placeholder='New notification' className='w-full px-2 py-2 mt-2 rounded-md border mb-4' />

                            <label htmlFor="Item Type">Description <span className='text-red-500'> *</span></label>
                            <textarea className='w-full h-20 border rounded-md mt-2 p-2' placeholder='Description....'></textarea>

                        </div>
                        <div className='md:w-1/2 w-full h-1/2  md:h-full p-5 flex flex-col items-center justify-center'>
                            <p className='text-center'>Notification Image <span className='text-red-500'> *  ( Ratio 3:1 )</span> </p>
                            <label htmlFor="ProfileImage">
                                <div>
                                    <input type="file" id='ProfileImage' accept='image/*' className='hidden' />
                                    <img className='mt-5' src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/upload_img2.png" alt="" />
                                </div>
                            </label>

                            <div className='mt-10 md:mt-24 w-full flex items-center justify-center'>
                                <button className='px-10 border-none rounded py-3 bg-gray-300'>Reset</button>
                                <button className='px-10 border-none rounded ml-4  py-3 bg-[#E35F4E] text-white'>Send notification</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className='w-full h-[15vh] px-5 overflow-hidden'>
                <div className='w-full h-full bg-white border rounded-t-xl flex items-center justify-between px-5'>
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold'>Notification Table </p>
                        <span className='bg-gray-200 px-[8px] rounded-full font-bold'><small>16</small></span>
                    </div>
                    <div>
                        <input type="text" placeholder='Search by Title' className='px-4 border rounded ml-4  py-2 outline-none' />
                        <button className='px-8 border-none rounded ml-4  py-2 bg-[#E35F4E] text-white'>Search</button>
                    </div>
                </div>
            </div>
            <div className='w-full h-[180vh]  px-5 overflow-auto '>
                <div className='w-full h-full '>
                    <div className='flex-shrink-0 w-auto h-[90%]  border shadow-md rounded-b-xl overflow-auto flex'>
                        <div className='w-[20vw] flex-shrink-0 md:w-[7vw] h-full '>
                            <div className='w-full h-[5%] mb-5 bg-gray-100 flex items-center justify-center'>
                                <p className='font-semibold'>SL</p>
                            </div>
                            <div className='w-full  h-[90%] flex items-center justify-around flex-col'>
                                <div className='w-full h-12 flex items-center justify-center'>
                                    <p className='font-semibold'>1</p>
                                </div>
                                <div className='w-full h-12 flex items-center justify-center'>
                                    <p className='font-semibold'>2</p>
                                </div>
                                <div className='w-full h-12 flex items-center justify-center'>
                                    <p className='font-semibold'>3</p>
                                </div>
                                <div className='w-full h-12 flex items-center justify-center'>
                                    <p className='font-semibold'>4</p>
                                </div>
                                <div className='w-full h-12 flex items-center justify-center'>
                                    <p className='font-semibold'>5</p>
                                </div>
                                <div className='w-full h-12  flex items-center justify-center'>
                                    <p className='font-semibold'>6</p>
                                </div>
                                <div className='w-full h-12  flex items-center justify-center'>
                                    <p className='font-semibold'>7</p>
                                </div>
                                <div className='w-full h-12  flex items-center justify-center'>
                                    <p className='font-semibold'>8</p>
                                </div>
                                <div className='w-full h-12  flex items-center justify-center'>
                                    <p className='font-semibold'>9</p>
                                </div>
                                <div className='w-full h-12  flex items-center justify-center'>
                                    <p className='font-semibold'>10</p>
                                </div>
                                <div className='w-full h-12  flex items-center justify-center'>
                                    <p className='font-semibold'>11</p>
                                </div>
                                <div className='w-full h-12  flex items-center justify-center'>
                                    <p className='font-semibold'>12</p>
                                </div>
                                <div className='w-full h-12  flex items-center justify-center'>
                                    <p className='font-semibold'>13</p>
                                </div>
                                <div className='w-full h-12  flex items-center justify-center'>
                                    <p className='font-semibold'>14</p>
                                </div>
                                <div className='w-full h-12  flex items-center justify-center'>
                                    <p className='font-semibold'>15</p>
                                </div>
                                <div className='w-full h-12  flex items-center justify-center'>
                                    <p className='font-semibold'>16</p>
                                </div>
                            </div>

                        </div>
                        <div className='w-1/2 flex-shrink-0 md:w-[21vw] h-full '>
                            <div className='w-full h-[5%] mb-5 bg-gray-100 flex items-center justify-center'>
                                <p className='font-semibold'>Banner Image</p>
                            </div>
                           <div className='w-full h-[90%] flex flex-col'>
                           {arr.map(item => {
                                return (
                                    <div className='w-[70%] h-12 m-auto bg-red-400 rounded-xl overflow-hidden'>
                                        <img className='w-full h-full'  src={item} alt="" />
                                    </div>
                                )
                            })}
                           </div>
                        </div>
                        <div className='w-1/2 flex-shrink-0 md:w-[21vw] h-full '>
                            <div className='w-full h-[5%] mb-5 bg-gray-100 flex items-center justify-center'>
                                <p className='font-semibold'>Title</p>
                            </div>
                            <div className='w-full  h-[90%] flex items-center justify-around flex-col'>
                                <div className='w-full h-12 flex items-center justify-start px-4'>
                                    <p className=''>Offer on every order</p>
                                </div>
                                <div className='w-full h-12 flex items-center justify-start px-4'>
                                    <p className=''>Up to 20% off</p>
                                </div>
                                <div className='w-full h-12 flex items-center justify-start px-4'>
                                    <p className=''>Product: Beef Spicy Burg...</p>
                                </div>
                                <div className='w-full h-12 flex items-center justify-start px-4'>
                                    <p className=''>Sepecial offer (Up to 50% Off)</p>
                                </div>
                                <div className='w-full h-12 flex items-center justify-start px-4'>
                                    <p className=''>Special offer</p>
                                </div>
                                <div className='w-full h-12 flex items-center justify-start px-4'>
                                    <p className=''>Best reviewed</p>
                                </div>
                                <div className='w-full h-12  flex items-center justify-start px-4'>
                                    <p className=''>Banner 3</p>
                                </div>
                                <div className='w-full h-12 flex items-center justify-start px-4'>
                                    <p className=''>Product: Beef Spicy Burg...</p>
                                </div>
                                <div className='w-full h-12 flex items-center justify-start px-4'>
                                    <p className=''>Category: Hot Item</p>
                                </div>
                                <div className='w-full h-12 flex items-center justify-start px-4'>
                                    <p className=''>	Product: Italian Spicy P...</p>
                                </div>
                                <div className='w-full h-12  flex items-center justify-start px-4'>
                                    <p className=''>Product: Grilled Cheese ...</p>
                                </div>
                                <div className='w-full h-12 flex items-center justify-start px-4'>
                                    <p className=''>Category: Set Menu</p>
                                </div>
                                <div className='w-full h-12 flex items-center justify-start px-4'>
                                    <p className=''>Product: Beef Spicy Burg...</p>
                                </div>
                                <div className='w-full h-12 flex items-center justify-start px-4'>
                                    <p className=''>Category: Hot Item</p>
                                </div>
                                
                                <div className='w-full h-12  flex items-center justify-start px-4'>
                                    <p className=''>Product: Grilled Cheese ...</p>
                                </div>
                                <div className='w-full h-12 flex items-center justify-start px-4'>
                                    <p className=''>Product: Beef Spicy Burg...</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/2 flex-shrink-0 md:w-[21.1vw] h-full'>
                            <div className='w-full h-[5%] mb-5 bg-gray-100 flex items-center justify-center'>
                                <p className='font-semibold'>Banner Type</p>
                            </div>
                            <div className='w-full  h-[90%] flex items-center justify-around flex-col'>
                                <div className='w-full h-12 flex items-center justify-start px-4'>
                                    <p className=''>Category: Pizza</p>
                                </div>
                                <div className='w-full h-12 flex items-center justify-start px-4'>
                                    <p className=''>Category: Hot Item</p>
                                </div>
                                <div className='w-full h-12  flex items-center justify-start px-4'>
                                    <p className=''>Product: Grilled Cheese ...</p>
                                </div>
                                <div className='w-full h-12 flex items-center justify-start px-4'>
                                    <p className=''>Product: Beef Spicy Burg...</p>
                                </div>
                                <div className='w-full h-12 flex items-center justify-start px-4'>
                                    <p className=''>Category: Hot Item</p>
                                </div>
                                <div className='w-full h-12  flex items-center justify-start px-4'>
                                    <p className=''>Product: Grilled Cheese ...</p>
                                </div>
                                <div className='w-full h-12 flex items-center justify-start px-4'>
                                    <p className=''>Category: Pizza</p>
                                </div>
                                <div className='w-full h-12 flex items-center justify-start px-4'>
                                    <p className=''>Category: Hot Item</p>
                                </div>
                                <div className='w-full h-12 flex items-center justify-start px-4'>
                                    <p className=''>	Product: Italian Spicy P...</p>
                                </div>
                                <div className='w-full h-12  flex items-center justify-start px-4'>
                                    <p className=''>Product: Grilled Cheese ...</p>
                                </div>
                                <div className='w-full h-12 flex items-center justify-start px-4'>
                                    <p className=''>Category: Hot Item</p>
                                </div>
                                <div className='w-full h-12 flex items-center justify-start px-4'>
                                    <p className=''>Category: Set Menu</p>
                                </div>
                                <div className='w-full h-12 flex items-center justify-start px-4'>
                                    <p className=''>Product: Beef Spicy Burg...</p>
                                </div>
                                <div className='w-full h-12 flex items-center justify-start px-4'>
                                    <p className=''>Category: Hot Item</p>
                                </div>

                                <div className='w-full h-12  flex items-center justify-start px-4'>
                                    <p className=''>Product: Grilled Cheese ...</p>
                                </div>
                                <div className='w-full h-12 flex items-center justify-start px-4'>
                                    <p className=''>Product: Beef Spicy Burg...</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[20vw] flex-shrink-0 md:w-[8vw] h-full'>
                            <div className='w-full h-[5%] mb-5 bg-gray-100 flex items-center justify-center'>
                                <p className='font-semibold'>Status</p>
                            </div>
                            <div className='w-full h-[90%] flex flex-col items-center justify-around'>
                            <Toggle/>
                            <Toggle/>
                            <Toggle/>
                            <Toggle/>
                            <Toggle/>
                            <Toggle/>
                            <Toggle/>
                            <Toggle/>
                            <Toggle/>
                            <Toggle/>
                            <Toggle/>
                            <Toggle/>
                            <Toggle/>
                            <Toggle/>
                            <Toggle/>
                            <Toggle/>
                            </div>
                        </div>
                        <div className='w-[30vw] flex-shrink-0 md:w-[10vw] h-full'>
                            <div className='w-full h-[5%] mb-5 bg-gray-100 flex items-center justify-center'>
                                <p className='font-semibold'>Action</p>
                            </div>
                            <div className='flex w-full h-[90%]  items-center justify-around flex-col'>
                                <div className='flex gap-4'>
                                <i class="ri-pencil-fill px-2 py-1 cursor-pointer hover:bg-blue-500  hover:text-white border rounded border-blue-500 text-blue-500"></i>
                                <i class="ri-delete-bin-6-line px-2 py-1 cursor-pointer hover:bg-red-500 text-red-500 hover:text-white font-bold border rounded border-red-500"></i>
                                </div>
                                <div className='flex gap-4'>
                                <i class="ri-pencil-fill px-2 py-1 cursor-pointer hover:bg-blue-500  hover:text-white border rounded border-blue-500 text-blue-500"></i>
                                <i class="ri-delete-bin-6-line px-2 py-1 cursor-pointer hover:bg-red-500 text-red-500 hover:text-white font-bold border rounded border-red-500"></i>
                                </div>
                                <div className='flex gap-4'>
                                <i class="ri-pencil-fill px-2 py-1 cursor-pointer hover:bg-blue-500  hover:text-white border rounded border-blue-500 text-blue-500"></i>
                                <i class="ri-delete-bin-6-line px-2 py-1 cursor-pointer hover:bg-red-500 text-red-500 hover:text-white font-bold border rounded border-red-500"></i>
                                </div>
                                <div className='flex gap-4'>
                                <i class="ri-pencil-fill px-2 py-1 hover:bg-blue-500 cursor-pointer hover:text-white border rounded border-blue-500 text-blue-500"></i>
                                <i class="ri-delete-bin-6-line px-2 py-1 hover:bg-red-500 cursor-pointer text-red-500 hover:text-white font-bold border rounded border-red-500"></i>
                                </div>
                                <div className='flex gap-4'>
                                <i class="ri-pencil-fill px-2 py-1 hover:bg-blue-500 cursor-pointer  hover:text-white border rounded border-blue-500 text-blue-500"></i>
                                <i class="ri-delete-bin-6-line px-2 py-1 hover:bg-red-500 text-red-500 cursor-pointer hover:text-white font-bold border rounded border-red-500"></i>
                                </div>
                                <div className='flex gap-4'>
                                <i class="ri-pencil-fill px-2 py-1 hover:bg-blue-500 cursor-pointer  hover:text-white border rounded border-blue-500 text-blue-500"></i>
                                <i class="ri-delete-bin-6-line px-2 py-1 hover:bg-red-500 text-red-500 cursor-pointer hover:text-white font-bold border rounded border-red-500"></i>
                                </div>
                                <div className='flex gap-4'>
                                <i class="ri-pencil-fill px-2 py-1 hover:bg-blue-500 cursor-pointer  hover:text-white border rounded border-blue-500 text-blue-500"></i>
                                <i class="ri-delete-bin-6-line px-2 py-1 hover:bg-red-500 text-red-500 cursor-pointer hover:text-white font-bold border rounded border-red-500"></i>
                                </div>
                                <div className='flex gap-4'>
                                <i class="ri-pencil-fill px-2 py-1 hover:bg-blue-500 cursor-pointer  hover:text-white border rounded border-blue-500 text-blue-500"></i>
                                <i class="ri-delete-bin-6-line px-2 py-1 hover:bg-red-500 text-red-500 cursor-pointer hover:text-white font-bold border rounded border-red-500"></i>
                                </div>
                                <div className='flex gap-4'>
                                <i class="ri-pencil-fill px-2 py-1 hover:bg-blue-500 cursor-pointer  hover:text-white border rounded border-blue-500 text-blue-500"></i>
                                <i class="ri-delete-bin-6-line px-2 py-1 hover:bg-red-500 text-red-500 cursor-pointer hover:text-white font-bold border rounded border-red-500"></i>
                                </div>
                                <div className='flex gap-4'>
                                <i class="ri-pencil-fill px-2 py-1 hover:bg-blue-500 cursor-pointer  hover:text-white border rounded border-blue-500 text-blue-500"></i>
                                <i class="ri-delete-bin-6-line px-2 py-1 hover:bg-red-500 text-red-500 cursor-pointer hover:text-white font-bold border rounded border-red-500"></i>
                                </div>
                                <div className='flex gap-4'>
                                <i class="ri-pencil-fill px-2 py-1 hover:bg-blue-500 cursor-pointer  hover:text-white border rounded border-blue-500 text-blue-500"></i>
                                <i class="ri-delete-bin-6-line px-2 py-1 hover:bg-red-500 text-red-500 cursor-pointer hover:text-white font-bold border rounded border-red-500"></i>
                                </div>
                                <div className='flex gap-4'>
                                <i class="ri-pencil-fill px-2 py-1 hover:bg-blue-500 cursor-pointer  hover:text-white border rounded border-blue-500 text-blue-500"></i>
                                <i class="ri-delete-bin-6-line px-2 py-1 hover:bg-red-500 text-red-500 cursor-pointer hover:text-white font-bold border rounded border-red-500"></i>
                                </div>
                                <div className='flex gap-4'>
                                <i class="ri-pencil-fill px-2 py-1 hover:bg-blue-500 cursor-pointer  hover:text-white border rounded border-blue-500 text-blue-500"></i>
                                <i class="ri-delete-bin-6-line px-2 py-1 hover:bg-red-500 text-red-500 cursor-pointer hover:text-white font-bold border rounded border-red-500"></i>
                                </div>
                                <div className='flex gap-4'>
                                <i class="ri-pencil-fill px-2 py-1 hover:bg-blue-500 cursor-pointer  hover:text-white border rounded border-blue-500 text-blue-500"></i>
                                <i class="ri-delete-bin-6-line px-2 py-1 hover:bg-red-500 text-red-500 cursor-pointer hover:text-white font-bold border rounded border-red-500"></i>
                                </div>
                                <div className='flex gap-4'>
                                <i class="ri-pencil-fill px-2 py-1 hover:bg-blue-500 cursor-pointer  hover:text-white border rounded border-blue-500 text-blue-500"></i>
                                <i class="ri-delete-bin-6-line px-2 py-1 hover:bg-red-500 text-red-500 cursor-pointer hover:text-white font-bold border rounded border-red-500"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
  )
}

export default Notification