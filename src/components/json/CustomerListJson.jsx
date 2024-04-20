import React from 'react'

const CustomerListJson = () => {
  const CustomerList = [
        {
            SL: 1,
            CustomerName: "John Doe",
            CustomerDetails: "john@example.com",
            TotalOrder: 5,
            TotalOrderAmount: 500
        },
        {
            "SL": 2,
            CustomerName: "Jane Smith",
            CustomerDetails: "jane@example.com",
            TotalOrder: 8,
            TotalOrderAmount: 800
        },
        {
            "SL": 3,
            CustomerName: "David Johnson",
            CustomerDetails: "david@example.com",
            TotalOrder: 3,
            TotalOrderAmount: 300
        },
        {
            "SL": 4,
            CustomerName: "Emily Brown",
            CustomerDetails: "emily@example.com",
            TotalOrder: 10,
            TotalOrderAmount: 1000
        },
        {
            "SL": 5,
            CustomerName: "Michael Wilson",
            CustomerDetails: "michael@example.com",
            TotalOrder: 6,
            TotalOrderAmount: 600
        }
    ]
    
  return (
    CustomerList
  )
}

export default CustomerListJson