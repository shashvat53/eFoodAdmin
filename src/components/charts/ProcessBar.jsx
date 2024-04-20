import React from 'react'
import { PieChart, Pie, Cell } from 'recharts';
const PieChar = () => {

const data = [
  { name: 'A', value: 80, color: '#803838' },
  { name: 'A', value: 20, color: '#fff' },

];
const cx = 100;
const cy = 100;
const iR = 50;
const oR = 80

const needle = ( data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });

};
return (
     <div className='w-full h-screen mt-52'>
         <PieChart width={200} height={200} className=''>
        <Pie
          dataKey="value" className='bg-gray-300'
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