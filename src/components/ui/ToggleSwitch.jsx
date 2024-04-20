import React from 'react';

const ToggleSwitch = ({ value, id }) => {
  const handleToggle = () => {
    onChange(!value, id); // Toggle the value
    // console.log(!value)

  };

  return (
    <div className="flex toggleDiv items-center justify-center w-fit  ">
      <label htmlFor={`toggle${id}`} className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            id={`toggle${id}`}
            type="checkbox"
            className="sr-only"
            checked={value}
            // onChange={handleToggle} // Add onChange event handler
          />
          <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
          <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
        </div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
