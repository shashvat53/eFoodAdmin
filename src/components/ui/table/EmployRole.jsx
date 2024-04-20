import React, { Fragment, useEffect, useState } from "react";
import ToggleSwitch from "../ToggleSwitch";
import { getAllRoles, roleDeleteById,getRoleById } from "../../../helper/Role";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";


const EmployRole = ({ roleData,setreLoad,reload }) => {
const navigate = useNavigate()
const [recieveData, setRecieveData] = useState()




  console.log(roleData, "4444");
  const listArr = [
    "SL",
    "Role Name",
    "Modules",
    "Created At",
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
        const res = await roleDeleteById(id);
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


  const editHandler = async(id) =>{
    console.log(id,"5585")
    try {
      const res =await getRoleById(id)
      console.log(res?.rolePermission,"898")
      setRecieveData(res?.rolePermission)
      navigate(`/Employees/EmployeeRoleSetup`,{ state: { data: res?.rolePermission } })

    } catch (error) {
      console.log(error)
    }

  } 

  const Item = (elem, ind) => {
    const excludeKeys = ['is_active'];

    const truePermissions = Object.keys(elem).filter((key)=>elem[key] === true &&  !excludeKeys.includes(key))
    console.log(truePermissions,"789");
    return (
      <>
        <span>{ind + 1}</span>
        {/* <span>{elem.productName}</span> */}
        <span>{elem.roleName}</span>
        <span >
        {truePermissions.map((permission)=>
        <Fragment key={permission}>

          {permission},{' '}
        </Fragment>
      )}
      </span>
        <span>{elem.createdAt}</span>
        <span>
          <ToggleSwitch value={elem.is_active} />
        </span>
        <span className="flex  gap-3">
          <i onClick={()=>editHandler(elem?._id)} className="ri-pencil-line text-blue-500 hover:bg-blue-500 hover:text-white w-6 h-6 border-[1px] flex items-center justify-center border-blue-500 rounded-md cursor-pointer"></i>
          <i onClick={()=>deleteHandler(elem?._id)} className="ri-delete-bin-line text-red-500 rounded-md hover:text-white hover:bg-red-500 w-6 h-6 border-[1px] flex items-center justify-center border-red-500 cursor-pointer"></i>
        </span>
      </>
    );
  };

  return (
    
    <div>
     
      <div className="grid grid-flow-row grid-cols-6 gap-2 bg-blue-100 px-3 py-2 min-w-[400px]">
        {listArr.map((elem, index) => {
          return <span key={index}>{elem}</span>;
        })}
      </div>
      <div className="grid grid-flow-row grid-cols-6 gap-2  px-3 py-2 min-w-[400px] border-[1px] shadow-md rounded-b-md hover:shadow-md">
        {roleData ? (
          roleData.map((elem, ind) => {
            return <Fragment key={ind}>{Item(elem, ind)}</Fragment>;
          })
        ) : (
          <h1>No Data Available</h1>
        )}
      </div>
     
    </div>
  );
};

export default EmployRole;
