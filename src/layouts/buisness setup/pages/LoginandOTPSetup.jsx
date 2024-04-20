import React from "react";

const LoginandOTPSetup = () => {
  return (
    <div>
      <form action="">
        <div className="w-full grid grid-flow-row md:grid-cols-3 sm:grid-cols-1 min-h-fit rounded-xl overflow-hidden border shadow-lg pb-4 pt-5 mb-5">
          <div className=" w-full h-1/2  md:h-full px-5 py-2">
            <label htmlFor="Title">
            Maximum OTP Submit Attempt <span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              placeholder=""
              defaultValue={3}
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
            />
          </div>
          <div className=" w-full h-1/2  md:h-full px-5 py-2">
            <label htmlFor="Title">
            Otp Resend Time <span className="text-red-500"> ( In Second )</span>
            </label>
            <input
              type="number"
              placeholder=""
              defaultValue={60}
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
            />
          </div>
          <div className=" w-full h-1/2  md:h-full px-5 py-2">
            <label htmlFor="Title">
            Temporary Block Time
 <span className="text-red-500"> ( In Second )</span>
            </label>
            <input
              type="number"
              placeholder=""
              defaultValue={600}
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
            />
          </div>
          <div className=" w-full h-1/2  md:h-full px-5 py-2">
            <label htmlFor="Title">
            Maximum Login Attempt <span className="text-red-500"></span>
            </label>
            <input
              type="number"
              placeholder=""
              defaultValue={60}
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
            />
          </div>
          <div className=" w-full h-1/2  md:h-full px-5 py-2">
            <label htmlFor="Title">
            Temporary Login Block Time
 <span className="text-red-500"> ( In Second )</span>
            </label>
            <input
              type="number"
              placeholder=""
              defaultValue={600}
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
            />
          </div>
        </div>
        <div className="my-10  w-full flex items-center justify-center">
          <button className="px-10 border-none rounded py-3 bg-gray-300">
            Reset
          </button>
          <button className="px-10 border-none rounded ml-4  py-3 bg-[#E35F4E] text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginandOTPSetup;
