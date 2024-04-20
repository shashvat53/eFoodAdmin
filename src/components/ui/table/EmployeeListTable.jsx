import React, { Fragment, useEffect, useState } from "react";
import ToggleSwitch from "../ToggleSwitch";
import { chefStatus, deleteChef } from "../../../helper/ChefList";
import { editChef } from "../../../helper/ChefList";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const EmployeeListTable = ( {data, setReload, Reload} ) => {
  console.log(data,"table");
  const navigate = useNavigate()

  const [status,setStatus] = useState(true)

  const listArr = [
    "SL",
    "Name",
    "Contact",
    "Status",
    "Action",
  ];

  useEffect(() => {
    // console.log(filter)
  }, []);


  const deleteHandler =async (id)=>{
    try {
      console.log(id);
    const res = await deleteChef(id)
    console.log("chef deleted successfully",res);
    setReload(++Reload)
    toast.success("chef deleted successfully")
    } catch (error) {
      console.log(error);
    }
    
  }


const editHandler =async (chefData)=>{
  navigate(`/Chef/AddNew`, { state: { data: chefData } });
  console.log(chefData,"777");


}

const statusHandler =async (id) =>{
  // alert("hii")
  try {
    const res =await chefStatus(id)
    // console.log(res?.is_active,"777")
    setStatus(res?.is_active)

  } catch (error) {
    console.log(error)
  }
}

useEffect(()=>{
  console.log(status,"456")
},[status])

   const Item = (elem, ind) => {
   return (
     <>
       <span >{ind + 1}</span>
        
       <span>{elem?.firstName}</span>
       <span>{elem?.contactNumber}</span>
       {/* elem?.is_active */}
       <span onClick={()=>statusHandler(elem?._id)}><ToggleSwitch id={ind} value={status}/></span>

       <span  className="flex gap-1 justify-evenly">

         <i onClick={()=>editHandler(elem)}
           className="ri-pencil-line text-blue-500 hover:bg-blue-500 hover:text-white w-6 h-6 border-[1px] flex items-center justify-center border-blue-500 rounded-md cursor-pointer"
         ></i>
         <i onClick={()=>deleteHandler(elem?._id)}
           
           className="ri-delete-bin-line text-red-500 rounded-md hover:text-white hover:bg-red-500 w-6 h-6 border-[1px] flex items-center justify-center border-red-500 cursor-pointer"
         ></i>
       </span>
     </>
   );
   };

  return (
     <div>
     <div className="grid grid-flow-row grid-cols-5 gap-2 bg-blue-100 px-3 py-2 min-w-[980px]">
       {listArr.map((elem, index) => {
         return <span key={index}>{elem}</span>;
        })}
     </div>
       <div className="grid grid-flow-row grid-cols-5 gap-2  px-3 py-2 min-w-[980px] border-[1px] shadow-md rounded-b-md hover:shadow-md">
        {data ? (
          data?.map((elem, ind) => {
            return <Fragment key={ind}>{Item(elem, ind)}</Fragment>;
          })
        ) : (
          <h1>No Data Available</h1>
        )}
      </div> 
    </div>
  );
};

export default EmployeeListTable;
