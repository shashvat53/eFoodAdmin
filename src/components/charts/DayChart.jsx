import React from 'react'
import {ResponsiveContainer, LineChart , Line , XAxis, YAxis, CartesianGrid , Legend , Tooltip, PieChart, Pie ,Sector, Cell} from 'recharts' 
const App = () => {
  const Earning =[
    {
      name:1,
      Earning:0,
    },
    {
      name:2,
      Earning:0,
    },
    {
      name:3,
      Earning:0,
    },
    {
      name:4,
      Earning:0,
    },
    {
      name:5,
      Earning:0,
    },
    {
      name:6,
      Earning:0,
    },
    {
      name:7,
      Earning:0,
    },
    {
        name:8,
        Earning:0,
      },
      {
        name:9,
        Earning:0,
      },
      {
        name:10,
        Earning:0,
      },
      {
        name:11,
        Earning:0,
      },
      {
        name:12,
        Earning:0,
      },
      {
        name:13,
        Earning:0,
      },
      {
        name:14,
        Earning:0,
      },
      {
        name:15,
        Earning:0,
      },
      {
        name:16,
        Earning:0,
      },
      {
        name:17,
        Earning:0,
      },
      {
        name:18,
        Earning:0,
      },
      {
        name:19,
        Earning:0,
      },
      {
        name:20,
        Earning:0,
      },
      {
        name:21,
        Earning:0,
      },
      {
        name:22,
        Earning:0,
      },
      {
        name:23,
        Earning:0,
      },
      {
        name:24,
        Earning:0,
      },
      {
        name:25,
        Earning:0,
      },
      {
        name:26,
        Earning:0,
      },
      {
        name:27,
        Earning:0,
      },
      {
        name:28,
        Earning:0,
      },
      {
        name:29,
        Earning:0,
      },
      {
        name:30,
        Earning:0,
      },
      {
        name:31,
        Earning:0,
      }
      
  ]

  const Order =[
    {
        name:1,
        Order:0,
      },
      {
        name:2,
        Order:0,
      },
      {
        name:3,
        Order:0,
      },
      {
        name:4,
        Order:0,
      },
      {
        name:5,
        Order:0,
      },
      {
        name:6,
        Order:0,
      },
      {
        name:7,
        Order:0,
      },
      {
          name:8,
          Order:0,
        },
        {
          name:9,
          Order:0,
        },
        {
          name:10,
          Order:0,
        },
        {
          name:11,
          Order:0,
        },
        {
          name:12,
          Order:0,
        },
        {
          name:13,
          Order:0,
        },
        {
          name:14,
          Order:0,
        },
        {
          name:15,
          Order:0,
        },
        {
          name:16,
          Order:0,
        },
        {
          name:17,
          Order:0,
        },
        {
          name:18,
          Order:0,
        },
        {
          name:19,
          Order:0,
        },
        {
          name:20,
          Order:0,
        },
        {
          name:21,
          Order:0,
        },
        {
          name:22,
          Order:0,
        },
        {
          name:23,
          Order:0,
        },
        {
          name:24,
          Order:0,
        },
        {
          name:25,
          Order:0,
        },
        {
          name:26,
          Order:0,
        },
        {
          name:27,
          Order:0,
        },
        {
          name:28,
          Order:0,
        },
        {
          name:29,
          Order:0,
        },
        {
          name:30,
          Order:0,
        },
        {
          name:31,
          Order:0,
        }
  
  ]

  return (
    <div className='w-full h-screen py-8 mb-5'>
     <h1 className='font-black text-5xl ml-20 mb-10 mt-40'>DAY-CHART </h1>
      <div className=''>
      <ResponsiveContainer width={"60%"} aspect={3}>
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
      <div className='mt-16'>
      <ResponsiveContainer width={"60%"} aspect={3}>
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
    </div>
  )
}

export default App