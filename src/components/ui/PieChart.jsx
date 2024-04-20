import React from 'react'

import { PieChart, Pie, Cell } from 'recharts';
const PieChar = () => {

const data = [
  { name: 'A', value: 34, color: '#803838' },
  { name: 'B', value: 27, color: '#75E59B' },
  { name: 'C', value: 31, color: '#FFA7A7' },
  { name: 'D', value: 3, color: '#000' },
  { name: 'D', value: 2, color: '#739BC2' },
  { name: 'D', value: 2, color: 'red' },
];
const cx = 200;
const cy = 200;
const iR = 80;
const oR = 150

const needle = ( data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });

};
return (
     <div className='w-full h-screen '>
     
         <PieChart width={500} height={400}>
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
     </div>
    );
  }

export default PieChar