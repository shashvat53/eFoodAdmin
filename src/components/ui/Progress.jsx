import { useState, useEffect } from 'react';

function CircularProgress({percent}) {
    const [circumference, setCircumference] = useState(0);
    const [currentSkill, setCurrentSkill] = useState({ percent: 55 }); // Example skill with 80% completion

    useEffect(() => {
        const calculateCircumference = () => {
            const radius = 120;
            const newCircumference = 2 * Math.PI * radius;
            setCircumference(newCircumference);
        };
        calculateCircumference();
    }, []);

    return (
        <div className="flex items-center justify-center">
            <svg className="transform -rotate-90  aspect-square h-12 w-12">
                <circle cx="145" cy="145" r="20" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-gray-00" />
                <circle
                    cx="145"
                    cy="145"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference - (currentSkill.percent / 100) * circumference}
                    className="text-blue-300"
                />
            </svg>
            {/* <span className="absolute text-5xl">{`${currentSkill.percent}%`}</span> */}
        </div>
    );
}

export default CircularProgress;
