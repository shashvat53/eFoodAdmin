import React from 'react'
import PercentPie from '../../components/ui/PercentPie'

const SmallReportCard = ({title, value1, value2, color, icon}) => {
  return (
    <div className="w-full shadow-md p-3 rounded-md flex justify-between">
            <div className="flex items-center gap-2">
        <i className={`${icon} text-gray-500`}></i>
        <div>
            <h1>{title}</h1>
            <span className="flex gap-3 text-xs text-green-500"><i class="ri-line-chart-line"></i>0.00$</span>
        </div>
            </div>
            <div>
                <PercentPie value1={value1} value2={value2} color={color}/>
            </div>
        </div>
  )
}

export default SmallReportCard