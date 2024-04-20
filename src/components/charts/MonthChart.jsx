import React from 'react'
// import { Pie } from 'react-chartjs-2'
import {ResponsiveContainer, LineChart , Line , XAxis, YAxis, CartesianGrid , Legend , Tooltip, PieChart, Pie ,Sector, Cell} from 'recharts' 
import DayChart from './DayChart'

export const MonthChartEarning = () => {
  const Earning =[
    {
      name:'Jan',
      Earning:0,
    },
    {
      name:'Feb',
      Earning:0,
    },
    {
      name:'Mar',
      Earning:0,
    },
    {
      name:'Apr',
      Earning:0,
    },
    {
      name:'May',
      Earning:0,
    },
    {
      name:'Jun',
      Earning:0,
    },
    {
      name:'Jul',
      Earning:0,
    },
    {
      name:'Aug',
      Earning:0,
    },
    {
      name:'Sep',
      Earning:0,
    },
    {
      name:'Oct',
      Earning:0,
    },
    {
      name:'Nov',
      Earning:0,
    },
    {
      name:'Dec',
      Earning:0,
    }
  ]

  


  return (
    <div className='w-full p-5'>
    <h1 className=' text-xl text-gray-500 font-semibold'> Month-Report </h1>
      <div className=''>
      <ResponsiveContainer width={"100%"} aspect={3}>
        <LineChart data={Earning}>
        <CartesianGrid strokeDasharray={'3 3'}/>
          {/* <XAxis dataKey={"name"} interval={"preserveStartEnd"} tickFormatter={(value) => value + " sikh lo "}/> */}
          <XAxis dataKey={"name"} interval={"preserveStartEnd"} />
          <YAxis/>
          <Legend/>
          <Tooltip />
          {/* <Tooltip contentStyle={ {backgroundColor: 'blue'}}/> */}
          {/* <Line type={'monotone'} dataKey={"fees"} stroke='green'/> */}
          <Line type={"monotone"} dataKey={"Earning"} stroke='red' activeDot={{r:5}}/>
        </LineChart>
      </ResponsiveContainer>
      </div>
     
    </div>
  )
}



export const MonthChartOrder = () => {
  const Order =[
    {
      name:'Jan',
      Order:0,
    },
    {
      name:'Feb',
      Order:0,
    },
    {
      name:'Mar',
      Order:0,
    },
    {
      name:'Apr',
      Order:0,
    },
    {
      name:'May',
      Order:0,
    },
    {
      name:'Jun',
      Order:0,
    },
    {
      name:'Jul',
      Order:0,
    },
    {
      name:'Aug',
      Order:0,
    },
    {
      name:'Sep',
      Order:0,
    },
    {
      name:'Oct',
      Order:0,
    },
    {
      name:'Nov',
      Order:0,
    },
    {
      name:'Dec',
      Order:0,
    }
  ]
  return (
    <>
       <div className='mt-16'>
      <ResponsiveContainer width={"100%"} aspect={3}>
        <LineChart data={Order}>
        <CartesianGrid strokeDasharray={'3 3'}/>
          {/* <XAxis dataKey={"name"} interval={"preserveStartEnd"} tickFormatter={(value) => value + " sikh lo "}/> */}
          <XAxis dataKey={"name"} interval={"preserveStartEnd"} />
          <YAxis/>
          <Legend/>
          <Tooltip />
          {/* <Tooltip contentStyle={ {backgroundColor: 'blue'}}/> */}
          {/* <Line type={'monotone'} dataKey={"fees"} stroke='green'/> */}
          <Line type={"monotone"} dataKey={"Order"} stroke='green' activeDot={{r:5}}/>
        </LineChart>
      </ResponsiveContainer>
      </div>
    </>
  )
}
