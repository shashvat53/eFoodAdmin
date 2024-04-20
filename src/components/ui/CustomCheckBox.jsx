import React, { useState } from "react";

const CustomCheckbox = ({ label, name, setValue, value }) => {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="hidden"
          name={name}
          checked={value}
          onChange={setValue}
          
        />
        <div className="w-5 h-5 bg-white border-2 border-gray-400 rounded-md flex items-center justify-center  top-0 left-0 transition duration-300 ease-in-out">
          {value && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3 h-3 text-red-400"
            >
              <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"></path>
            </svg>
          )}
        </div>
      </div>
      <span className="ml-2 text-gray-700">{label}</span>
    </label>
  );
};

export default CustomCheckbox;
