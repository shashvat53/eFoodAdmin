import React from 'react'

const FirebaseConfiguration = () => {
    return (
       <>
         <div className='w-full h-fit shadow-md border rounded-b-md p-10 mb-32'>
            <form action="">
                <p>Server Key</p>
                <textarea name="" id="" cols="30" rows="10" className='w-full h-16 mt-4 border outline-none rounded-md p-2'></textarea>
                <div className='w-full h-full gap-5 flex items-center justify-end'>
                    <button className='px-8 rounded py-2 w-full md:w-fit  text-white font-semibold bg-[#FC6A57] mt-5 '>Save</button>
                </div>
            </form>
        </div>
       </>
    )
}

export default FirebaseConfiguration