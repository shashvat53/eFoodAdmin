import React, { useState } from 'react'
import EmployeeList from './EmployeeList'
import AddNew from './AddNew'

const EmployeeSetup = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <div className='w-full flex gap-3 my-2 border-b-2'>
      <div onClick={()=>setIsOpen(false)} className={`cursor-pointer px-6 py-2 border-b-2 ${isOpen ? 'border-white':'border-red-400'}`}>Add Employee</div>
      <div onClick={()=>setIsOpen(true)} className={`cursor-pointer px-6 py-2 border-b-2 ${!isOpen ? 'border-white':'border-red-400'}`}>Employee List</div>
    </div>
    {isOpen ? <EmployeeList setIsOpen={setIsOpen}/> : <AddNew setIsOpen={setIsOpen}/>}
    </>
  )
}

export default EmployeeSetup