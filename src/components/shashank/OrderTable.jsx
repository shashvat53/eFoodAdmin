import React from "react";
import { Link } from "react-router-dom";

function OrderTable({ tableData }) {
  console.log(tableData, "orderTable");
  // const tableData = [
  //   {
  //     sl: 1,
  //     orderId: 100089,
  //     deliveryDate: "09 Mar 2023",
  //     deliveryTime: "01:21 PM",
  //     customerInfo: "+8**********",
  //     branch: "Branch 2",
  //     totalAmount: "299.87$",
  //     orderStatus: "done",
  //     orderType: "Delivery",
  //   },
  //   {
  //     sl: 2,
  //     orderId: 100089,
  //     deliveryDate: "09 Mar 2023",
  //     deliveryTime: "01:21 PM",
  //     customerInfo: "+8**********",
  //     branch: "Branch 2",
  //     totalAmount: "299.87$",
  //     orderStatus: "done",
  //     orderType: "Delivery",
  //   },
  //   {
  //     sl: 3,
  //     orderId: 100089,
  //     deliveryDate: "09 Mar 2023",
  //     deliveryTime: "01:21 PM",
  //     customerInfo: "+8**********",
  //     branch: "Branch 2",
  //     totalAmount: "299.87$",
  //     orderStatus: "done",
  //     orderType: "Delivery",
  //   },
  //   {
  //     sl: 4,
  //     orderId: 100089,
  //     deliveryDate: "09 Mar 2023",
  //     deliveryTime: "01:21 PM",
  //     customerInfo: "+8**********",
  //     branch: "Branch 2",
  //     totalAmount: "299.87$",
  //     orderStatus: "done",
  //     orderType: "Delivery",
  //   },
  //   {
  //     sl: 5,
  //     orderId: 100089,
  //     deliveryDate: "09 Mar 2023",
  //     deliveryTime: "01:21 PM",
  //     customerInfo: "+8**********",
  //     branch: "Branch 2",
  //     totalAmount: "299.87$",
  //     orderStatus: "done",
  //     orderType: "Delivery",
  //   },
  // ];
  return (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">SL</th>
            <th className="px-4 py-2 text-left">Order ID</th>
            <th className="px-4 py-2 text-left">Delivery Date</th>
            <th className="px-4 py-2 text-left">Customer Info</th>
            <th className="px-4 py-2 text-left">Branch</th>
            <th className="px-4 py-2 text-left">Total Amount</th>
            <th className="px-4 py-2 text-left">Order Status</th>
            <th className="px-4 py-2 text-left">Order Type</th>
            <th className="px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((data, index) => (
            <tr key={index}>
              <td className="px-4 py-2">{data?.orderNumber}</td>
              <td className="px-4 py-2">
                <a
                  href="https://efood-admin.6amtech.com/admin/orders/details/100089"
                  className="text-blue-500 hover:text-blue-700"
                >
                  {data?.orderCode}
                </a>
              </td>
              <td className="px-4 py-2">
                <div>
                  {new Date(data?.createdAt).toISOString().split("T")[0]}
                </div>

                <div>
                  {
                    new Date(data?.createdAt)
                      .toISOString()
                      .split("T")[1]
                      .split(".")[0]
                  }
                </div>
              </td>
              <td className="px-4 py-2">
                <h6 className="text-capitalize mb-1">
                  <span
                    // href="https://efood-admin.6amtech.com/admin/customer/view/191"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Sir Moba
                  </span>
                </h6>
                <a
                  href="tel:+8801112223336"
                  className="text-blue-500 hover:text-blue-700"
                >
                  {data?.customerInfo}
                </a>
              </td>
              <td className="px-4 py-2">
                <span className="inline-block bg-blue-200 text-blue-800 px-2 py-1 rounded">
                  {data?.branchId?.branchName}
                </span>
              </td>
              <td className="px-4 py-2">
                <div>{data?.totalOrderPrice}</div>
                <span className="text-green-600">Paid</span>
              </td>
              <td className="px-4 py-2 text-capitalize">
                <span className="inline-block bg-red-200 text-red-800 px-2 py-1 rounded">
                  {data?.orderStatus}
                </span>
              </td>
              <td className="px-4 py-2">
                <span className="inline-block bg-green-200 text-green-800 px-2 py-1 rounded">
                  {data?.orderType}
                </span>
              </td>
              <td className="px-4 py-2 text-center">
                <div className="flex justify-center items-center gap-2">
                  <Link
                    to={"/order/details/view"}
                    className="btn btn-sm btn-outline-primary rounded-full p-2 hover:bg-blue-500 hover:text-white transition duration-300"
                  >
                    <i className="fa-solid fa-eye"></i>
                  </Link>
                  <Link
                    to={"/order/details/print"}
                    className="btn btn-sm btn-outline-success rounded-full p-2 hover:bg-green-500 hover:text-white transition duration-300"
>
                    <i className="fa-solid fa-floppy-disk"></i>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;
