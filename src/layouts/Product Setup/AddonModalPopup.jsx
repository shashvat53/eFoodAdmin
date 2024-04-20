import React, { useState } from "react";

const AddonModalPopup = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("en");

  const handleTabClick = (lang) => {
    setActiveTab(lang);
  };

  const getLanguageName = (lang) => {
    switch (lang) {
      case "en":
        return "English(EN)";
      default:
        return "";
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-30 overflow-auto w-full h-full  flex">
      
      <div className="relative p-8 z-40 shadow-lg bg-white  w-full max-w-md m-auto flex-col flex rounded-lg">
        {/* Close button */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <span className="text-2xl">&times;</span>
          </button>
        </div>
        {/* Modal content */}
        <div className="">
          {/* Your form goes here */}
          <form
            action="https://efood-admin.6amtech.com/admin/attribute/store"
            method="post"
            className="  "
          >
            <ul className=" mb-6">
              {["en", "bn", "hi", "ar", "es"].map((lang) => (
                <li key={lang} className=" text-red-400">
                  <a
                    className={`  ${
                      activeTab === lang ? "active text-green-600" : ""
                    }`}
                    href={`#${lang}-form`}
                    onClick={() => handleTabClick(lang)}
                  >
                    {getLanguageName(lang)}
                  </a>
                </li>
              ))}
            </ul>
            <div className="row">
              <div className="col-12">
                {["en", "bn", "hi", "ar", "es"].map((lang) => (
                  <div
                    key={lang}
                    className={`form-group lang_form ${
                      activeTab === lang ? "" : "hidden"
                    }`}
                    id={`${lang}-form`}
                  >
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor={`name-${lang}`}
                    >
                      Name ({getLanguageName(lang)})
                    </label>
                    <input
                      type="text"
                      name="name[]"
                      id={`name-${lang}`}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="New attribute"
                      required=""
                      maxLength="255"
                      onInvalid={() => handleTabClick(lang)}
                    />
                    <input type="hidden" name="lang[]" value={lang} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                type="reset"
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Reset
              </button>
              <button
                type="submit"
                className="bg-[#fc6a57] hover:bg-[#fc6a59] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddonModalPopup;
