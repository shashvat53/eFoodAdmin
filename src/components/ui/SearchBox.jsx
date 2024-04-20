import React from 'react'

const SearchBox = () => {
  return (
    <div className='w-1/2 h-12 bg-red-200 flex rounded-md overflow-hidden'>
        <input type="text" placeholder='Search here....' className='p-2 pl-3 w-full h-full focus:outline-red-200 border-[1px] rounded-s-md border-[#ddd] '/>
        <button className='bg-red-400 px-6 py-2 rounded-e-md text-white flex items-center justify-center'>Search</button>
    </div>
  )
}

export default SearchBox