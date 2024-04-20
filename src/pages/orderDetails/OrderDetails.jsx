import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const OrderDetails = () => {
  const Countdown = ({ targetDate }) => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearTimeout(timer);
    });

    return (
      <div className="text-center">
        <div className="flex justify-center space-x-4 text-blue-400">
          <div className="text-sm">
            <span>{timeLeft.days}</span>
            <span className="text-gray-600"> Days</span>
          </div>
          <div className="text-sm">
            <span>{timeLeft.hours}</span>
            <span className="text-gray-600"> Hours</span>
          </div>
          <div className="text-sm">
            <span>{timeLeft.minutes}</span>
            <span className="text-gray-600"> Minutes</span>
          </div>
          <div className="text-sm">
            <span>{timeLeft.seconds}</span>
            <span className="text-gray-600"> Seconds</span>
          </div>
        </div>
      </div>
    );
  };

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

  // Function to print table content
  const handlePrintTable = () => {
    const table = document.getElementById("printTable");
    const tableContent = table.innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = tableContent;
    window.print();

    document.body.innerHTML = originalContent;
  };

  return (
    <div className="bg-white p-5 w-full overflow-x-hidden">
      <h1 className="text-xl font-semibold my-2 ">
        <i className="ri-list-ordered text-red-400"></i> Order Details
      </h1>
      <div className="flex flex-col gap-3 md:flex-col lg:flex-row justify-center w-full">
        <div className="border flex flex-col gap-3 p-4 rounded-md bg-white shadow ">
          <div className="w-full flex flex-col sm:flex-col md:flex-row gap-1 justify-between ">
            <div className="flex flex-col gap-2 ">
              <p className="text-lg font-semibold">OrderID#100108</p>
              <p className="font-semibold">
                <i className="ri-store-line "></i> Branch:{" "}
                <span className="bg-blue-100 text-blue-400 p-1 px-3 rounded">
                  Main Branch
                </span>
              </p>
              <p className="text-sm text-gray-600">
                <span>Order Date & Time: </span>
                <i className="ri-calendar-2-line"></i>{" "}
                <span>07 Nov 2023 06:29:57 PM</span>
              </p>
            </div>
            <div className="flex flex-col  items-end gap-2">
              <button className=" px-6 py-2 rounded-md border border-gray-900 hover:bg-gray-900 hover:text-white">
                <i className="ri-road-map-line"></i> Show Location in Map
              </button>
              <Link to={'/order/details/print'} className="bg-sky-400 text-white font-semibold rounded-md hover:bg-sky-500 active:scale-95 px-5 py-3">
                <i className="ri-printer-line"></i>Print Invoice
              </Link>
              <p className="font-semibold">
                {" "}
                Status:{" "}
                <span className="bg-blue-100 text-blue-400 p-1 px-3 font-normal rounded">
                  Confirmed
                </span>
              </p>
              <p className="text-sm text-gray-600">
                <span>Payment Method: </span>{" "}
                <span className="text-black">Razor Pay</span>
              </p>
              <p className="text-sm text-gray-600">
                <span>Reference Code : </span>
                <i className="ri-calendar-2-line"></i>{" "}
                <span>pay_MxaIHuy6YQEehR</span>
              </p>
              <p className="font-semibold">
                {" "}
                Payment Status :{" "}
                <span className="bg-green-100 text-green-400 p-1 px-3 font-normal rounded">
                  Paid
                </span>
              </p>
              <p className="font-semibold">
                {" "}
                Order Type :{" "}
                <span className="bg-sky-100 text-sky-400 p-1 px-3 font-normal rounded">
                  Delivery
                </span>
              </p>
            </div>
          </div>
          <div className="overflow-x-auto w-full ">
          <div className="overflow-x-auto w-full" id="printTable">
            <table className="w-full whitespace-nowrap min-w-[800px]">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    SL
                  </th>
                  <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Item Details
                  </th>
                  <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Discount
                  </th>
                  <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tax
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-2 whitespace-nowrap">1</td>
                  <td className="px-6 py-2 whitespace-nowrap flex gap-2">
                    <img
                      src="https://efood-admin.6amtech.com/storage/app/public/product/2021-02-26-6038903ac16c7.png"
                      alt=""
                      className="w-16 h-16 rounded-md object-cover"
                    />
                    <div className="text-xs flex flex-col gap-2">
                      <p className="font-semibold">Zinger & Pop</p>
                      <p className="font-semibold">AddFun - <span className="font-normal">Mid Fries : <span className="font-normal">11.00$</span></span> Qty : <span className="font-normal">1</span> Addons</p>
                      <p className="font-semibold">Water : <span className="font-normal"> 1 x 15.00$</span></p>
                    </div>
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap">111</td>
                  <td className="px-6 py-2 whitespace-nowrap">0</td>
                  <td className="px-6 py-2 whitespace-nowrap">0</td>
                </tr>

                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
          </div>
          <hr />
          <div className="flex w-full justify-end">
            <div className="max-w-[500px] flex flex-col w-full gap-3">
              <p className="w-full flex justify-between"><span>Items Price :</span> <span> 111.00$</span></p>
              <p className="w-full flex justify-between"><span>Tax / Vat :</span> <span> 0.00$</span></p>
              <p className="w-full flex justify-between"><span>Addon Cost :</span> <span> 15.00$</span></p>
              <p className="w-full flex justify-between"><span>Item Discount :</span> <span> 0.00$</span></p>
              <p className="w-full flex justify-between"><span>Coupon Discount :</span> <span> -0.00$</span></p>
              <p className="w-full flex justify-between"><span>Delivery Fee :</span> <span> 10.00$</span></p>
              <hr />
              <p className="w-full flex font-semibold justify-between"><span>Total :</span> <span> 136.00$</span></p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border shadow-md rounded-md p-3 gap-3">
          <h1 className="text-center text-lg font-semibold">Order Setup</h1>
          <div>
            <h1 className=" font-semibold">Change Order Status</h1>
            <select
              name=""
              id=""
              className="w-full p-2 my-1 border focus:border-red-200 rounded-md"
            >
              {[
                "Pending",
                "Confirmed",
                "Processing",
                "Out For Delivery",
                "Delivered",
                "Returned",
                "Failed",
                "Canceled",
              ].map((item, key) => {
                return (
                  <option key={key} value={item}>
                    {" "}
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="w-full p-2 my-1 border flex justify-between focus:border-red-200 rounded-md">
            <span>Payment Status</span>
            <div className="flex gap-2 items-center text-lg font-semibold text-red-400">
              Paid:
              <input type="checkbox" className="text-2xl" name="" id="" />
            </div>
          </div>
          <div>
            <h1 className=" font-semibold">Delivery Date & Time</h1>
            <div className="w-full flex gap-2 ">
              <input
                type="date"
                className="p-2 my-1 border focus:border-red-200 rounded-md w-full"
              />
              <input
                type="time"
                className="p-2 my-1 border focus:border-red-200 rounded-md w-full"
              />
            </div>
          </div>
          <button className="px-5 w-full py-2 bg-red-400 text-white rounded-md">
            Assign Delivery Man
          </button>
          <div>
            <h1 className=" font-semibold">Food Preparation Time</h1>
            <div className="w-full p-2 flex my-1 border justify-between px-2 focus:border-red-200 rounded-md">
              <i className="ri-timer-line"></i>
              <Countdown targetDate={targetDate} />
              <i className="ri-pencil-fill"></i>
            </div>
          </div>
          <div className="w-full p-2 gap-3 flex flex-col my-1 border justify-between px-2 focus:border-red-200 rounded-md">
            <h1 className="font-semibold">
              <i className="ri-user-fill"></i> Delivery Information
            </h1>
            <p className="flex gap-4 text-gray-700 text-sm">
              Name : <span>Sangita</span>
            </p>
            <p className="flex gap-4 text-gray-700 text-sm">
              Contact : <span>+9184*******</span>
            </p>
            <p className="flex gap-4 text-gray-700 text-sm">
              Floor : <span>4</span>
            </p>
            <p className="flex gap-4 text-gray-700 text-sm">
              House : <span>8</span>
            </p>
            <p className="flex gap-4 text-gray-700 text-sm">
              Road : <span>2</span>
            </p>
            <hr />
            <p className="flex gap-4 text-gray-700 text-sm">
              <i className="ri-map-pin-line"></i>R949+QF8, Mirpur 10 Roundabout,
              Dhaka 1216, Bangladesh
            </p>
          </div>
          <div className="w-full p-2 gap-3 flex flex-col my-1 border justify-between px-2 focus:border-red-200 rounded-md">
            <h1 className="font-semibold">
              <i className="ri-user-fill"></i> Costumer Information
            </h1>
            <div className="flex gap-2">
              <img
                src="https://efood-admin.6amtech.com/public/assets/admin/img/160x160/img1.jpg"
                className="w-16 h-16 rounded-full"
                alt=""
              />
              <div>
                <p className="flex gap- font-semibold text-gray-700 text-sm">
                  Sangita Tamokar
                </p>
                <p className="flex gap-4 text-gray-700 text-sm">10 Orders</p>
                <p className="flex gap-2 text-gray-700 text-sm">
                  <i className="ri-phone-line"></i>+9184*****
                </p>
                <p className="flex gap-2 text-gray-700 text-sm">
                  <i className="ri-mail-line"></i>san******@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-2 gap-3 flex flex-col my-1 border justify-between px-2 focus:border-red-200 rounded-md">
            <h1 className="font-semibold">
              <i className="ri-user-fill"></i> Branch Information
            </h1>
            <div className="flex gap-2">
              <img
                src="https://efood-admin.6amtech.com/public/assets/admin/img/160x160/img1.jpg"
                className="w-16 h-16 rounded-full"
                alt=""
              />
              <div>
                <p className="flex gap- font-semibold text-gray-700 text-sm">
                  Main Branch
                </p>
                <p className="flex gap-4 text-gray-700 text-sm">
                  7 Orders served
                </p>
                <p className="flex gap-2 text-gray-700 text-sm">
                  <i className="ri-phone-line"></i>+964*****
                </p>
                <p className="flex gap-2 text-gray-700 text-sm">
                  <i className="ri-mail-line"></i>main******@gmail.com
                </p>
              </div>
            </div>
            <hr />
            <p className="flex gap-2 text-gray-700 text-sm font-semibold">
              <i className="ri-map-pin-line"></i>Delhi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
