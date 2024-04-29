import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createChef, editChef, getChefById } from "../../helper/ChefList";
import { toast } from "react-toastify";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getAllBranch } from "../../helper/Branch";

const AddNewChef = () => {
  const {
    reset,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [chefData, setChefData] = useState([]);
  const [branchData, setBranchData] = useState([]);

  const location = useLocation();
  const receivedData = location.state && location.state.data;
  const chefId = receivedData?._id;
  // console.log(chefId,"888");

  const fetchChefDetails = async (chefId) => {
    try {
      const { data } = await getChefById(chefId);
      // console.log(data.chef,"0000")
      setChefData(data?.chef);
      console.log(data?.chef,"3333");
      // Set form values using setValue from react-hook-form
      let setvalue = Object.keys(data?.chef).forEach((key) => setValue(key, receivedData[key]));
      console.log(setvalue,"003")
    } catch (error) {
      // console.log(chefId,"5555")
      console.error("Error fetching chef details:", error);
    }
  };

  useEffect(() => {
    if (chefId) {
      // Fetch chef details using chefId
      fetchChefDetails(chefId); // Implement this function
      // console.log(chefId,"6666")
    }
  }, [chefId]);

  // for fetching branches

  const getAllBranchData = async () => {
    try {
      const { branch } = await getAllBranch();
      setBranchData(branch);
      console.log(branchData, "211");
      console.log(branch, "123");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBranchData();
  }, []);



  const onSubmit = async (data) => {
    // console.log(data,"2222"); // Handle form submission data here

    try {
      // Assuming you have an array `branchData` with objects containing `id` and `branchName`
      let submissionData = { ...data };
      submissionData.branchId = submissionData?.branchId?.branchName; // Replace branchId.branchName with the actual branchId

      let sendForEditData = { 
       
        branchId : data?.branchId?.branchName, // Replace branchId.branchName with the actual branchId
        contactNumber:data?.contactNumber,
        firstName:data?.firstName,
        lastName:data?.lastName,
        identityType:data?.identityType,
        identityNumber:data?.identityNumber

       };
      
      

      if (receivedData) {
        console.log(sendForEditData,"963")
        // If chefId exists, it's an update operation
        const res = await editChef(receivedData?._id, sendForEditData);
        toast.success("Chef updated successfully");
        // alert('Chef details updated successfully!');
      } else {
        const res = await createChef(submissionData);
        // console.log('chef inserted successful:', res);
        toast.success("Chef inserted successfully");
        navigate("/Chef/List");
        // reset()
      }
    } catch (error) {
      toast.error("error while chef inserting");
      console.log(error, "44");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold pl-3 flex gap-2 items-center">
        <i className="ri-restaurant-line text-red-400 font-semibold"></i>
        Add New Chef
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full grid grid-flow-row md:grid-cols-2 sm:grid-cols-1 min-h-fit rounded-xl overflow-hidden border shadow-lg pb-4 pt-5 my-5">
          <div className="w-full h-1/2 md:h-full px-5 py-2">
            <label htmlFor="firstName">
              {" "}
              First Name <span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="w-full h-1/2 md:h-full px-5 py-2">
            <label htmlFor="lastName">
              {" "}
              Last Name <span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
              {...register("lastName", { required: true })}
            />
            {errors.lastName && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="w-full h-1/2 md:h-full px-5 py-2 flex flex-col">
            <label htmlFor="identityType">
              {" "}
              Identity Type <span className="text-red-500"> *</span>
            </label>
            <select
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 focus:outline-red-400"
              {...register("identityType", { required: true })}
            >
              <option value="passport">Passport</option>
              <option value="Driving License">Driving License</option>
              <option value="Aadhar Card">Aadhar Card</option>
            </select>
            {errors.identityType && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="w-full h-1/2 md:h-full px-5 py-2">
            <label htmlFor="identityNumber">
              {" "}
              Identity Number<span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              placeholder="Identity Number"
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
              {...register("identityNumber", { required: true })}
            />
            {errors.identityNumber && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
{/* 
          {receivedData && (
            <div className="w-full h-1/2 md:h-full px-5 py-2">
              <label htmlFor="branchId">
                {" "}
                Branch Name<span className="text-red-500"> *</span>
              </label>
              <input
                type="text"
                placeholder="Identity Number"
                className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
                {...register("branchId.branchName", { required: true })}
              />
              {errors.branchId && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          )} */}

          {branchData && (
            <div className="w-full h-1/2 md:h-full px-5 py-2 flex flex-col">
              <label htmlFor="branchId">
                Branch<span className="text-red-500"> *</span>
              </label>
              <select
                className="w-full px-2 py-2 mt-2 rounded-md border mb-4 focus:outline-red-400"
                {...register("branchId.branchName", { required: true })}
                defaultValue={receivedData?.branchId?.branchName || ""}
              >   
              <option selected disabled>--select--</option>
                { branchData?.map((branch, index) => (
                  <option key={index} value={branch._id}  >
                    {branch.branchName} 
                  </option>
                 
                ))}
              </select>
              {errors.branchId && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          )}

          {/* Add other fields with similar structure */}

          <div className="w-full h-1/2 md:h-full px-5 py-2">
            <label htmlFor="contactNumber">
              {" "}
              Phone Number <span className="text-red-500"> *</span>
            </label>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
              {...register("contactNumber", {
                required: true,
                pattern: /^[0-9]{10}$/,
              })}
            />
            {errors.contactNumber && (
              <span className="text-red-500">
                Please enter a valid phone number
              </span>
            )}
          </div>

          {false && (
            <>
              <div className="w-full h-1/2 md:h-full px-5 py-2 flex flex-col items-center justify-center ">
                <label htmlFor="profileImage">
                  Profile Image{" "}
                  <span className="text-red-500"> * ( Ratio 1:1 )</span>{" "}
                </label>
                <input
                  type="file"
                  id="profileImage"
                  accept="image/*"
                  className="hidden"
                  {...register("profileImage", { required: true })}
                />
                <img
                  className="mt-5"
                  src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/upload_img2.png"
                  alt="Profile"
                />
                {/* {errors.profileImage && <span className="text-red-500">This field is required</span>} */}
              </div>

              <div className="w-full h-1/2 md:h-full px-5 py-2 flex flex-col items-center justify-center">
                <label htmlFor="identityImage">
                  Identity Card Image{" "}
                  <span className="text-red-500"> * ( Ratio 1:1 )</span>{" "}
                </label>
                <input
                  type="file"
                  id="identityImage"
                  accept="image/*"
                  className="hidden"
                  {...register("identityImage", { required: true })}
                />
                <img
                  className="mt-5"
                  src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/upload_img2.png"
                  alt="Identity Card"
                />
                {/* {errors.identityImage && <span className="text-red-500">This field is required</span>} */}
              </div>
            </>
          )}
        </div>
        <div className="w-full grid grid-flow-row md:grid-cols-3 sm:grid-cols-1 min-h-fit rounded-xl overflow-hidden border shadow-lg pb-4 pt-5 my-5">
          <div className="w-full h-1/2 md:h-full px-5 py-2">
            <label htmlFor="emailAddress">
              {" "}
              EmailAddress <span className="text-red-500"> *</span>
            </label>
            <input
              type="emailAddress"
              placeholder="EmailAddress"
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
              {...register("emailAddress", { required: true })}
              disabled={receivedData && true}
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="w-full h-1/2 md:h-full px-5 py-2">
            <label htmlFor="password">
              {" "}
              Password <span className="text-red-500"> *</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
              {...register("password", {required: !receivedData })}
              disabled={receivedData && true}
            />
            {errors.password && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          {/* <div className='w-full h-1/2 md:h-full px-5 py-2'>
            <label htmlFor="confirmPassword"> Confirm Password <span className='text-red-500'> *</span></label>
            <input type="password" placeholder='Confirm Password' className='w-full px-2 py-2 mt-2 rounded-md border mb-4 ' {...register("confirmPassword", { required: true })} />
            {errors.confirmPassword && <span className="text-red-500">This field is required</span>}
          </div> */}
        </div>
        <div className="my-10 w-full flex items-center justify-center">
          <button
            type="reset"
            className="px-10 border-none rounded py-3 bg-gray-300"
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-10 border-none rounded ml-4 py-3 bg-[#E35F4E] text-white"
          >
            {receivedData ? "Update Chef" : "Create Chef"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewChef;
