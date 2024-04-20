import React, { useState } from "react";
import { Link } from "react-router-dom";

const Setting = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Settings</h2>
        <button className="p-[10px_24px] text-white bg-red-500 rounded">
          <i className="fa-solid fa-house"></i>
          <Link to='/' className="ml-4 text-lg">Dashboard</Link>
        </button>
      </div>
      <hr className="my-4" />

      <div className="my-8">
        <div className="h-[170px] bg-white rounded shadow relative">
          <div className="h-[140px] bg-gray-200 rounded rounded-br-none rounded-bl-none flex justify-center items-center">
            {!selectedImage && (
              <label
                htmlFor="fileInput"
                className="bg-red-700 w-[120px] h-[120px] rounded-full absolute bottom-0 cursor-pointer"
              >
                <i className="bg-white shadow p-3 rounded-full overflow-hidden fa-solid fa-pen absolute bottom-0 right-0" />
                <input
                  type="file"
                  className="hidden"
                  id="fileInput"
                  onChange={handleFileChange}
                />
              </label>
            )}
            {selectedImage && (
              <div className="bg-red-700 w-[120px] h-[120px] rounded-full absolute bottom-0 cursor-pointer">
                <label
                  htmlFor="fileInput"
                  className="bg-red-700 w-[120px] h-[120px] rounded-full absolute bottom-0 cursor-pointer"
                >
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-full h-full rounded-full"
                  />
                  <i
                    className="bg-white shadow p-3 rounded-full overflow-hidden fa-solid fa-pen absolute bottom-0 right-0 cursor-pointer"
                    // onClick={() => setSelectedImage(null)}
                  />
                  <input
                    type="file"
                    className="hidden"
                    id="fileInput"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="shadow rounded ">
        <div className="p-[21px] flex items-center gap-3 ">
          <i class="fa-solid fa-circle-exclamation"></i>
          <h3 className="text-lg font-semibold"> Basic information</h3>
        </div>
        <hr />
        <div className="p-[21px] flex gap-[21px] flex-col">
          <div className="flex justify-evenly items-center gap-2 flex-col sm:flex-row">
            <label className="w-full sm:w-[30%]">Full Name</label>
            <div className="w-full flex gap-2 sm:gap-5 flex-col sm:flex-row">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-2 text-gray-700 bg-white rounded  border  focus:border-red-400 focus:outline-none"
              />

              <input
                type="text"
                placeholder="First Name"
                className="w-full p-2 text-gray-700 bg-white rounded  border  focus:border-red-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex  items-center flex-col sm:flex-row gap-2">
            <label className="w-[100%] sm:w-[30%]">Phone Number</label>
            <div className="w-full">
              <input
                type="text"
                placeholder="+91*********"
                className="w-full p-2 text-gray-700 bg-white rounded  border  focus:border-red-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex   items-center flex-col sm:flex-row gap-2">
            <label className=" w-full sm:w-[30%]">Email</label>
            <div className="w-full">
              <input
                type="text"
                placeholder="ex@gmail.com"
                className="w-full p-2 text-gray-700 bg-white rounded  border  focus:border-red-400 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full flex justify-end ">
            <button className=" rounded p-[10px_25px] text-white bg-red-500">
              Save Changes
            </button>
          </div>
        </div>
      </div>

      <div className="shadow rounded my-8">
        <div className="p-[21px] flex items-center gap-3 ">
          <i class="fa-solid fa-lock"></i>
          <h3 className="text-lg font-semibold"> Change your password</h3>
        </div>
        <hr />
        <div className="p-[21px] flex gap-[21px] flex-col">
          <div className="flex  items-center flex-col sm:flex-row gap-2">
            <label className="w-[100%] sm:w-[30%]">New Password</label>
            <div className="w-full">
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full p-2 text-gray-700 bg-white rounded  border  focus:border-red-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex   items-center flex-col sm:flex-row gap-2">
            <label className=" w-full sm:w-[30%]">Confirm Password</label>
            <div className="w-full">
              <input
                type="password"
                placeholder="Confirm your new password"
                className="w-full p-2 text-gray-700 bg-white rounded  border  focus:border-red-400 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full flex justify-end ">
            <button className=" rounded p-[10px_25px] text-white bg-red-500">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
