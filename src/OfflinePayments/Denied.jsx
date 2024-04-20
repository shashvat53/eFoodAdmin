import React, { useEffect, useState } from "react";
import VerifyOfflinePayment from "../helper/VerifyOfflinePayment";

const Denied = () => {
  const [deniedData, setDeniedData] = useState();
  const fetchDeniedData = async () => {
    try {
      const response = await VerifyOfflinePayment();
      console.log(response.billing, "denied data");
      setDeniedData(
        response.billing.filter((res) => res.paymentStatus === "denied")
      );
    } catch (error) {
      console.log(error, "error for denied data");
    }
  };
  useEffect(() => {
    fetchDeniedData();
  }, []);
  return (
    <div className="w-full min-w-[900px] m-auto px-1 lg:px-4 overflow-x-scroll">
      <table className="border border-grey-300 w-full mt-8">
        <thead>
          <tr>
            <th className="px-5 text-center py-3 border-b-2 border-gray-200 bg-gray-100 whitespace-nowrap text-sm font-bold text-gray-600 uppercase tracking-wider">
              SL
            </th>

            <th className="px-5 text-center py-3 border-b-2 border-gray-200 bg-gray-100 whitespace-nowrap text-sm font-bold text-gray-600 uppercase tracking-wider">
              Order ID
            </th>
            <th className="px-5 text-center py-3 border-b-2 border-gray-200 bg-gray-100 whitespace-nowrap text-sm font-bold text-gray-600 uppercase tracking-wider">
              Delivery Date
            </th>
            <th className="px-5 text-center py-3 border-b-2 border-gray-200 bg-gray-100 whitespace-nowrap text-sm font-bold text-gray-600 uppercase tracking-wider">
              Customer Info
            </th>
            <th className="px-5 text-center py-3 border-b-2 border-gray-200 bg-gray-100 whitespace-nowrap text-sm font-bold text-gray-600 uppercase tracking-wider">
              Total Amount
            </th>
            <th className="px-5 text-center py-3 border-b-2 border-gray-200 bg-gray-100 whitespace-nowrap text-sm font-bold text-gray-600 uppercase tracking-wider">
              Payment Method
            </th>
            <th className="px-5 text-center py-3 border-b-2 border-gray-200 bg-gray-100 whitespace-nowrap text-sm font-bold text-gray-600 uppercase tracking-wider">
              Verification Status
            </th>
            <th className="px-5 text-center py-3 border-b-2 border-gray-200 bg-gray-100 whitespace-nowrap text-sm font-bold text-gray-600 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {deniedData &&
            deniedData?.map((item, index) => {
              return (
                <tr key={index} className="hover:bg-blue-50">
                  <td className="text-center text-sm">{index + 1}</td>
                  <td className="text-center text-sm">{item.orderId}</td>
                  <td className="text-center text-sm">04-04-2024</td>
                  <td className="text-center text-sm">
                    <span>Arti</span> <br />
                    1234567890
                  </td>
                  <td className="text-center text-sm">{item.subTotal}</td>
                  <td className="text-center text-sm">Banking</td>
                  <td className="text-center text-sm">
                    <button className="text-sm text-center bg-blue-200 text-blue-900 rounded-lg p-2">
                      {item.paymentStatus}
                    </button>
                  </td>
                  <td className="text-center">
                    <button className="py-3 whitespace-nowrap px-8 text-sm bg-red-500 rounded-lg m-2 text-white text-center">
                      Verify Payment
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Denied;
