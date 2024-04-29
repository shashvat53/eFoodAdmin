import React from "react";
import { useForm } from "react-hook-form";

const AddNewBranch = () => {
  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm();
  // dedddr
  const onSubmit = (data) => {
    console.log(data, "77");
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold pl-3 flex gap-2 items-center">
        <i className="ri-store-2-line text-red-400 font-semibold"></i>
        Add New Branch
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <div className="w-full grid grid-flow-row md:grid-cols-2 sm:grid-cols-1 min-h-fit rounded-xl overflow-hidden border shadow-lg pb-4 pt-5 my-5">
          <div className=" w-full h-1/2  md:h-full px-5 py-2">
            <label htmlFor="Title">
              {" "}
              Name <span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Name"
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
            />
          </div>
          <div className=" w-full h-1/2  md:h-full px-5 py-2">
            <label htmlFor="Title">
              {" "}
              Address <span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              {...register("address", { required: true })}
              placeholder="Address"
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
            />
          </div>
          <div className=" w-full h-1/2  md:h-full px-5 py-2">
            <label htmlFor="Title">
              Phone <span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              {...register("phone", { required: true })}
              placeholder="987*****"
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
            />
          </div>
          <div className=" w-full h-1/2  md:h-full px-5 py-2">
            <label htmlFor="Title">
              Email<span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              {...register("email", { required: true })}
              placeholder="Email"
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
            />
          </div>
          <div className=" w-full h-1/2  md:h-full px-5 py-2">
            <label htmlFor="Title">
              Password<span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              {...register("password", { required: true })}
              placeholder="Password"
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
            />
          </div>

          {false && (
            <div className=" w-full h-1/2  md:h-full px-5 py-2 flex flex-col items-center justify-center">
              <p className="text-center">
                Branch Image{" "}
                <span className="text-red-500"> * ( Ratio 1:1 )</span>{" "}
              </p>
              <label htmlFor="ProfileImage">
                <div>
                  <input
                    type="file"
                    id="ProfileImage"
                    accept="image/*"
                    className="hidden"
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
                Branch Cover Image
                <span className="text-red-500"> * ( Ratio 3:1 )</span>{" "}
              </p>
              <label htmlFor="ProfileImage">
                <div>
                  <input
                    type="file"
                    id="ProfileImage"
                    accept="image/*"
                    className="hidden"
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
        {false && (
          <div className="w-full grid grid-flow-row md:grid-cols-3 sm:grid-cols-1 min-h-fit rounded-xl overflow-hidden border shadow-lg pb-4 pt-5 my-5">
            <div className=" w-full h-1/2  md:h-full px-5 py-2">
              <label htmlFor="Title">
                {" "}
                Latitude <span className="text-red-500"> *</span>
              </label>
              <input
                type="number"
                placeholder="Latitude"
                className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
              />
            </div>
            <div className=" w-full h-1/2  md:h-full px-5 py-2">
              <label htmlFor="Title">
                {" "}
                Longitude <span className="text-red-500"> *</span>
              </label>
              <input
                type="number"
                placeholder="Longitude"
                className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
              />
            </div>
            <div className=" w-full h-1/2  md:h-full px-5 py-2">
              <label htmlFor="Title">
                Coverage (Km) <span className="text-red-500"> *</span>
              </label>
              <input
                type="number"
                placeholder="Coverage (Km)"
                className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
              />
            </div>
          </div>
        )}
        <div className="my-10  w-full flex items-center justify-center">
          <button className="px-10 border-none rounded py-3 bg-gray-300">
            Reset
          </button>
          <button
            className="px-10 border-none rounded ml-4  py-3 bg-[#E35F4E] text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewBranch;
