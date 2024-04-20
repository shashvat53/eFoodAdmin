import React, { Fragment } from 'react'
import SearchBox from '../components/ui/SearchBox'

const SubscribedCustomers = () => {
    const subscribers = [
        {
          SL: 1,
          Email: "john@example.com",
          SubscribedAt: "2024-03-24T08:00:00Z"
        },
        {
          SL: 2,
          Email: "alice@example.com",
          SubscribedAt: "2024-03-25T10:30:00Z"
        },
        {
          SL: 3,
          Email: "bob@example.com",
          SubscribedAt: "2024-03-26T12:45:00Z"
        },
        {
          SL: 4,
          Email: "mary@example.com",
          SubscribedAt: "2024-03-27T14:20:00Z"
        },
        {
          SL: 5,
          Email: "emma@example.com",
          SubscribedAt: "2024-03-28T16:00:00Z"
        }
      ];
      
      
  return (
    <div>
        <h1 className="text-2xl font-semibold pl-3 flex gap-2 items-center">
        <i className="ri-mail-star-line text-red-400 font-semibold"></i>  
        Subscribed Customers
      </h1>
      <div className='flex items-center flex-col gap-2 justify-end py-5 px-3'>
        <div className='w-full flex justify-end items-center'>

        <SearchBox/>
        
        </div>
        <div className='w-full'> 

        <div className='grid grid-flow-row w-full grid-cols-3 bg-blue-200 min-w-[700px] px-3'>
            <span >SL</span>
            <span >Email</span>
            <span >Subscribed At</span>

        </div>
        <div className='grid grid-flow-row grid-cols-3 w-full min-w-[700px] px-3'>
{

}           {subscribers ?subscribers.map((elem, ind)=>{
    return(
        <Fragment key={ind}>
          <span >{ind + 1}</span>
          <span >{elem.Email}</span>
          <span >{elem.SubscribedAt}</span>
        </Fragment>
    )
}):<h1>No Data to show here</h1>

           }

        </div>
        </div>


      </div>
    </div>
  )
}

export default SubscribedCustomers