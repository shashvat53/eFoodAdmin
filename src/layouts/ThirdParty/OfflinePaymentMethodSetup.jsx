import React from 'react'
import SearchBox from '../../components/ui/SearchBox'
import OfflinePaymentMethodTable from '../../components/ui/table/OfflinePaymentMethodTable'

const OfflinePaymentMethodSetup = () => {
    const data = [
        {
            PaymentMethodName:'Bank Payment',
            PaymentInfo:'XYZ Bank Service : XYZ Bank',
            RequiredInfoFromCustomer:'Branch | A/C Number | Reference | Payment note',
            Status:true
        }
    ]
  return (
    <div className='shadow-sm overflow-hidden py-6 mb-4'>
      <h1 className='text-2xl font-semibold pl-3'><i className="ri-shopping-bag-4-line text-red-400 font-semibold"></i> Add Offline Payment Method Setup</h1>
    
    
    <div className='flex gap-2 justify-between items-center p-3 flex-wrap'>
      <SearchBox/>
      
      <button className='border-red-400 hover:bg-red-400 hover:text-white border-2 px-4 py-2 rounded-md text-red-400 flex items-center justify-center gap-2'>
      <i className="ri-download-2-line"></i>
        Add New Method
        <i className="ri-add-line"></i>
        </button>
    </div>
    <div className='overflow-auto'>

    <OfflinePaymentMethodTable data={data}/>
    </div>
    </div>
  )
}

export default OfflinePaymentMethodSetup