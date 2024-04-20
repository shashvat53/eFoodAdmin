import React, { useEffect, useState } from "react";
// import DeliveryMan from "../../helper/DeliveryMan";
import { getAllBranch } from "../../helper/Branch";
import { AddNewDelivery } from "../../helper/Delivery";
// import AddNewDeliveryMan from "../../helper/AddNewDeliveryMan";

const AddNewDeliveryman = () => {
  const [branches, setbranches] = useState();

  const fetchBranches = async () => {
    try {
      const res = await getAllBranch();
      setbranches(res?.data?.branch);
      console.log(res?.data?.branch, "7777");
      console.log(branches, "456");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBranches();
  }, []);

  const [val, setVal] = useState({
    firstName: "",
    lasttName: "",
    branch: "",
    identifyNumber: "",
    phone: "",
    email: "",
    password: "",
    confirmpassword: "",
    identityType: "",
    categoryImage: "",
    bannerImage: "",
  });
  const changeHandler = (event) => {
    // console.log(event.target.name, event.target.value);
    setVal({ ...val, [event.target.name]: event.target.value });
  };
  const submitHandler =async (event) => {
    event.preventDefault();
    console.log(val, "kkk");
    // setVal({
    //   firstName: "",
    //   lasttName: "",
    //   branch: "",
    //   phone: "",
    //   identifyNumber: "",
    //   email: "",
    //   password: "",
    //   confirmpassword: "",
    //   identityType: "",
    //   categoryImage: "",
    //   bannerImage: "",
    // });

    try {
        const data=await AddNewDelivery(val)
        console.log(data,"111")
    } catch (error) {
        console.log(error,"222")
    }
  };
  return (
    <div>
      <h1 className="text-2xl font-semibold pl-3 flex gap-2 items-center">
        <i className="ri-truck-line text-red-400 font-semibold"></i>
        Add New Deliveryman
      </h1>
      <form onSubmit={submitHandler}>
        <div className="w-full grid grid-flow-row md:grid-cols-2 sm:grid-cols-1 min-h-fit rounded-xl overflow-hidden border shadow-lg pb-4 pt-5 my-5">
          <div className=" w-full h-1/2  md:h-full px-5 py-2">
            <label htmlFor="Title">
              {" "}
              First Name <span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
              name="firstName"
              onChange={changeHandler}
              value={val.firstName}
            />
          </div>
          <div className=" w-full h-1/2  md:h-full px-5 py-2">
            <label htmlFor="Title">
              {" "}
              Last Name <span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
              onChange={changeHandler}
              name="lasttName"
              value={val.lasttName}
            />
          </div>

          <div className=" w-full h-1/2  md:h-full px-5 py-2 flex flex-col">
            <label htmlFor="Title">
              {" "}
              Identity Type <span className="text-red-500"> *</span>
            </label>
            <select
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 focus:outline-red-400"
              name="identityType"
              value={val.identityType}
              id=""
              onChange={changeHandler}
            >
              <option value="Passport">Passport</option>
              <option value="Driving License">Driving License</option>
              <option value="Other Gov ID">Other Gov ID</option>
            </select>
          </div>
          <div className=" w-full h-1/2  md:h-full px-5 py-2">
            <label htmlFor="Title">
              Phone <span className="text-red-500"> *</span>
            </label>
            <input
              type="number"
              placeholder="987*****"
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
              onChange={changeHandler}
              name="phone"
              value={val.phone}
            />
          </div>
          <div className=" w-full h-1/2  md:h-full px-5 py-2">
            <label htmlFor="Title">
              Identity Number<span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              placeholder="Identity Number"
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
              onChange={changeHandler}
              name="identifyNumber"
              value={val.identifyNumber}
            />
          </div>

          <div className="w-full h-1/2 md:h-full px-5 py-2 flex flex-col">
            <label htmlFor="branchId">
              Branch<span className="text-red-500"> *</span>
            </label>
            {branches && <select
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 focus:outline-red-400"
              name="branchId"
              id="branchId" // Added id attribute
              onChange={changeHandler}
              value={val.branch}
            >
              {branches.map((b) => (
                <option key={b?._id} value={b?._id}>
                  {b?.branchName}
                </option> // Added key prop
              ))}
            </select>}
          </div>

          {/* <div className=' w-full grid grid-flow-row md:grid-cols-2 sm:grid-cols-1'> */}
          {false && (
            <div className=" w-full h-1/2  md:h-full px-5 py-2 flex flex-col items-center justify-center">
              <p className="text-center">
                Category Image{" "}
                <span className="text-red-500"> * ( Ratio 1:1 )</span>{" "}
              </p>
              <label htmlFor="ProfileImage">
                <div>
                  <input
                    type="file"
                    id="ProfileImage"
                    accept="image/*"
                    className="hidden"
                    name="categoryImage"
                    value={val.categoryImage}
                    onChange={changeHandler}
                  />
                  <img
                    className="mt-5"
                    src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/upload_img2.png"
                    alt=""
                  />
                </div>
              </label>
            </div>
          )}
          {false && (
            <div className=" w-full h-1/2  md:h-full p-5 flex flex-col items-center justify-center">
              <p className="text-center">
                Banner Image{" "}
                <span className="text-red-500"> * ( Ratio 8:1 )</span>{" "}
              </p>
              <label htmlFor="ProfileImage">
                <div>
                  <input
                    type="file"
                    id="ProfileImage"
                    accept="image/*"
                    className="hidden"
                    name="bannerImage"
                    value={val.bannerImage}
                    onChange={changeHandler}
                  />
                  <img
                    className="mt-5"
                    src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/upload_img2.png"
                    alt=""
                  />
                </div>
              </label>
            </div>
          )}

          {/* </div> */}
        </div>
        <div className="w-full grid grid-flow-row md:grid-cols-3 sm:grid-cols-1 min-h-fit rounded-xl overflow-hidden border shadow-lg pb-4 pt-5 my-5">
          <div className=" w-full h-1/2  md:h-full px-5 py-2">
            <label htmlFor="Title">
              {" "}
              Email <span className="text-red-500"> *</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
              onChange={changeHandler}
              value={val.email}
            />
          </div>
          <div className=" w-full h-1/2  md:h-full px-5 py-2">
            <label htmlFor="Title">
              {" "}
              Password <span className="text-red-500"> *</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
              onChange={changeHandler}
              value={val.password}
            />
          </div>
          <div className=" w-full h-1/2  md:h-full px-5 py-2">
            <label htmlFor="Title">
              Confirm Password <span className="text-red-500"> *</span>
            </label>
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
              onChange={changeHandler}
              value={val.confirmpassword}
            />
          </div>
        </div>
        <div className="my-10  w-full flex items-center justify-center">
          <button className="px-10 border-none rounded py-3 bg-gray-300">
            Reset
          </button>
          <button className="px-10 border-none rounded ml-4  py-3 bg-[#E35F4E] text-white" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewDeliveryman;
