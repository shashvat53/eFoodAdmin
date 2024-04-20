import React from 'react'

const DeliverymanListJson = () => {
    const deliverymen = [
        {
          SL: 1,
          Name: "John Doe",
          Contact: "123-456-7890",
          TotalOrders: 20,
          Status: true,
          Action: "Edit"
        },
        {
          SL: 2,
          Name: "Alice Smith",
          Contact: "987-654-3210",
          TotalOrders: 15,
          Status: false,
          Action: "Delete"
        },
        {
          SL: 3,
          Name: "Bob Johnson",
          Contact: "456-789-0123",
          TotalOrders: 10,
          Status: true,
          Action: "Edit"
        },
        {
          SL: 4,
          Name: "Mary Williams",
          Contact: "789-012-3456",
          TotalOrders: 25,
          Status: true,
          Action: "Edit"
        },
        {
          SL: 5,
          Name: "David Brown",
          Contact: "321-654-9870",
          TotalOrders: 18,
          Status: false,
          Action: "Delete"
        }
      ];
      
      
  return (
    deliverymen
  )
}

export default DeliverymanListJson