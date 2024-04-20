import React from 'react'

const TransactionJson = () => {
    const transactions = [
        {
          SL: 1,
          TransactionId: "TXN001",
          Customer: "John Doe",
          Credit: 100,
          Debit: 0,
          Balance: 100,
          TransactionType: "Add fund by admin",
          CreatedAt: "2024-03-24T10:30:00"
        },
        {
          SL: 2,
          TransactionId: "TXN002",
          Customer: "Alice Smith",
          Credit: 0,
          Debit: 50,
          Balance: 50,
          TransactionType: "Order place",
          CreatedAt: "2024-03-24T11:15:00"
        },
        {
          SL: 3,
          TransactionId: "TXN003",
          Customer: "Bob Johnson",
          Credit: 200,
          Debit: 0,
          Balance: 250,
          TransactionType: "Add fund",
          CreatedAt: "2024-03-24T12:00:00"
        },
        {
          SL: 4,
          TransactionId: "TXN004",
          Customer: "Mary Williams",
          Credit: 0,
          Debit: 75,
          Balance: 175,
          TransactionType: "Referral order place",
          CreatedAt: "2024-03-24T13:45:00"
        },
        {
          SL: 5,
          TransactionId: "TXN005",
          Customer: "David Brown",
          Credit: 150,
          Debit: 0,
          Balance: 325,
          TransactionType: "Add fund bonus",
          CreatedAt: "2024-03-24T14:20:00"
        }
      ];
      
      
  return (
    transactions
  )
}

export default TransactionJson