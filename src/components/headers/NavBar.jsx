import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({setIsAuth}) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false)

    const logOutUserHandler = ()=>{
     setIsAuth(false)
     setIsProfileOpen(false)
    }
  return (
    <nav className="w-full fixed top-0 left-0 h-16  flex items-center justify-end px-5 border-b-2 bg-white">
      <div className="w-fit flex gap-5 items-center">
        <span className=" gap-1 hidden sm:flex">
          <i className="ri-translate-2 "></i>
          <span className="font-semibold text-red-400">En</span>{" "}
          <i className="ri-arrow-down-s-line "></i>
        </span>
        <span className="relative h-full px-2 hidden sm:flex">
          <i className="ri-mail-line text-lg"></i>
          <span className="absolute flex h-4 w-4 -top-2 -right-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 text-xs bg-red-400 text-white items-center justify-center">
              0
            </span>
          </span>
        </span>

        <span className="relative h-full px-2 hidden sm:flex">
          <i className="ri-shopping-cart-line text-lg"></i>
          <span className="absolute flex h-4 w-4 -top-2 -right-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 text-xs bg-red-400 text-white items-center justify-center">
              0
            </span>
          </span>
        </span>

        <div className="h-full flex items-center justify-center gap-1 relative">
          <div onClick={()=>setIsProfileOpen(!isProfileOpen)} className="cursor-pointer">
            <p className="w-full text-end text-sm">Admin</p>
            <p className="text-xs text-gray-500">Master Admin</p>
          </div>
          <span className="relative cursor-pointer" onClick={()=>setIsProfileOpen(!isProfileOpen)}>
            <span className="absolute flex h-3 w-3 bottom-1 right-0">
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white text-white items-center justify-center"></span>
            </span>
            <img
              className="h-12 rounded-full"
              src="https://efood-admin.6amtech.com/storage/app/public/admin/2023-09-13-650156f48dc51.png"
              alt=""
            />
          </span>
          {isProfileOpen && <div className="absolute top-[140%] right-0 px-5 py-5 w-[250px] border-[1] border-[#919191] shadow-md rounded-md flex flex-col items-center justify-center gap-3 bg-white">
            <div className="border-b-2 pb-3 w-full">
              <div className="flex gap-2 items-center justify-start">
                <img
                  className="h-12 rounded-full"
                  src="https://efood-admin.6amtech.com/storage/app/public/admin/2023-09-13-650156f48dc51.png"
                  alt=""
                />
                <span>
                <p className="w-full text-sm">Admin</p>
                <p className="text-xs text-gray-500">a**********@admin.com</p>
                </span>
              </div>
            </div>
            <Link onClick={()=>setIsProfileOpen(false)} to="/profile/setting" className=" pb-2 border-b-2 w-full text-xs"> Setting</Link>
            <Link onClick={logOutUserHandler} to="/" className=" w-full text-xs"> Sign Out</Link>
          </div>}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
