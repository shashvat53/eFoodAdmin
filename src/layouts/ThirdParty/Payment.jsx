import React from 'react'
import Toggle from '../../components/layouts/Toggle'
const Payment = () => {
    return (
        <div className='w-full min-h-screen mt-5'>
            <div className='w-full items-center rounded-md border shadow-md h-fit p-5'>
                <div className='w-full h-full grid grid-flow-row md:gap-16 gap-2 grid-cols-1 md:grid-cols-3'>
                    <div className='flex w-full  py-2 px-5 items-center justify-between border rounded-md'>
                        <p>Cash On Delivery</p>
                        <Toggle />
                    </div>
                    <div className='flex w-full  py-2 px-5 items-center justify-between border rounded-md'>
                        <p>Digital Payment</p>
                        <Toggle />
                    </div>
                    <div className='flex w-full  py-2 px-5 items-center justify-between border rounded-md'>
                        <p>Offline Payment</p>
                        <Toggle />
                    </div>
                </div>
                <div className='w-full h-full flex items-center justify-end'>
                    <button className='px-8 rounded py-3 w-full md:w-fit  text-white font-semibold bg-orange-700 mt-5 '>Save</button>
                </div>
            </div>
            <div className='w-full grid gap-8 grid-flow-row grid-cols-1 md:grid-cols-2 h-fit mt-8'>
            <div className='w-full h-fit rounded-md border shadow-md'>
                <div className='py-4 border-b p-5 flex justify-between'>
                        <p className='font-semibold'>SENANG PAY</p>
                        <Toggle/>
                </div>
                <div className='p-5'>
                <img className='w-[250px] mb-5' src="https://efood-admin.6amtech.com/storage/app/public/payment_modules/gateway_image/2023-09-13-6501549190aae.png" alt="" />
                    <form action="">
                        <select id="branch" name="branch" className="border border-gray-300 rounded-md px-3 py-2 w-full">
                            <option value="All">Test</option>
                            <option value="Live">Live</option>
                        </select>
                        <div className='w-full mt-5'>
                                <label htmlFor="API Key" className="block mb-2">Api Key *</label>
                                <input type="text" id="identificationNumber" name="identificationNumber" placeholder='API Key *' className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none" />
                        </div>
                        <div className='w-full mt-5'>
                                <label htmlFor="API Key" className="block mb-2">Api Secret  *</label>
                                <input type="text" id="identificationNumber" name="identificationNumber" placeholder='Api Secret' className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none" />
                        </div>
                        <div className='w-full mt-5'>
                                <label htmlFor="API Key" className="block mb-2">Payment Gateway Title</label>
                                <input type="text" id="identificationNumber" name="identificationNumber" placeholder='Payment Gateway Title' className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none" />
                        </div>
                        <div className='w-full mt-5'>
                                <label htmlFor="API Key" className="block mb-2">Choose Logo</label>
                                <input type="file" id="identificationNumber" name="identificationNumber" placeholder='Payment Gateway Title' className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none" />
                        </div>
                        <div className='w-full mt-8 flex items-center justify-end'>
                               <button className='px-6 py-2 bg-[#E35F4E] text-white rounded font-semibold'>Save</button>
                        </div>
                        
                    </form>
                </div>
            </div>
            <div className='w-full h-fit rounded-md border shadow-md'>
                    <div className='py-4 border-b p-5 flex justify-between'>
                        <p className='font-semibold'>PAYPAL</p>
                        <Toggle/>
                    </div>
                   <div className='p-5'>
                   <img className='w-[250px] mb-5' src="https://efood-admin.6amtech.com/storage/app/public/payment_modules/gateway_image/2023-09-13-65015472cf852.png" alt="" />
                    <form action="">
                        <select id="branch" name="branch" className="border border-gray-300 rounded-md px-3 py-2 w-full">
                            <option value="All">Test</option>
                            <option value="Live">Live</option>
                        </select>
                        <div className='w-full mt-5'>
                                <label htmlFor="API Key" className="block mb-2">Client Id *</label>
                                <input type="text" id="identificationNumber" name="identificationNumber" placeholder='Client Id *' className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none" />
                        </div>
                        <div className='w-full mt-5'>
                                <label htmlFor="API Key" className="block mb-2">Client Secret *</label>
                                <input type="text" id="identificationNumber" name="identificationNumber" placeholder='Client Secret *' className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none" />
                        </div>
            
                        <div className='w-full mt-5'>
                                <label htmlFor="API Key" className="block mb-2">Payment Gateway Title</label>
                                <input type="text" id="identificationNumber" name="identificationNumber" placeholder='Payment Gateway Title' className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none" />
                        </div>
                        <div className='w-full mt-5'>
                                <label htmlFor="API Key" className="block mb-2">Choose Logo</label>
                                <input type="file" id="identificationNumber" name="identificationNumber" placeholder='Payment Gateway Title' className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none" />
                        </div>
                        <div className='w-full mt-8 flex items-center justify-end'>
                               <button className='px-6 py-2 bg-[#E35F4E] text-white rounded font-semibold'>Save</button>
                        </div>
                    </form>
                   </div>
            </div>
            </div>
            
        </div>
    )
}

export default Payment