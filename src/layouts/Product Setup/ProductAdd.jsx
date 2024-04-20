import React, { useState } from "react";
import ToggleSwitch from "../../components/ui/ToggleSwitch";

const ProductAdd = () => {
  const [activeTab, setActiveTab] = useState("EN");

  return (
    <div
      className="py-4 px-4 sm:px-6 lg:px-8
        "
    >
      <div className="flex flex-wrap gap-2 items-center mb-6">
        <h2 className="text-xl mb-0 flex items-center gap-1">
          <img
            width="20"
            className="avatar-img"
            src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/product.png"
            alt=""
          />
          <span className="page-header-title font-semibold">
            Add New Product
          </span>
        </h2>
        <span className="inline-block py-1 px-2 text-sm font-semibold text-white bg-gray-500 rounded-full shadow-md">
          6
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-[100%] md:w-[50%] p-[21px] shadow rounded">
          <div className="flex flex-col gap-2">
            <label>Name</label>
            <input
              type="text"
              placeholder="New Product"
              className=" p-2 text-gray-700 bg-white rounded  border  focus:border-red-400 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2 mt-6">
            <label>Short Description</label>
            <textarea
              className="w-full max-w-xl p-4 text-gray-700 bg-white rounded  border    focus:border-red-400 focus:outline-none"
              rows="4"
              placeholder="Your message here..."
            ></textarea>
          </div>
        </div>

        <div className="w-[100%] md:w-[50%] p-[21px] shadow rounded-lg">
          <div>
            <p>
              Product Image{" "}
              <span className="text-red-600">* ( Ratio 1:1 )</span>
            </p>

            <div className="w-[200px] h-[200px] mx-auto mt-10">
              <input type="file" className=" hidden" id="image" />
              <label htmlFor="image" id="image">
                <img
                  src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/upload_img.png"
                  className="w-full h-full"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row gap-8">
        {/* Left Part */}
        <div className="w-[100%] md:w-[50%]">
          <div className="shadow   rounded pb-8">
            <div className="flex items-center gap-4 p-[21px] ">
              <i class="fa-solid fa-network-wired"></i>
              <span className="text-xl font-semibold">Category</span>
            </div>
            <hr className=" text-green-600" />

            <div className=" p-[21px]">
              <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label>Category</label>
                  <select className="outline-none p-2 border mt-2 rounded">
                    <option disabled>---Select--</option>
                    <option>---Select--</option>
                    <option>---Select--</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label>Sub Category</label>
                  <select className="outline-none p-2 border mt-2 rounded">
                    <option disabled>---Select--</option>
                    <option>---Select--</option>
                    <option>---Select--</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label>Item Type</label>
                  <select className="outline-none p-2 border mt-2 rounded">
                    <option disabled>---Select--</option>
                    <option>---Select--</option>
                    <option>---Select--</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label>Product Type</label>
                  <select className="outline-none p-2 border mt-2 rounded">
                    <option disabled>---Select--</option>
                    <option>---Select--</option>
                    <option>---Select--</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="shadow   rounded pb-8 my-8">
            <div className="flex items-center gap-4 p-[21px] ">
              <i class="fa-solid fa-dollar-sign"></i>
              <span className="text-xl font-semibold">Price Information</span>
            </div>
            <hr className=" text-green-600" />

            <div className=" p-[21px]">
              <div className="flex flex-col gap-2 mb-6">
                <label>Default Price</label>
                <input
                  type="text"
                  value={1}
                  className=" p-2 text-gray-700 bg-white rounded  border  focus:border-red-400 focus:outline-none"
                />
              </div>
              <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label>Discount Type</label>
                  <select className="outline-none p-2 rounded border mt-2">
                    <option disabled>---Select--</option>
                    <option>---Select--</option>
                    <option>---Select--</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label>Discount</label>
                  <input
                    type="text"
                    placeholder="EX: 5%"
                    className="mt-2 p-2 text-gray-700 bg-white rounded  border  focus:border-red-400 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Tax Type</label>
                  <select className="outline-none p-2 border mt-2 rounded">
                    <option disabled>---Select--</option>
                    <option>---Select--</option>
                    <option>---Select--</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label>Tax Rate</label>
                  <input
                    type="text"
                    placeholder="EX: $100"
                    className="mt-2 p-2 text-gray-700 bg-white rounded  border  focus:border-red-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="shadow   rounded pb-8 md:my-8">
            <div className="flex items-center gap-4 p-[21px] ">
              <i class="fa-solid fa-dollar-sign"></i>
              <span className="text-xl font-semibold">Stock Information</span>
            </div>
            <hr className=" text-green-600" />

            <div className=" p-[21px]">
              <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label>Stock Type</label>
                  <select className="outline-none p-2 rounded border mt-2">
                    <option disabled>---Select--</option>
                    <option>---Select--</option>
                    <option>---Select--</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Part */}
        <div className="w-[100%] md:w-[50%]">
          <div className="shadow rounded p-[21px] flex gap-8 items-center">
            <p>
              Turning visibility off will not show this product in the user app
              and website
            </p>
            <ToggleSwitch />
          </div>

          <div className="shadow   rounded pb-6 my-8 md:my-2">
            <div className="flex items-center gap-4 p-[21px] ">
              <i class="fa-solid fa-wand-magic-sparkles"></i>
              <span className="text-xl font-semibold">Availability</span>
            </div>
            <hr className=" text-green-600" />

            <div className=" p-[21px]">
              <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="input-label  ">Available From</label>
                  <input
                    type="time"
                    name="available_time_starts"
                    className="mt-2 form-control appearance-none block w-full  border border-gray-300 rounded-md p-2 focus:outline-none focus:bg-white focus:border-red-500"
                    defaultValue="10:30:00"
                    placeholder="Ex : 10:30 am"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="input-label  ">Available Till</label>
                  <input
                    type="time"
                    name="available_time_starts"
                    className="mt-2 form-control appearance-none block w-full  border border-gray-300 rounded-md p-2  focus:outline-none focus:bg-white focus:border-red-500"
                    defaultValue="10:30:00"
                    placeholder="Ex : 10:30 am"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="shadow   rounded pb-6 my-8">
            <div className="flex items-center gap-4 p-[21px] ">
              <i class="fa-solid fa-puzzle-piece"></i>
              <span className="text-xl font-semibold">Addons</span>
            </div>
            <hr className=" text-green-600" />
            <div className=" p-[21px]">
              <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2 ">
                  <label>Select Addon</label>
                  <input
                    type="text"
                    placeholder="Select Addon"
                    className=" p-2 text-gray-700 bg-white rounded  border  focus:border-red-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="shadow   rounded pb-6 my-8">
            <div className="flex  items-center gap-4 p-[21px] ">
              <i class="fa-solid fa-tag"></i>
              <span className="text-xl font-semibold">Tags</span>
            </div>
            <hr className=" text-green-600" />
            <div className=" p-[21px]">
              <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2 ">
                  <label>Search Tag</label>
                  <input
                    type="text"
                    placeholder="Enter Tags"
                    className=" p-2 text-gray-700 bg-white rounded  border  focus:border-red-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shadow   rounded pb-6 mb-8">
        <div className="flex items-center gap-4 p-[21px] ">
          <i class="fa-solid fa-chalkboard"></i>
          <span className="text-xl font-semibold">Product Variations</span>
        </div>
        <hr className=" text-green-600" />
        <div className=" p-[21px]">
          <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4">
            <button className="p-[8px_24px] border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded w-[300px]">
              Add New Variation
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="flex gap-6 ">
          <button className="p-[10px_25px] bg-gray-100 rounded-md shadow-md">
            Reset
          </button>
          <button className="p-[10px_25px] bg-red-400 rounded-md shadow-md text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductAdd;
