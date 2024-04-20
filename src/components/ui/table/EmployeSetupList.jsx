import React, { Fragment, useEffect, useState } from "react";
import ToggleSwitch from "../ToggleSwitch";
import { deleteChef } from "../../../helper/ChefList";
import { editChef } from "../../../helper/ChefList";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { DeleteEmploye } from "../../../helper/Employe";
import EditEmployee from "../../../layouts/Employe Setup/EditEmployee";


const EmployeSetupList = ( {data,setreLoad,reload,setIsOpen} ) => {
  console.log(data,"table");
  const [openEdit, setopenEdit] = useState(false)

  const listArr = [
    "SL",
    "Name",
    "Contact",
    "Role",
    "Status", 
    "Action",
  ];

  useEffect(() => {
    // console.log(filter)
  }, []);


  const deleteHandler = async (id) => {
    try {
      // Display a confirmation dialog using SweetAlert
      const confirmed = await Swal.fire({
        title: 'Are you sure?',
        text: 'You are about to delete this item. This action cannot be undone.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!',
      });
  
      // If the user confirms the deletion
      if (confirmed.isConfirmed) {
        // Call your delete API or function
        const res = await DeleteEmploye(id);
        setreLoad(!reload)
        // const result =await getAllRoles()
        // console.log(result,"69")
        
        // Handle success response if needed
        // For example, show a success message
        Swal.fire('Deleted!', 'The item has been deleted successfully.', 'success');
      }
      // console.log(result,"69")
    } catch (error) {
      // Handle errors
      console.log(error);
  
      // Display an error message using SweetAlert if desired
      Swal.fire('Error', 'An error occurred while deleting the item.', 'error');
    }
  };


const editHandler =async (employeData)=>{
//   navigate(`/Chef/AddNew`, { state: { data: chefData } });
  console.log(employeData,"777");
  setopenEdit(employeData)
//   setIsOpen(false)

}



   const Item = (elem, ind) => {
   return (
     <>
       <span >{ind + 1}</span>
        
       <span>{elem?.employeeName}</span>
       <span>{elem?.contactNumber}</span>
       <span><ToggleSwitch value={elem?.is_active}/></span>
       <span  className="flex gap-1 justify-evenly">

         <i onClick={()=>editHandler(elem)}
        
           className="ri-pencil-line text-blue-500 hover:bg-blue-500 hover:text-white w-6 h-6 border-[1px] flex items-center justify-center border-blue-500 rounded-md cursor-pointer"
         >
            
         </i>
         <i onClick={()=>deleteHandler(elem?._id)}
           
           className="ri-delete-bin-line text-red-500 rounded-md hover:text-white hover:bg-red-500 w-6 h-6 border-[1px] flex items-center justify-center border-red-500 cursor-pointer"
         ></i>
       </span>
     </>
   );
   };

  return (
     <div className="bg-white">
        {openEdit &&<div className="absolute top-0 left-0 p-12 z-30 bg-[#00000034] w-full">
            <div className="relative flex flex-col gap-2 p-2  bg-white">
<div className="w-full flex items-center justify-end">
        <i onClick={()=>setopenEdit(false)} className="ri-close-circle-line text-2xl hover:text-red-500 active:scale-95 cursor-pointer"></i>
</div>
            <div className="overflow-y-auto">

        <EditEmployee  setIsOpen={setopenEdit} data={openEdit} />
            </div>
            </div>
        </div>}
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

export default EmployeSetupList;
