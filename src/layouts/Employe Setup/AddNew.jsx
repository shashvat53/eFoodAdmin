import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getAllRoles } from "../../helper/Role";
import { getAllBranch } from "../../helper/Branch";
import { createEmploye } from "../../helper/Employe";
import { toast } from "react-toastify";

const AddNew = ({setIsOpen}) => {
  const { register, handleSubmit, reset } = useForm();
  const [roles, setRoles] = useState([]);
  const [branch, setBranch] = useState([]);

  // Simulate fetching roles from an API
  const fetchRoles = async () => {
    try {
      const res = await getAllRoles()
      setRoles(res?.rolePermission);
      // console.log(res?.rolePermission,"1111");
      
    } catch (error) {
      console.log(error)
    }
  };

  const getAllBranchData = async () => {
    try {
      const { branch } = await getAllBranch();
      setBranch(branch);
      console.log(branchData, "211");
      console.log(branch, "123");
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchRoles();
    getAllBranchData()
  }, []);

  const onSubmit =async (data) => {
    console.log(data,"7777");
    // API submission logic goes here

    try {
      const res =await createEmploye(data)
      toast.success("Employe created successfully...")
      setIsOpen(true)
      reset()
    } catch (error) {
      console.log(error,"456");
    }
  };

  return (
    <div className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap gap-2 items-center">
        <h2 className="text-xl mb-0 flex items-center gap-4">
          <img
            width="20"
            className="avatar-img"
            src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/employee.png"
            alt=""
          />
          <span className="page-header-title font-semibold">Add New Employee</span>
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-5 border rounded-md">
          <div className="flex items-center gap-3 p-[10px_20px]">
            <i className="fa-solid fa-user"></i>
            <h2>General Information</h2>
          </div>
          <hr />
          <div className="p-[18px_20px] flex flex-col md:flex-row pb-[3rem] gap-10">
            <div className="w-full md:w-[50%] flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <label className="block">Full Name</label>
                <input
                  type="text"
                  placeholder="EX: John Doe"
                  className="border border-gray-400 focus:border-red-500 px-4 py-2 focus:outline-none rounded-md"
                  {...register("employeeName")}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="block">Phone</label>
                <input
                  type="text"
                  placeholder="EX: +91********"
                  className="border border-gray-400 focus:border-red-500 px-4 py-2 focus:outline-none rounded-md"
                  {...register("contactNumber")}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="block">Role</label>
                <select
                  className="border border-gray-400 focus:border-red-500 px-4 py-2 focus:outline-none rounded-md"
                  {...register("roleId")}
                >
                  <option selected disabled>--select--</option>
                  {roles.map((role) => (
                    <option key={role?._id} value={role?._id}>
                      {role?.roleName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="block">Branch</label>
                <select
                  className="border border-gray-400 focus:border-red-500 px-4 py-2 focus:outline-none rounded-md"
                  {...register("branchId")}
                ><option selected disabled>--select--</option>
                  {branch.map((b) => (
                    <option key={b?._id} value={b?._id}>
                      {b?.branchName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="block">Identity Type</label>
                <select
                  className="border border-gray-400 focus:border-red-500 px-4 py-2 focus:outline-none rounded-md"
                  {...register("identityType")}
                >
                  <option selected disabled>---Select Identity Type---</option>
                  <option value="Driving License">Driving License</option>
                  <option value="Passport">Passport</option>
                  <option value="Aadhar Card">Aadhar Card</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="block">Identity Number</label>
                <input
                  type="text"
                  className="border border-gray-400 focus:border-red-500 px-4 py-2 focus:outline-none rounded-md"
                  {...register("identityNumber")}
                />
              </div>
            </div>

           {false && <div className="w-full md:w-[50%] ">
              <div>
                <img
                  src="https://efood-admin.6amtech.com/public/assets/admin/img/400x400/img2.jpg"
                  className="w-[300px] md:w-[200px] mx-auto rounded-md"
                  alt="Employee"
                />
              </div>
              <div className="my-6">
                <p className="my-2">
                  Employee Image <span className="text-red-600">( Ratio 1:1 )</span>
                </p>
                <input
                  type="file"
                  name="image"
                  id="customFileUpload"
                  className="p-3 border rounded-tl-md rounded-bl-md w-[200px] md:w-[500px]"
                  accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                  {...register("employeeImage")}
                  required
                />
                <label htmlFor="customFileUpload" className="border p-4 border-l-0 rounded-tr-md rounded-br-md">
                  Browse
                </label>
              </div>
            </div>}
          </div>
        </div>

        <div className="my-5 border rounded-md pb-[3rem] md:pb-[2rem]">
          <div className="flex items-center gap-3 p-[10px_20px]">
            <i className="fa-solid fa-user"></i>
            <h2>Account Information</h2>
          </div>
          <hr />
          <div className="w-full p-[20px_20px] grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-1">
              <label className="block">Email</label>
              <input
                type="text"
                placeholder="EX: ex@gmail.com"
                className="border border-gray-400 focus:border-red-500 px-4 py-2 focus:outline-none rounded-md"
                {...register("emailAddress")}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="block">Password</label>
              <input
                type="text"
                placeholder="EX: 8+ Character"
                className="border border-gray-400 focus:border-red-500 px-4 py-2 focus:outline-none rounded-md"
                {...register("password")}
              />
            </div>
            
          </div>
        </div>

        <div className="flex justify-end">
          <div className="flex gap-6">
            <button type="button" onClick={() => reset()} className="p-[12px_25px] bg-gray-100 rounded-md shadow-md">
              Reset
            </button>
            <button type="submit" className="p-[12px_25px] bg-red-400 rounded-md shadow-md text-white">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNew;
