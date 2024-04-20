import React, { useState } from 'react';

const Availability = () => {
    const [selectedBranch, setSelectedBranch] = useState('');
    const [hoveredDiv, setHoveredDiv] = useState(null);

    const handleBranchChange = (event) => {
        setSelectedBranch(event.target.value);
    };

    const handleMouseEnter = (divIndex) => {
        setHoveredDiv(divIndex);
    };

    const handleMouseLeave = () => {
        setHoveredDiv(null);
    };

    return (
        <div className='w-full min-h-fit flex flex-col justify-between'>
            <div>
            <div className='flex items-center gap-2 text-xl font-semibold'>
                <i className="ri-table-line"></i>
                <h1>Table Availability</h1>
            </div>

            <div className='w-full mb-20 border shadow-md p-5 rounded-md min-h-fit mt-5'>
                <form>
                    <select
                        className="w-[250px] text-md text-gray-600 bg-gray-50 rounded-md p-2 mb-4 mt-2 border focus:outline-none focus:outline-red-200 focus:outline-1"
                        onChange={handleBranchChange}
                        value={selectedBranch}
                    >
                        <option value=""> --Select Branch-- </option>
                        <option value="Branch 2">Branch 2</option>
                        <option value="Main Branch">Main Branch</option>
                    </select>
                </form>
                {selectedBranch === "Branch 2" && (
                    <div className='w-[70%]  m-auto h-fit mb-8 mt-4 grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3  items-center justify-center gap-10'>
                        {[1, 2, 3].map((index) => (
                            <div
                                key={index}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                className='relative w-full h-[200px] rounded-md bg-gray-200'
                            >
                                {hoveredDiv === index && (
                                    <div className='w-full h-[150px] bg-red-300 z-[9999] absolute -bottom-[76%]'></div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
                {selectedBranch === "Main Branch" && (
                    <div className='w-[70%] m-auto h-fit mb-8 mt-4 grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3  items-center justify-center gap-10'>
                        {[1, 2,3].map((index) => (
                            <div
                                key={index}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                className='relative w-full h-[200px] rounded-md bg-gray-300'
                            >
                                {hoveredDiv === index && (
                                    <div className='w-full h-[150px] bg-red-300 z-[9999] absolute -bottom-[76%]'></div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            </div>
        </div>
    );
};

export default Availability;
