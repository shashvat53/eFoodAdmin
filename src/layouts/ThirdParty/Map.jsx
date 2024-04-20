import React from 'react'
import Toggle from '../../components/layouts/Toggle'
// import Footer from '../components/layouts/Footer'

const Map = () => {
    return (
        <div className='w-full min-h-fit mt-5'>
            <form action="">
                <div className='w-full items-center rounded-md border shadow-md h-fit p-5 mb-40'>
                    <div className='w-full h-fit grid grid-flow-row md:gap-16 gap-2 grid-cols-1 md:grid-cols-2 items-center'>
                        <div className='flex w-full  py-2 items-center justify-between'>
                            <div className='w-full'>
                                <label htmlFor="Web Api Key" className="block mb-2">Map Api Server Key</label>
                                <textarea name="" id="" cols="30" rows="10" className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none h-20"></textarea>
                            </div>
                        </div>
                        <div className='flex w-full  py-2 items-center justify-between'>
                            <div className='w-full'>
                                <label htmlFor="Web Api Key" className="block mb-2">Map Api Client Key</label>
                                <textarea name="" id="" cols="30" rows="10" className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none h-20"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-full gap-5 flex items-center justify-end'>
                        <button className='px-8 rounded py-2 w-full md:w-fit  text-black font-semibold bg-gray-300 mt-5 '>Reset</button>
                        <button className='px-8 rounded py-2 w-full md:w-fit  text-white font-semibold bg-[#FC6A57] mt-5 '>Save</button>
                    </div>
                </div>
            </form>
            {/* <Footer /> */}
        </div>
    )
}

export default Map