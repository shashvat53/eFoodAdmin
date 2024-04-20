import React from 'react'
import { Cell,Pie, PieChart } from 'recharts';

const PercentPie = ({value1, value2, color}) => {
  
const data = [
    { name: 'A', value: value2, color: '#ddd' },
    { name: 'B', value: value1, color: color },
  ];
  const cx = 40;
  const cy = 40;
  const iR = 30;
  const oR = 40
  
  const needle = ( data, cx, cy, iR, oR, color) => {
    let total = 0;
    data.forEach((v) => {
      total += v.value;
    });
  
  };
  return (
       <div className='  relative'>
           <PieChart width={90} height={90} >
          <Pie
            dataKey="value"
            startAngle={360}
            endAngle={0}
            data={data}
            cx={cx}
            cy={cy}
            innerRadius={iR}
            outerRadius={oR}
            fill="#8884d8"
            stroke="none"
          >
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
          </Pie>
        </PieChart>
                <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit text-black'>{value1}</h1>
       </div>
      );
}

export default PercentPie