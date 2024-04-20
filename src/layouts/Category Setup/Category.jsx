import React, { useEffect, useState } from 'react'
import CategoryTable from '../../components/ui/table/CategoryTable'
import CategoryJson from '../../components/json/CategoryJson'
import { useForm } from 'react-hook-form'
import { getAllCategory, insertCategory } from '../../helper/Category'
import { toast } from 'react-toastify'

const Category = () => {
    
    const [allCategory, setAllCategory] = useState([])
    const {reset, register, handleSubmit} = useForm()
    const arr =[
        'https://efood-admin.6amtech.com/storage/app/public/banner/2023-11-07-654a2d3043188.png',
        'https://efood-admin.6amtech.com/storage/app/public/banner/2023-11-07-654a2b6723fb3.png ',
        'https://efood-admin.6amtech.com/storage/app/public/banner/2023-11-07-654a2b25d0103.png',
        'https://efood-admin.6amtech.com/storage/app/public/banner/2023-11-07-654a2add22528.png',
        'https://efood-admin.6amtech.com/storage/app/public/banner/2021-02-26-60388d186e180.png',
        'https://efood-admin.6amtech.com/storage/app/public/banner/2023-11-07-654a2add22528.png',
    ]


const fetchCategory =async ()=>{
    try {
        const res = await getAllCategory()
        console.log(res?.data?.foodCategory,"7777")
        setAllCategory(res?.data?.foodCategory)
    } catch (error) {
        console.log(error)
    }
}


useEffect(()=>{
    fetchCategory()
},[])

    const onSubmit =async(data) =>{
        try {
            const res =await insertCategory(data)
            toast.success("Category inserted successfully...")
            reset()
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='overflow-y-hidden px-5'>
            <div className='py-5'>
                <div className='py-4 flex items-center gap-2'>
                    <img className='w-6' src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/banner.png" alt="" />
                    <h1 className='font-medium text-2xl'>Category Setup</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} action="">
                    <div className='w-full md:flex flex-col min-h-fit rounded-xl overflow-hidden border shadow-lg pb-4'>
                        <div className=' w-full h-1/2  md:h-full p-5'>
                            <label htmlFor="Title"> Name (EN) <span className='text-red-500'> *</span></label>
                            <input type="text" placeholder='New banner' className='w-full px-2 py-2 mt-2 rounded-md border mb-4 ' {...register('foodCategoryName')}/>

                            

                        </div >
                       {false && <div className=' w-full grid grid-flow-row md:grid-cols-2 sm:grid-cols-1'>
                        <div className=' w-full h-1/2  md:h-full p-5 flex flex-col items-center justify-center'>
                            <p className='text-center'>Category Image <span className='text-red-500'> *  ( Ratio 1:1 )</span> </p>
                            <label htmlFor="ProfileImage">
                                <div>
                                    <input type="file" id='ProfileImage' accept='image/*' className='hidden' />
                                    <img className='mt-5' src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/upload_img2.png" alt="" />
                                </div>
                            </label>

                        </div>
                        <div className=' w-full h-1/2  md:h-full p-5 flex flex-col items-center justify-center'>
                            <p className='text-center'>Banner Image <span className='text-red-500'> *  ( Ratio 8:1 )</span> </p>
                            <label htmlFor="ProfileImage">
                                <div>
                                    <input type="file" id='ProfileImage' accept='image/*' className='hidden' />
                                    <img className='mt-5' src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/upload_img2.png" alt="" />
                                </div>
                            </label>

                            
                        </div>
                        
                        </div>}
                        <div className='mt-10 md:mt-24 w-full flex items-center justify-center'>
                                <button className='px-10 border-none rounded py-3 bg-gray-300'>Reset</button>
                                <button className='px-10 border-none rounded ml-4  py-3 bg-[#E35F4E] text-white'>Submit</button>
                            </div>
                        
                    </div>
                </form>
            </div>
            <div className='w-full h-[15vh]  overflow-hidden '>
                <div className='w-full h-full bg-white border rounded-t-xl flex items-center justify-between px-5'>
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold'>Category Table</p>
                        <span className='bg-gray-200 px-[8px] rounded-full font-bold'><small>6</small></span>
                    </div>
                    <div>
                        <input type="text" placeholder='Search by Title' className='px-4 border rounded ml-4  py-2 outline-none' />
                        <button type="submit" className='px-8 border-none rounded ml-4  py-2 bg-[#E35F4E] text-white'>Search</button>
                    </div>
                </div>
            </div>
            <div className='overflow-y-auto '>
                {allCategory && <CategoryTable  allCategory={allCategory}/>}
            </div>
        </div>
    )
}

export default Category