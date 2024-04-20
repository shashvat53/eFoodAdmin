import React, { useEffect, useState } from 'react'
import DraftEdiorValue from '../../components/editor/DraftEdiorValue'
import TAndCJson from '../../components/json/TAndCJson';

const PageAndMedia = () => {
    const [isOpen, setIsOpen] = useState("AboutUs");
    const [data, setData] = useState(TAndCJson())

    useEffect(()=>{
        // console.log(data)
    },[data])

  return (
    <div>
<h1 className="text-2xl font-semibold pl-3 flex gap-2 items-center">
        <i className="ri-article-line text-red-400 font-semibold"></i>
        Page Setup
      </h1> 
      <div className={`w-full flex gap-3 my-2 flex-wrap font-semibold`}>
      <div
          onClick={() => setIsOpen("AboutUs")}
          className={`cursor-pointer px-3 py-2 border-b-2 ${
            isOpen == "AboutUs" ? "border-red-400 text-red-400 font-bold" : "border-white"
          }`}
        >
          About Us
        </div>
        <div
          onClick={() => setIsOpen("TermsandCondition")}
          className={`cursor-pointer px-3 py-2 border-b-2 ${
            isOpen == "TermsandCondition" ? "border-red-400 text-red-400 font-bold" : "border-white"
          }`}
        >
          Terms and Condition
        </div>
        <div
          onClick={() => setIsOpen("PrivacyPolicy")}
          className={`cursor-pointer px-3 py-2 border-b-2 ${
            isOpen == "PrivacyPolicy" ? "border-red-400 text-red-400 font-bold" : "border-white"
          }`}
        >
          Privacy Policy
        </div>
        <div
          onClick={() => setIsOpen("ReturnPolicy")}
          className={`cursor-pointer px-3 py-2 border-b-2 ${
            isOpen == "ReturnPolicy" ? "border-red-400 text-red-400 font-bold" : "border-white"
          }`}
        >
          Return Policy
        </div>
        <div
          onClick={() => setIsOpen("RefundPolicy")}
          className={`cursor-pointer px-3 py-2 border-b-2 ${
            isOpen == "RefundPolicy" ? "border-red-400 text-red-400 font-bold" : "border-white"
          }`}
        >
          Refund Policy
        </div>
        <div
          onClick={() => setIsOpen("CancellationPolicy")}
          className={`cursor-pointer px-3 py-2 border-b-2 ${
            isOpen == "CancellationPolicy" ? "border-red-400 text-red-400 font-bold" : "border-white"
          }`}
        >
          Cancellation Policy
        </div>
      </div>


{isOpen === "AboutUs"
        ? <DraftEdiorValue defaultText={data.AboutUs}/>
        : isOpen === "TermsandCondition"
        ? <DraftEdiorValue defaultText={data.TermsandCondition}/>
        : isOpen === "PrivacyPolicy"
        ? <DraftEdiorValue defaultText={data.PrivacyPolicy}/>
        : isOpen === "ReturnPolicy"
        ? <DraftEdiorValue defaultText={data.ReturnPolicy}/>
        : isOpen === "CancellationPolicy"
        ? <DraftEdiorValue defaultText={data.CancellationPolicy}/>
        : isOpen === "RefundPolicy"
        ? <DraftEdiorValue defaultText={data.RefundPolicy}/>
        :  "no page is open"}
        
    </div>

  )
}

export default PageAndMedia