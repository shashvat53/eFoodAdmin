import React from 'react'

const AllOrderJson = () => {
    const orders = [
        {
          sl: 1,
          orderId: "ORD001",
          orderDate: "2024-03-22",
          branch: "Branch A",
          totalAmount: 100.0,
          orderType: "Online",
          orderStatus: 'Pending'
        },
        {
          sl: 2,
          orderId: "ORD002",
          orderDate: "2024-03-23",
          branch: "Branch B",
          totalAmount: 150.0,
          orderType: "In-store",
          orderStatus: 'Confirmed'
        },
        {
          sl: 3,
          orderId: "ORD003",
          orderDate: "2024-03-24",
          branch: "Branch C",
          totalAmount: 200.0,
          orderType: "Online",
          orderStatus: 'Cooking'
        },
        {
          sl: 4,
          orderId: "ORD004",
          orderDate: "2024-03-25",
          branch: "Branch D",
          totalAmount: 250.0,
          orderType: "In-store",
          orderStatus: 'Ready For Serve'
        },
        {
          sl: 5,
          orderId: "ORD005",
          orderDate: "2024-03-26",
          branch: "Branch E",
          totalAmount: 300.0,
          orderType: "Online",
          orderStatus: 'Completed'
        },
        {
          sl: 6,
          orderId: "ORD006",
          orderDate: "2024-03-27",
          branch: "Branch F",
          totalAmount: 350.0,
          orderType: "In-store",
          orderStatus: 'Canceled'
        },
        {
          sl: 7,
          orderId: "ORD007",
          orderDate: "2024-03-28",
          branch: "Branch G",
          totalAmount: 400.0,
          orderType: "Online",
          orderStatus: 'On Table'
        },
        {
          sl: 8,
          orderId: "ORD008",
          orderDate: "2024-03-29",
          branch: "Branch H",
          totalAmount: 450.0,
          orderType: "In-store",
          orderStatus: 'Completed'
        },
        {
          sl: 9,
          orderId: "ORD009",
          orderDate: "2024-03-30",
          branch: "Branch I",
          totalAmount: 500.0,
          orderType: "Online",
          orderStatus: 'Canceled'
        },
        {
          sl: 10,
          orderId: "ORD010",
          orderDate: "2024-03-31",
          branch: "Branch J",
          totalAmount: 550.0,
          orderType: "In-store",
          orderStatus: 'Cooking'
        }
      ];
 
  return (
    orders
  )
}

export default AllOrderJson