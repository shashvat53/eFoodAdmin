import React from 'react'

const OrderDetailsJson = () => {


    const AllOrder = [
        
            {
              orderId: "1A23B4C5",
              orderDate: "2023-01-01",
              orderTime: "12:00",
              deliveryDate: "2023-01-01",
              deliveryTime: "12:30",
              branch: "Main Branch",
              Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 50.00,
              paid: true,
              orderType: "Take Away",
              orderStatus: "Confirmed",
              status: "Confirmed",
              Type: "Dine In"
            },
            {
              orderId: "6D78E9F0",
              orderDate: "2023-01-02",
              orderTime: "13:00",
              deliveryDate: "2023-01-02",
              deliveryTime: "13:30",
              branch: "Branch 1",
              Costumer:{
                name:'Sanjay',
                contact:'+91 ********'
              },
              totalAmount: 75.50,
              paid: false,
              orderType: "Delivery",
              orderStatus: "Pending",
              status: "Cooking",
              Type: "Dine In"
            },
            {
              orderId: "GHIJ5432",
              orderDate: "2023-01-03",
              orderTime: "14:00",
              deliveryDate: "2023-01-03",
              deliveryTime: "14:30",
              branch: "Branch 2",
              Costumer:{
                name:'Vivek',
                contact:'+91 ********'
              },
              totalAmount: 100.25,
              paid: true,
              orderType: "Take Away",
              orderStatus: "Out For Delivery",
              status: "Ready For Serve",
              Type: "Dine In"
            },
            {
              orderId: "KLMN6789",
              orderDate: "2023-01-04",
              orderTime: "15:00",
              deliveryDate: "2023-01-04",
              deliveryTime: "15:30",
              branch: "Branch 3",
              Costumer:{
                name:'Rano',
                contact:'+91 ********'
              },
              totalAmount: 120.75,
              paid: false,
              orderType: "Delivery",
              orderStatus: "Delivered",
              status: "Completed",
              Type: "Dine In"
            },
            {
              orderId: "OPQR5432",
              orderDate: "2023-01-05",
              orderTime: "16:00",
              deliveryDate: "2023-01-05",
              deliveryTime: "16:30",
              branch: "Main Branch",
              Costumer:{
                name:'Adbocate',
                contact:'+91 ********'
              },
              totalAmount: 85.90,
              paid: true,
              orderType: "Take Away",
              orderStatus: "Failed To Deliver",
              status: "Canceled",
              Type: "Dine In"
            },
            {
              orderId: "STUV1234",
              orderDate: "2023-01-06",
              orderTime: "17:00",
              deliveryDate: "2023-01-06",
              deliveryTime: "17:30",
              branch: "Branch 1",
              Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 150.00,
              paid: true,
              orderType: "Delivery",
              orderStatus: "Canceled",
              status: "Canceled",
              Type: "Dine In"
            },
            {
              orderId: "WXYZ5678",
              orderDate: "2023-01-07",
              orderTime: "18:00",
              deliveryDate: "2023-01-07",
              deliveryTime: "18:30",
              branch: "Branch 2",
              Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 200.50,
              paid: false,
              orderType: "Take Away",
              orderStatus: "Returned",
              status: "On Table",
              Type: "Dine In"
            },
            {
              orderId: "1234ABCD",
              orderDate: "2023-01-08",
              orderTime: "19:00",
              deliveryDate: "2023-01-08",
              deliveryTime: "19:30",
              branch: "Branch 3",
              Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 250.75,
              paid: true,
              orderType: "Delivery",
              orderStatus: "Confirmed",
              status: "Confirmed",
              Type: "Dine In"
            },
            {
              orderId: "5678EFGH",
              orderDate: "2023-01-09",
              orderTime: "20:00",
              deliveryDate: "2023-01-09",
              deliveryTime: "20:30",
              branch: "Main Branch",
              Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 300.25,
              paid: false,
              orderType: "Take Away",
              orderStatus: "Pending",
              status: "Cooking",
              Type: "Dine In"
            },
            {
              orderId: "9IJKL123",
              orderDate: "2023-01-10",
              orderTime: "21:00",
              deliveryDate: "2023-01-10",
              deliveryTime: "21:30",
              branch: "Branch 1",
              Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 350.50,
              paid: true,
              orderType: "Delivery",
              orderStatus: "Out For Delivery",
              status: "Ready For Serve",
              Type: "Dine In"
            },
            {
              orderId: "MNOP4567",
              orderDate: "2023-01-11",
              orderTime: "22:00",
              deliveryDate: "2023-01-11",
              deliveryTime: "22:30",
              branch: "Branch 2",
              Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 400.75,
              paid: false,
              orderType: "Take Away",
              orderStatus: "Delivered",
              status: "Completed",
              Type: "Dine In"
            },
            {
              orderId: "QRST8901",
              orderDate: "2023-01-12",
              orderTime: "23:00",
              deliveryDate: "2023-01-12",
              deliveryTime: "23:30",
              branch: "Branch 3",
              Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 450.00,
              paid: true,
              orderType: "Delivery",
              orderStatus: "Failed To Deliver",
              status: "Canceled",
              Type: "Dine In"
            },
            {
              orderId: "UVWX2345",
              orderDate: "2023-01-13",
              orderTime: "00:00",
              deliveryDate: "2023-01-13",
              deliveryTime: "00:30",
              branch: "Main Branch",
              Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 500.25,
              paid: true,
              orderType: "Take Away",
              orderStatus: "Returned",
              status: "Canceled",
              Type: "Dine In"
            },
            {
              orderId: "YZAB6789",
              orderDate: "2023-01-14",
              orderTime: "01:00",
              deliveryDate: "2023-01-14",
              deliveryTime: "01:30",
              branch: "Branch 1",
              Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 550.50,
              paid: false,
              orderType: "Delivery",
              orderStatus: "Scheduled",
              status: "On Table",
              Type: "Dine In"
            },
            {
                orderId: "CDEF0123",
                orderDate: "2023-01-15",
                orderTime: "02:00",
                deliveryDate: "2023-01-15",
                deliveryTime: "02:30",
                branch: "Branch 2",
                Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 600.75,
                paid: true,
                orderType: "Take Away",
                orderStatus: "Confirmed",
                status: "Confirmed",
                Type: "Dine In"
              },
              {
                orderId: "GHIJ4567",
                orderDate: "2023-01-16",
                orderTime: "03:00",
                deliveryDate: "2023-01-16",
                deliveryTime: "03:30",
                branch: "Branch 3",
                Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 650.00,
                paid: false,
                orderType: "Delivery",
                orderStatus: "Pending",
                status: "Cooking",
                Type: "Dine In"
              },
              {
                orderId: "KLMN8901",
                orderDate: "2023-01-17",
                orderTime: "04:00",
                deliveryDate: "2023-01-17",
                deliveryTime: "04:30",
                branch: "Main Branch",
                Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 700.25,
                paid: true,
                orderType: "Take Away",
                orderStatus: "Out For Delivery",
                status: "Ready For Serve",
                Type: "Dine In"
              },
              {
                orderId: "OPQR2345",
                orderDate: "2023-01-18",
                orderTime: "05:00",
                deliveryDate: "2023-01-18",
                deliveryTime: "05:30",
                branch: "Branch 1",
                Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 750.50,
                paid: false,
                orderType: "Delivery",
                orderStatus: "Delivered",
                status: "Completed",
                Type: "Dine In"
              },
              {
                orderId: "STUV6789",
                orderDate: "2023-01-19",
                orderTime: "06:00",
                deliveryDate: "2023-01-19",
                deliveryTime: "06:30",
                branch: "Branch 2",
                Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 800.75,
                paid: true,
                orderType: "Take Away",
                orderStatus: "Failed To Deliver",
                status: "Canceled",
                Type: "Dine In"
              },
              {
                orderId: "WXYZ0123",
                orderDate: "2023-01-20",
                orderTime: "07:00",
                deliveryDate: "2023-01-20",
                deliveryTime: "07:30",
                branch: "Branch 3",
                Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 850.00,
                paid: true,
                orderType: "Delivery",
                orderStatus: "Canceled",
                status: "Canceled",
                Type: "Dine In"
              },
              {
                orderId: "4567ABCD",
                orderDate: "2023-01-21",
                orderTime: "08:00",
                deliveryDate: "2023-01-21",
                deliveryTime: "08:30",
                branch: "Main Branch",
                Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 900.25,
                paid: false,
                orderType: "Take Away",
                orderStatus: "Processing",
                status: "On Table",
                Type: "Dine In"
              },
              {
                orderId: "8901EFGH",
                orderDate: "2023-01-22",
                orderTime: "09:00",
                deliveryDate: "2023-01-22",
                deliveryTime: "09:30",
                branch: "Branch 1",
                Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 950.50,
                paid: true,
                orderType: "Delivery",
                orderStatus: "Confirmed",
                status: "Confirmed",
                Type: "Dine In"
              },
              {
                orderId: "IJKL2345",
                orderDate: "2023-01-23",
                orderTime: "10:00",
                deliveryDate: "2023-01-23",
                deliveryTime: "10:30",
                branch: "Branch 2",
                Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 1000.75,
                paid: false,
                orderType: "Take Away",
                orderStatus: "Processing",
                status: "Cooking",
                Type: "Dine In"
              },
              {
                orderId: "MNOP6789",
                orderDate: "2023-01-24",
                orderTime: "11:00",
                deliveryDate: "2023-01-24",
                deliveryTime: "11:30",
                branch: "Branch 3",
                Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 1050.00,
                paid: true,
                orderType: "Delivery",
                orderStatus: "Out For Delivery",
                status: "Ready For Serve",
                Type: "Dine In"
              },
              {
                orderId: "QRST0123",
                orderDate: "2023-01-25",
                orderTime: "12:00",
                deliveryDate: "2023-01-25",
                deliveryTime: "12:30",
                branch: "Main Branch",
                Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 1100.25,
                paid: true,
                orderType: "Take Away",
                orderStatus: "Confirmed",
                status: "Confirmed",
                Type: "Dine In"
              },
              {
                orderId: "UVWX4567",
                orderDate: "2023-01-26",
                orderTime: "13:00",
                deliveryDate: "2023-01-26",
                deliveryTime: "13:30",
                branch: "Branch 1",
                Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 1150.50,
                paid: false,
                orderType: "Delivery",
                orderStatus: "Pending",
                status: "Cooking",
                Type: "Dine In"
              },
              {
                orderId: "YZAB8901",
                orderDate: "2023-01-27",
                orderTime: "14:00",
                deliveryDate: "2023-01-27",
                deliveryTime: "14:30",
                branch: "Branch 2",
                Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 1200.75,
                paid: true,
                orderType: "Take Away",
                orderStatus: "Out For Delivery",
                status: "Ready For Serve",
                Type: "Dine In"
              },
              {
                orderId: "CDEF2345",
                orderDate: "2023-01-28",
                orderTime: "15:00",
                deliveryDate: "2023-01-28",
                deliveryTime: "15:30",
                branch: "Branch 3",
                Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 1250.00,
                paid: false,
                orderType: "Delivery",
                orderStatus: "Delivered",
                status: "Completed",
                Type: "Dine In"
              },
              {
                orderId: "GHIJ6789",
                orderDate: "2023-01-29",
                orderTime: "16:00",
                deliveryDate: "2023-01-29",
                deliveryTime: "16:30",
                branch: "Main Branch",
                Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 1300.25,
                paid: true,
                orderType: "Take Away",
                orderStatus: "Failed To Deliver",
                status: "Canceled",
                Type: "Dine In"
              },
              {
                orderId: "KLMN0123",
                orderDate: "2023-01-30",
                orderTime: "17:00",
                deliveryDate: "2023-01-30",
                deliveryTime: "17:30",
                branch: "Branch 1",
                Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 1350.50,
                paid: false,
                orderType: "Delivery",
                orderStatus: "Canceled",
                status: "Canceled",
                Type: "Dine In"
              },
              {
                orderId: "OPQR4567",
                orderDate: "2023-01-31",
                orderTime: "18:00",
                deliveryDate: "2023-01-31",
                deliveryTime: "18:30",
                branch: "Branch 2",
                Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 1400.75,
                paid: true,
                orderType: "Take Away",
                orderStatus: "Scheduled",
                status: "On Table",
                Type: "Dine In"
              },
              {
                orderId: "STUV8901",
                orderDate: "2023-02-01",
                orderTime: "19:00",
                deliveryDate: "2023-02-01",
                deliveryTime: "19:30",
                branch: "Branch 3",
                Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 1450.00,
                paid: true,
                orderType: "Delivery",
                orderStatus: "Confirmed",
                status: "Confirmed",
                Type: "Dine In"
              },
              {
                orderId: "WXYZ2345",
                orderDate: "2023-02-02",
                orderTime: "20:00",
                deliveryDate: "2023-02-02",
                deliveryTime: "20:30",
                branch: "Main Branch",
                Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 1500.25,
                paid: false,
                orderType: "Take Away",
                orderStatus: "Pending",
                status: "Cooking",
                Type: "Dine In"
              },
              {
                orderId: "1234EFGH",
                orderDate: "2023-02-03",
                orderTime: "21:00",
                deliveryDate: "2023-02-03",
                deliveryTime: "21:30",
                branch: "Branch 1",
                Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 1550.50,
                paid: true,
                orderType: "Delivery",
                orderStatus: "Out For Delivery",
                status: "Ready For Serve",
                Type: "Dine In"
              },
              {
                orderId: "5678IJKL",
                orderDate: "2023-02-04",
                orderTime: "22:00",
                deliveryDate: "2023-02-04",
                deliveryTime: "22:30",
                branch: "Branch 2",
                Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 1600.75,
                paid: false,
                orderType: "Take Away",
                orderStatus: "Delivered",
                status: "Completed",
                Type: "Dine In"
              },
              {
                orderId: "9ABCMNOP",
                orderDate: "2023-02-05",
                orderTime: "23:00",
                deliveryDate: "2023-02-05",
                deliveryTime: "23:30",
                branch: "Branch 3",
                Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 1650.00,
                paid: true,
                orderType: "Delivery",
                orderStatus: "Failed To Deliver",
                status: "Canceled",
                Type: "Dine In"
              },
              {
                orderId: "QRST2345",
                orderDate: "2023-02-06",
                orderTime: "00:00",
                deliveryDate: "2023-02-06",
                deliveryTime: "00:30",
                branch: "Main Branch",
                Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 1700.25,
                paid: true,
                orderType: "Take Away",
                orderStatus: "Canceled",
                status: "Canceled",
                Type: "Dine In"
              },
              {
                orderId: "UVWX6789",
                orderDate: "2023-02-07",
                orderTime: "01:00",
                deliveryDate: "2023-02-07",
                deliveryTime: "01:30",
                branch: "Branch 1",
                Costumer:{
                name:'Random',
                contact:'+91 ********'
              },
              totalAmount: 1750.50,
                paid: false,
                orderType: "Delivery",
                orderStatus: "Scheduled",
                status: "On Table",
                Type: "Dine In"
              }
                            
          
    ]

  return (
    AllOrder
  )
}

export default OrderDetailsJson