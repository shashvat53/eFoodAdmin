import React, { useState } from "react";
import BusinessSettings from "./pages/BusinessSettings";
import MainBranchSetup from "./pages/MainBranchSetup";
import RestaurantAvailabilityTimeSlot from "./pages/RestaurantAvailabilityTimeSlot";
import DeliveryFeeSetup from "./pages/DeliveryFeeSetup";
import CookiesSetup from "./pages/CookiesSetup";
import LoginandOTPSetup from "./pages/LoginandOTPSetup";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import QRCode from "./pages/QRCode";

const BusinessSetup = () => {
  const [isOpen, setIsOpen] = useState("BusinessSettings");

  return (
    <div>
      <h1 className="text-2xl font-semibold pl-3 flex gap-2 items-center">
        <i className="ri-truck-line text-red-400 font-semibold"></i>
        Business Setup
      </h1> 
      <div className={`w-full flex gap-3 my-2 flex-wrap font-semibold`}>
        <div
          onClick={() => setIsOpen("BusinessSettings")}
          className={`cursor-pointer px-3 py-2 border-b-2 ${
            isOpen == "BusinessSettings" ? "border-red-400 text-red-400 font-bold" : "border-white"
          }`}
        >
          Business Settings
        </div>
        <div
          onClick={() => setIsOpen("MainBranchSetup")}
          className={`cursor-pointer px-3 py-2 border-b-2 ${
            isOpen == "MainBranchSetup" ? "border-red-400 text-red-400 font-bold" : "border-white"
          }`}
        >
          Main Branch Setup
        </div>
        <div
          onClick={() => setIsOpen("RestaurantAvailabilityTimeSlot")}
          className={`cursor-pointer px-3 py-2 border-b-2 ${
            isOpen == "RestaurantAvailabilityTimeSlot"
              ? "border-red-400 text-red-400 font-bold"
              : "border-white"
          }`}
        >
          Restaurant Availability Time Slot
        </div>
        <div
          onClick={() => setIsOpen("DeliveryFeeSetup")}
          className={`cursor-pointer px-3 py-2 border-b-2 ${
            isOpen == "DeliveryFeeSetup" ? "border-red-400 text-red-400 font-bold" : "border-white"
          }`}
        >
          Delivery Fee Setup
        </div>
        <div
          onClick={() => setIsOpen("CookiesSetup")}
          className={`cursor-pointer px-3 py-2 border-b-2 ${
            isOpen == "CookiesSetup" ? "border-red-400 text-red-400 font-bold" : "border-white"
          }`}
        >
          Cookies Setup
        </div>
        <div
          onClick={() => setIsOpen("LoginandOTPSetup")}
          className={`cursor-pointer px-3 py-2 border-b-2 ${
            isOpen == "LoginandOTPSetup" ? "border-red-400 text-red-400 font-bold" : "border-white"
          }`}
        >
          Login and OTP Setup
        </div>
        <div
          onClick={() => setIsOpen("Customers")}
          className={`cursor-pointer px-3 py-2 border-b-2 ${
            isOpen == "Customers" ? "border-red-400 text-red-400 font-bold" : "border-white"
          }`}
        >
          Customers
        </div>
        <div
          onClick={() => setIsOpen("Orders")}
          className={`cursor-pointer px-3 py-2 border-b-2 ${
            isOpen == "Orders" ? "border-red-400 text-red-400 font-bold" : "border-white"
          }`}
        >
          Orders
        </div>
        <div
          onClick={() => setIsOpen("QRCode")}
          className={`cursor-pointer px-3 py-2 border-b-2 ${
            isOpen == "QRCode" ? "border-red-400 text-red-400 font-bold" : "border-white"
          }`}
        >
          QR Code
        </div>
      </div>
      <div className="p-5 rounded-md my-3 shadow-md">

      
      {isOpen === "BusinessSettings"
        ? <BusinessSettings/>
        : isOpen === "MainBranchSetup"
        ? <MainBranchSetup/>
        : isOpen === "RestaurantAvailabilityTimeSlot"
        ? <RestaurantAvailabilityTimeSlot/>
        : isOpen === "DeliveryFeeSetup"
        ? <DeliveryFeeSetup/>
        : isOpen === "LoginandOTPSetup"
        ? <LoginandOTPSetup/>
        : isOpen === "Customers"
        ? <Customers/>
        : isOpen === "Orders"
        ? <Orders/>
        : isOpen === "QRCode"
        ? <QRCode/>
        :isOpen === "CookiesSetup"
        ? <CookiesSetup/>: "no page is open"}
        </div>
    </div>
  );
};

export default BusinessSetup;
