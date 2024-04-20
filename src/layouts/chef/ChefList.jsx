import React, { useEffect, useState } from 'react'
import EmployeeListTable from '../../components/ui/table/EmployeeListTable'
import EmployeeJson from '../../components/json/EpmployeeJson'
import SearchBox from '../../components/ui/SearchBox'
import  {getAllChef}  from '../../helper/ChefList';


const ChefList = () => {
  const [chefData,setChefData] = useState()
  const [Reload, setReload] = useState(0)
  
  const getData = async()=>{
    try {
      const {chef}= await getAllChef()
      console.log(chef,"1111");
      setChefData(chef)
      // console.log(chefData,"cheffff");
    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(()=>{
    console.log(Reload,'hdkjhdkk')
    getData()
  },[Reload])


  useEffect(()=>{
      console.log(chefData,"cheffff");

    // getData()
  },[chefData])

  return (
    <div className='shadow-sm overflow-hidden py-6 mb-4'>
        <h1 className="text-2xl font-semibold pl-3 flex gap-2 items-center">
        <i className="ri-restaurant-line text-red-400 font-semibold"></i>  
        Chef List
      </h1>
        <div className='flex gap-2 justify-between items-center p-3 flex-wrap'>
      <SearchBox/>
      <button className='border-red-400 hover:bg-red-400 hover:text-white border-2 px-4 py-2 rounded-md text-red-400 flex items-center justify-center gap-2'>
      <i className="ri-download-2-line"></i>
        Export
        <i className="ri-arrow-drop-down-line"></i>
        </button>
        <div className='overflow-x-auto'>
         {chefData &&   <EmployeeListTable  data={chefData} setReload={setReload} Reload={Reload}/>}
        </div>
    </div>
    </div>
  )
}

export default ChefList