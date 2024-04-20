import React, { Fragment, useState } from 'react'
import DraftEditor from '../../components/editor/DraftEditor';
import OrderPlacement from '../../components/email template/OrderPlacement';
import OrderPlacementTemp from './pages/OrderPlacementTemp';
import OtpTempPage from './pages/OtpTempPage';
import OtpTemplate from '../../components/email template/OtpTemplate';
import RegisterTemplate from '../../components/email template/RegisterTemplate';
import RegisterTemplatePage from './pages/RegisterTemplatePage';

const EmailTemplate = () => {
    const [isOpen, setIsOpen] = useState("OrderPlacement");
    const [logoUrl, setLogoUrl] = useState("https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png");
    const [emailTXT, setEmailTXT] = useState('here is come dummy text')
    const [allData, setAllData] = useState({
      privacyPolicy: true,
    mainTitle: '',
    contactUs: false,
    cancelationPolicy: false,
    refundPolicy: false,
    buttonName: '',
    btnUrl: '',
    copyrightContent: 'Copyright 2024 Capri-Global. All right reserved',
    instagram: true,
    facebook: false,
    linkedin: false,
    twitter: false,
    Pinterest: false,
    })
  return (
    <div>
      <h1 className="text-2xl font-semibold pl-3 flex gap-2 items-center">
        <i className="ri-mail-add-fill text-red-400 font-semibold"></i>
        Email Templates
      </h1> 
      <div className={`w-full flex gap-3 my-2 flex-wrap font-semibold`}>
        <div
          onClick={() => setIsOpen("OrderPlacement")}
          className={`cursor-pointer px-3 py-2 border-b-2 ${
            isOpen == "OrderPlacement" ? "border-red-400 text-red-400 font-bold" : "border-white"
          }`}
        >
          Order Placement
        </div>
        <div
          onClick={() => setIsOpen("ForgotPassword")}
          className={`cursor-pointer px-3 py-2 border-b-2 ${
            isOpen == "ForgotPassword" ? "border-red-400 text-red-400 font-bold" : "border-white"
          }`}
        >
          Forgot Password
        </div>
        <div
          onClick={() => setIsOpen("RegistrationOTP")}
          className={`cursor-pointer px-3 py-2 border-b-2 ${
            isOpen == "RegistrationOTP" ? "border-red-400 text-red-400 font-bold" : "border-white"
          }`}
        >
          Registration OTP
        </div>
        
      </div>
      <div className="p-5 rounded-md my-3 shadow-md">


      {isOpen === "OrderPlacement"
        ? <div className=' grid grid-flow-row md:grid-cols-1 lg:grid-cols-2 gap-2 justify-between w-full overflow-x-hidden'>
          <div>
          <OrderPlacement emailTXT={emailTXT} logoUrl={logoUrl} allData={allData}/>
          </div>
          <div>
            <OrderPlacementTemp setEmailTXT={setEmailTXT} setLogoUrl={setLogoUrl} setAllData={setAllData}/>
          </div>
        </div>
        : isOpen === "ForgotPassword"
        ? <div className=' grid grid-flow-row md:grid-cols-1 lg:grid-cols-2 gap-2 justify-between w-full overflow-x-hidden'>
        <div>
        <OtpTemplate emailTXT={emailTXT} logoUrl={logoUrl} allData={allData}/>
        </div>
        <div>
          <OtpTempPage  setEmailTXT={setEmailTXT} setLogoUrl={setLogoUrl} setAllData={setAllData}/>
        </div>
      </div>
        : isOpen === "RegistrationOTP"
        ? <div className=' grid grid-flow-row md:grid-cols-1 lg:grid-cols-2 gap-2 justify-between w-full overflow-x-hidden'>
        <div>
        <RegisterTemplate emailTXT={emailTXT} logoUrl={logoUrl} allData={allData}/>
        </div>
        <div>
          <RegisterTemplatePage setEmailTXT={setEmailTXT} setLogoUrl={setLogoUrl} setAllData={setAllData}/>
        </div>
      </div>
        : "no page is open"}
        </div>
    </div>
  )
}

export default EmailTemplate