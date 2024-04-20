import React from 'react'
import {ResponsiveContainer, LineChart , Line , XAxis, YAxis, CartesianGrid , Legend , Tooltip, PieChart, Pie ,Sector, Cell} from 'recharts' 
const App = () => {
  const Earning =[
    {
      name:'Sunday',
      Earning:0,
    },
    {
      name:'Monday',
      Earning:0,
    },
    {
      name:'Tuesday',
      Earning:0,
    },
    {
      name:'Wednesday',
      Earning:0,
    },
    {
      name:'Thursday',
      Earning:0,
    },
    {
      name:'friday',
      Earning:0,
    },
    {
      name:'Saturday',
      Earning:0,
    },
    
  ]

  const Order =[
    {
      name:'Sunday',
      Order:0,
    },
    {
      name:'Monday',
      Order:0,
    },
    {
      name:'Tuesday',
      Order:0,
    },
    {
      name:'Wednesday',
      Order:0,
    },
    {
      name:'Thursday',
      Order:0,
    },
    {
      name:'Friday',
      Order:0,
    },
    {
      name:'Staurday',
      Order:0,
    },
  
  ]


  return (
    <div className='w-full h-screen p-5'>
    <h1 className='font-black text-5xl ml-20 mb-10 mt-20'>WEEK CHART</h1>
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