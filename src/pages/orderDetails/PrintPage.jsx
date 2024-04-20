import React from 'react'

const PrintPage = () => {
    const handlePrintTable = () => {
        const table = document.getElementById("printTable");
        const tableContent = table.innerHTML;
        const originalContent = document.body.innerHTML;
        document.body.innerHTML = tableContent;
        window.print();
        document.body.innerHTML = originalContent;
      };
  return (
    <div className='w-full print:justify-start flex items-center flex-col justify-center'>
        <button onClick={handlePrintTable} className="bg-sky-400 text-white font-semibold rounded-md hover:bg-sky-500 active:scale-95 px-5 py-3">
                <i className="ri-printer-line"></i>Print Invoice</button>
        <div id='printTable' className='w-fit print:w-[300px] print:max-w-[300px] print:item-start flex items-center flex-col justify-center'>

        <div  className='w-full  max-w-[400px] flex flex-col gap-1 items-center'>
            <div className='text-xl text-center font-bold'>
            <h1>BlockChainBoostUp Restaurant</h1>
            <h1>Restaurant Address, 123</h1>
            <h1>Phone : +8**********</h1>
            </div>
            <div className='w-full border-b border-black mt-1'></div>
            <div className='w-full border-b border-black mb-1'></div>
            <p className='flex w-full justify-between'><span className='font-semibold'>Order ID: #46465</span> <span>07/Nov/2023 06:11 pm</span></p>
            <p className='flex w-full gap-3'><span className='font-semibold'>Customer Name:</span> <span>Anika Tahosin</span></p>
            <p className='flex w-full gap-3'><span className='font-semibold'>Address:</span> <span>R949+QF8, Mirpur 10 Roundabout, Dhaka 1216, Bangladesh</span></p>
            <table className='w-full'>
      <thead>
        <tr>
          <th>QTY</th>
          <th>DESC</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            Zinger & Pop
            <div>Variation :</div>
            <div>AddFun -</div>
            <div>Large Juice : 22.00$</div>
            <div>Addons :</div>
            <div>Coke : 1 x 5.00$</div>
            <div>Discount : 0.00$</div>
          </td>
          <td>122.00$</td>
        </tr>
        <tr>
          <td></td>
          <td>Items Price:</td>
          <td>122.00$</td>
        </tr>
        <tr>
          <td></td>
          <td>Tax / VAT:</td>
          <td>0.00$</td>
        </tr>
        <tr>
          <td></td>
          <td>Addon Cost:</td>
          <td>5.00$</td>
        </tr>
        <tr>
          <td></td>
          <td>Subtotal:</td>
          <td>127.00$</td>
        </tr>
        <tr>
          <td></td>
          <td>Extra Discount:</td>
          <td>- 0.00$</td>
        </tr>
        <tr>
          <td></td>
          <td>Coupon Discount:</td>
          <td>- 0.00$</td>
        </tr>
        <tr>
          <td></td>
          <td>Delivery Fee:</td>
          <td>10.00$</td>
        </tr>
        <tr>
          <td></td>
          <td>Total:</td>
          <td>137.00$</td>
        </tr>
      </tbody>
    </table>
    
    <div className='w-full border-b border-black mt-1'></div>
            <div className='w-full border-b border-black mb-1'></div>
            <h1 className='text-xl text-center font-bold'>
            Thank You</h1>
            <div className='w-full border-b border-black mt-1'></div>
            <div className='w-full border-b border-black mb-1'></div>
        </div>
        </div>

    </div>
  )
}

export default PrintPage