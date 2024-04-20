import React from "react";

const ConfirmedJson = () => {
  const orders = [
    {
      sl: Math.floor(Math.random() * 100) + 1,
      orderId: "ORD" + (Math.floor(Math.random() * 1000) + 1),
      orderDate: "2024-03-" + (Math.floor(Math.random() * 30) + 1),
      branch:
        "Branch " + String.fromCharCode(65 + Math.floor(Math.random() * 10)),
      totalAmount: (Math.random() * 1000).toFixed(2),
      orderType: Math.random() < 0.5 ? "Online" : "In-store",
      orderStatus: "Confirmed",
    },
    {
      sl: Math.floor(Math.random() * 100) + 1,
      orderId: "ORD" + (Math.floor(Math.random() * 1000) + 1),
      orderDate: "2024-03-" + (Math.floor(Math.random() * 30) + 1),
      branch:
        "Branch " + String.fromCharCode(65 + Math.floor(Math.random() * 10)),
      totalAmount: (Math.random() * 1000).toFixed(2),
      orderType: Math.random() < 0.5 ? "Online" : "In-store",
      orderStatus: "Confirmed",
    },
    {
      sl: Math.floor(Math.random() * 100) + 1,
      orderId: "ORD" + (Math.floor(Math.random() * 1000) + 1),
      orderDate: "2024-03-" + (Math.floor(Math.random() * 30) + 1),
      branch:
        "Branch " + String.fromCharCode(65 + Math.floor(Math.random() * 10)),
      totalAmount: (Math.random() * 1000).toFixed(2),
      orderType: Math.random() < 0.5 ? "Online" : "In-store",
      orderStatus: "Confirmed",
    },
    {
      sl: Math.floor(Math.random() * 100) + 1,
      orderId: "ORD" + (Math.floor(Math.random() * 1000) + 1),
      orderDate: "2024-03-" + (Math.floor(Math.random() * 30) + 1),
      branch:
        "Branch " + String.fromCharCode(65 + Math.floor(Math.random() * 10)),
      totalAmount: (Math.random() * 1000).toFixed(2),
      orderType: Math.random() < 0.5 ? "Online" : "In-store",
      orderStatus: "Confirmed",
    },
    {
      sl: Math.floor(Math.random() * 100) + 1,
      orderId: "ORD" + (Math.floor(Math.random() * 1000) + 1),
      orderDate: "2024-03-" + (Math.floor(Math.random() * 30) + 1),
      branch:
        "Branch " + String.fromCharCode(65 + Math.floor(Math.random() * 10)),
      totalAmount: (Math.random() * 1000).toFixed(2),
      orderType: Math.random() < 0.5 ? "Online" : "In-store",
      orderStatus: "Confirmed",
    },
    {
      sl: Math.floor(Math.random() * 100) + 1,
      orderId: "ORD" + (Math.floor(Math.random() * 1000) + 1),
      orderDate: "2024-03-" + (Math.floor(Math.random() * 30) + 1),
      branch:
        "Branch " + String.fromCharCode(65 + Math.floor(Math.random() * 10)),
      totalAmount: (Math.random() * 1000).toFixed(2),
      orderType: Math.random() < 0.5 ? "Online" : "In-store",
      orderStatus: "Confirmed",
    },
    {
      sl: Math.floor(Math.random() * 100) + 1,
      orderId: "ORD" + (Math.floor(Math.random() * 1000) + 1),
      orderDate: "2024-03-" + (Math.floor(Math.random() * 30) + 1),
      branch:
        "Branch " + String.fromCharCode(65 + Math.floor(Math.random() * 10)),
      totalAmount: (Math.random() * 1000).toFixed(2),
      orderType: Math.random() < 0.5 ? "Online" : "In-store",
      orderStatus: "Confirmed",
    },
    {
      sl: Math.floor(Math.random() * 100) + 1,
      orderId: "ORD" + (Math.floor(Math.random() * 1000) + 1),
      orderDate: "2024-03-" + (Math.floor(Math.random() * 30) + 1),
      branch:
        "Branch " + String.fromCharCode(65 + Math.floor(Math.random() * 10)),
      totalAmount: (Math.random() * 1000).toFixed(2),
      orderType: Math.random() < 0.5 ? "Online" : "In-store",
      orderStatus: "Confirmed",
    },
    {
      sl: Math.floor(Math.random() * 100) + 1,
      orderId: "ORD" + (Math.floor(Math.random() * 1000) + 1),
      orderDate: "2024-03-" + (Math.floor(Math.random() * 30) + 1),
      branch:
        "Branch " + String.fromCharCode(65 + Math.floor(Math.random() * 10)),
      totalAmount: (Math.random() * 1000).toFixed(2),
      orderType: Math.random() < 0.5 ? "Online" : "In-store",
      orderStatus: "Confirmed",
    },
    {
      sl: Math.floor(Math.random() * 100) + 1,
      orderId: "ORD" + (Math.floor(Math.random() * 1000) + 1),
      orderDate: "2024-03-" + (Math.floor(Math.random() * 30) + 1),
      branch:
        "Branch " + String.fromCharCode(65 + Math.floor(Math.random() * 10)),
      totalAmount: (Math.random() * 1000).toFixed(2),
      orderType: Math.random() < 0.5 ? "Online" : "In-store",
      orderStatus: "Confirmed",
    },
  ];

  return orders;
};

export default ConfirmedJson;
