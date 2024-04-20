import React from 'react'
import Toggle from '../../components/layouts/Toggle'
// import Footer from '../components/layouts/Footer';
const PushNotification = () => {

    const data = [
        {
            name: 'Order pending message',
            description: '{userName} Your order {orderId} has been placed successfully.'
        },
        {
            name: 'Order confirmation message',
            description: 'Your order {orderId} has been confirmed by {restaurantName}.'
        },
        {
            name: 'Order processing message',
            description: 'Your order {orderId} is processing.'
        },
        {
            name: 'Order out for delivery message',
            description: 'Your order {orderId}  has been sent to delivery by {restaurantName}.'
        },
        {
            name: 'Order delivered message',
            description: 'We delivered your order {orderId}.'
        },
        {
            name: 'Deliveryman assign message',
            description: '{deliveryManName} You have been given a new order {orderId}.'
        },
        {
            name: 'Customer notify message for deliveryman',
            description: 'Your order {orderId} has been given to a delivery person {deliveryManName}.'
        },
        {
            name: 'Customer notify message for food preparation time change',
            description: 'Your order {orderId} has been given to a delivery person {deliveryManName}.'
        },
        {
            name: 'Deliveryman start message',
            description: '{deliveryManName} Started delivery for order number {orderId}.'
        },
        {
            name: 'Deliveryman delivered message',
            description: '{userName} Your order {orderId} has been delivered.'
        },
        {
            name: 'Order returned message',
            description: 'Your ordered item has been returned by {restaurantName} Order ID {orderId}.'
        },
        {
            name: 'Order failed message',
            description: 'Your order {orderId} is failed.'
        },
        {
            name: 'Order canceled message',
            description: 'Your order has been canceled Order Number {orderId}.'
        },
        {
            name: 'Add fund wallet message',
            description: '{userName} Successfully added a fund to your wallet.'
        },
        {
            name: 'Add fund wallet bonus message',
            description: '{userName} Successfully added a bonus to your wallet.'
        },
    ];


    return (
       <div>
         <div className='w-full h-fit shadow-sm border rounded-b-md p-5 mb-12'>
            <div className='grid md:grid-cols-2 grid-cols-1 grid-flow-row gap-0  leading-none'>
                {data.map((item, index) => (
                    <div className='p-5' key={index}>
                        <div className='flex gap-5 mb-4 '>
                            <Toggle />
                            <p>{item.name}</p>
                        </div>
                        <input type="text" value={item.description} className='w-full py-2 border outline-none px-3 rounded-md' />
                    </div>
                ))}
            </div>
            <div className='w-full h-full gap-5 flex items-center justify-end'>
                <button className='px-8 rounded py-2 w-full md:w-fit  text-white font-semibold bg-[#FC6A57] mt-5 '>Save</button>
            </div>
        </div>
       </div>
    )
}

export default PushNotification