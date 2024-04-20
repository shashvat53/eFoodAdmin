import React from 'react'
// import Footer from '../components/layouts/Footer'
const Sms = () => {
  return (
    <div className='w-full min-h-fit mt-5'>
      <div className='w-full grid gap-8 grid-flow-row grid-cols-1 md:grid-cols-2 h-fit mt-8 mb-10'>
        <div className='w-full h-fit rounded-md border shadow-md'>
          <div className='py-4 border-b p-5 flex justify-between'>
            <p className='font-semibold'>Msg91</p>

          </div>
          <div className='px-5 pb-5'>
            <form action="">
              <div className='w-full mt-5'>
                <div className='flex'>
                  <label htmlFor="active" className="mr-4 flex items-center">
                    <input type="radio" id="active" name="status" value="active" className="mr-1 h-5 w-5" />
                    Active
                  </label>
                  <label htmlFor="inactive" className="flex items-center">
                    <input type="radio" id="inactive" name="status" value="inactive" className="mr-1 h-5 w-5" />
                    Inactive
                  </label>
                </div>
              </div>
              <div className='w-full mt-5'>
                <label htmlFor="ClientId" className="block mb-2">Template Id *</label>
                <input type="text" id="TemplateId" name="TemplateId" placeholder='Template Id *' className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none" />
              </div>
              <div className='w-full mt-5'>
                <label htmlFor="TeamId" className="block mb-2">Auth Key *</label>
                <input type="text" id="AuthKey" name="AuthKey" placeholder='Auth Key *' className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none" />
              </div>

              <div className='w-full mt-8 flex items-center justify-end'>
                <button className='px-6 py-2 bg-[#E35F4E] text-white rounded font-semibold'>Update</button>
              </div>
            </form>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Sms