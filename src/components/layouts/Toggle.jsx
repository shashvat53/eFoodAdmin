import { motion } from 'framer-motion'
import React, { useState } from 'react'
useState
const On_Off = () => {
    const [a, b] = useState(false)
    return (
      <div className='w-16 flex items-center justify-center '>
        <div data-kuchbhi={a} onClick={()=> b(!a)} className='on-off w-[40px] p-1 bg-gray-200 rounded-full flex items-center justify-start'>
          <motion.div layout className='w-3 h-3 bg-white rounded-full'></motion.div>
        </div>
      </div>
    )
}

export default On_Off