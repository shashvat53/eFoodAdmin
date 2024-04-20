import React, { useEffect, useState } from 'react'
import SearchBox from '../../components/ui/SearchBox'
import { getAllEmploye } from '../../helper/Employe'
import EmployeSetupList from '../../components/ui/table/EmployeSetupList'

const EmployeeList = ({setIsOpen}) => {

  const [allEmploye, setAllEmploye] = useState([])
  const [reload, setreLoad] = useState(false)

  const fetchedEmploye =async () =>{
    try {
      const res = await getAllEmploye()
      console.log(res?.employee,"555")
      setAllEmploye(res?.employee)
      console.log(allEmploye,"7777")
    } catch (error) {
      console.log(error)
    }
  }

useEffect(()=>{
  fetchedEmploye()
},[reload])

  return (
    <div className='shadow-sm overflow-hidden py-6 mb-4'>
        <div className='flex gap-2 justify-between items-center p-3 flex-wrap'>
      <SearchBox/>
      <button className='border-red-400 hover:bg-red-400 hover:text-white border-2 px-4 py-2 rounded-md text-red-400 flex items-center justify-center gap-2'>
      <i className="ri-download-2-line"></i>
        Export
        <i className="ri-arrow-drop-down-line"></i>
        </button>
        <div className='overflow-x-auto'>
            <EmployeSetupList setIsOpen={setIsOpen} reload={reload} setreLoad={setreLoad} data={allEmploye}  filter={''}/>
        </div>
    </div>
    </div>
  )
}

export default EmployeeList