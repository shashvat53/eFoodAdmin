import React from 'react'

const FirebaseConfig = () => {
    return (
        <div className='w-full h-fit p-5 border shadow-md rounded-md'>
            <form action="">
                <div className='mb-5'>
                    <label htmlFor="firstName" className="block mb-2">API Key</label>
                    <input type="text" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                </div>
                <div className='mb-5'>
                    <label htmlFor="firstName" className="block mb-2">Auth Domain</label>
                    <input type="text" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                </div>
                <div className='mb-5'>
                    <label htmlFor="firstName" className="block mb-2">Project ID</label>
                    <input type="text" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                </div>
                <div className='mb-5'>
                    <label htmlFor="firstName" className="block mb-2">Storage Bucket</label>
                    <input type="text" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                </div>
                <div className='mb-5'>
                    <label htmlFor="firstName" className="block mb-2">Messaging Sender ID</label>
                    <input type="text" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                </div>
                <div className='mb-5'>
                    <label htmlFor="firstName" className="block mb-2">App ID</label>
                    <input type="text" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                </div>
                <div className='w-full mt-8 gap-5 flex items-center justify-end'>
                    <button className='px-6 py-2 bg-gray-300 text-black rounded font-semibold'>Reset</button>
                    <button className='px-6 py-2 bg-[#E35F4E] text-white rounded font-semibold'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default FirebaseConfig