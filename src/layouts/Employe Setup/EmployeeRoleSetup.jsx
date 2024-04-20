import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SearchBox from "../../components/ui/SearchBox";
import EmployeeRoleSetupTable from "../../components/ui/table/EmployeeRoleSetupTable";
import { toast } from "react-toastify";
import { createRole, getAllRoles, updateRoleById } from "../../helper/Role";
import EmployRole from "../../components/ui/table/EmployRole";
import { useLocation } from "react-router-dom";


const EmployeeRoleSetup = () => {
  const { register, handleSubmit, setValue, getValues,reset } = useForm(); // Initialize React Hook Form
const [role, setRole] = useState([])
const [reload, setreLoad] = useState(false)
const [update, setUpdate] = useState()

const location = useLocation();
const receivedData = location.state && location.state.data;
console.log(receivedData,"haha")

  const permissions = [
    "DashboardManagement",
    "PosManagement",
    "OrderManagement",
    "ProductManagement",
    "PromotionManagement",
    "HelpAndSupportManagement",
    "ReportAndAnalyticsManagement",
    "UserManagement",
    "TableManagement",
    "SystemManagement"
  ];

  // State to manage checkbox values
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  // Function to handle "Select All" checkbox
  const handleSelectAll = () => {
    const newCheckedState = !selectAllChecked;
    setSelectAllChecked(newCheckedState);

    permissions.forEach((permission) => {
      setValue(`permissions.${permission}`, newCheckedState);
    });
  };


  const onSubmit =async (data) => {
    // Extract values of permissions checkboxes
    // console.log(data,"963")
    const permissionValues = {};
    permissions.forEach((permission) => {
      permissionValues[permission] = data.permissions[permission];
    });
  
    // Add an additional key-value pair to the permissionValues object
    permissionValues["roleName"] = data.roleName;
  
    console.log(permissionValues,'jj'); // Log permission values with additional key-value pair

    try {

      if(receivedData){
        // alert("update kro")
        const res = await updateRoleById(receivedData?._id,permissionValues)
        setUpdate(res)
        toast.success("role Updated successfully");
        // console.log(permissionValues,"777")

      }else{
          const res =await createRole(permissionValues)
          reset()
          setreLoad(true)
          toast.success("role inserted successfully");
          console.log(res,"role inserted successfully")}
        } catch (error) {
          console.log(error,'kk')
        }
  };
  


  const fetchRoles =async () =>{
    try {
      const res =await getAllRoles()
      setRole(res?.rolePermission)
      console.log(res,"22");
      console.log(role,"33");

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchRoles()
  },[reload]) 

  useEffect(() => {
    // Set form values based on receivedData
    if (receivedData) {
      setValue("roleName", receivedData.roleName); // Set roleName field
      permissions.forEach((permission) => {
        setValue(`permissions.${permission}`, receivedData[permission]); // Set permission checkboxes
      });
    }
  }, [receivedData, setValue]);

  return (
    <div>
      <h1 className="text-2xl font-semibold pl-3 my-3">
        <i className="ri-user-line text-red-400 font-semibold"></i> Employee
        Role Setup
      </h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="font-semibold pl-3">Role Form</h1>
          <div className="w-full flex flex-col min-h-fit rounded-xl overflow-hidden border shadow-lg pb-4 pt-5 mb-5">
            <div className="w-full h-1/2 md:h-full px-5 py-2">
              <label htmlFor="roleName">
                Role Name <span className="text-red-500"> </span>
              </label>
              <input
                type="text"
                placeholder="Ex. Store"
                className="w-full px-2 py-2 mt-2 rounded-md border mb-4"
                {...register("roleName", { required: true })}
              />
            </div>
            <div>
              <div className="flex gap-2 p-5">
                <div className="flex flex-col gap-2">
                  <div className="w-fit gap-2 flex">
                    <input
                      type="checkbox"
                      name="SelectAll"
                      checked={selectAllChecked}
                      onChange={handleSelectAll}
                      className="px-2 py-2 mt-2 rounded-md border mb-4"
                    />{" "}
                    Select All
                  </div>
                  <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pl-5 lg:grid-cols-4 gap-5">
                    {permissions.map((permission) => (
                      <div className="w-full gap-2 flex" key={permission}>
                        <input
                          type="checkbox"
                          name={`permissions.${permission}`}
                          className="px-2 py-2 mt-2 rounded-md border mb-4"
                          {...register(`permissions.${permission}`)}
                        />{" "}
                        {permission}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-10 w-full flex items-center justify-end">
            <button
              type="button"
              className="px-10 border-none rounded py-3 bg-gray-300"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-10 border-none rounded ml-4 py-3 bg-[#E35F4E] text-white"
            >
              {receivedData ? "Update" : "Submit"}
            </button>
          </div>
        </form>
      </div>
      {!receivedData &&
      <div>
      <div className="flex gap-2 justify-between items-center p-3 flex-wrap">
        <SearchBox />

        <button className="border-red-400 hover:bg-red-400 hover:text-white border-2 px-4 py-2 rounded-md text-red-400 flex items-center justify-center gap-2">
          <i className="ri-download-2-line"></i>
          Export
          <i className="ri-arrow-drop-down-line"></i>
        </button>
      </div>
      <div className="overflow-x-auto">
       {role && <EmployRole reload={reload} setreLoad={setreLoad} roleData = {role}/>}
      </div>
      </div>
      }
    </div>
  );
};

export default EmployeeRoleSetup;
