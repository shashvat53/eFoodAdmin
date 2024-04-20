import React, { useRef, useState } from 'react';
import QRCodeGenerator from '../../../components/ui/QRCodeGenerator';
import { useReactToPrint } from 'react-to-print';

const QRCode = () => {
    const componentRef = useRef();
    const [logoUrl, setLogoUrl] = useState("https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png");

  // State for form inputs
  const [formData, setFormData] = useState({
    branch: '',
    name: '',
    description: '',
    openingTime: '',
    closingTime: '',
    phone: '',
    websiteLink: '',
    socialMediaName: '',
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'description' && value.length > 200) {
        
    } else {
        setFormData({
            ...formData,
            [name]: value,
          });
    }
    
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData); // Example: log form data to console
  };
  

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-2'>
      <div>
        <div ref={componentRef} id='print-area' className= 'printDiv print:mt-60 m-auto relative max-w-[400px] w-full max-h-[600px] bg-[url("https://i.pinimg.com/originals/00/9c/03/009c0338fb2613e882f5fc924cda840f.jpg")] bg-cover border-[1px] rounded-md h-screen py-6 pt-12'>
          <img className='h-24 m-auto logo' src={logoUrl} alt="" />
          <hr />
          <p className='text-center'>{formData?.name === '' ?'Company Name':formData?.name}</p>
          <hr />
          <span className='m-auto flex justify-center items-center my-3'>

            <QRCodeGenerator value={formData?.websiteLink !== '' ? formData?.websiteLink :''} />
          </span>
          <hr />
          <p className='text-center text-gray-500 text-xs px-5'>{formData?.description === '' ?'here Come the description':formData?.description}</p>
          <hr />
          <div className='w-3/4 m-auto p-3 bg-[#C2DED0] text-[#36425A] text-center my-2'>
            <p>OPEN DAILY</p>
            <span className='text-xs'>{formData?.openingTime === '' ?'00:00':formData?.openingTime} - {formData?.closingTime === '' ?'00:00':formData?.closingTime}</span>
          </div>
          <p className='text-center text-xs'>Phone number:- <span>{formData?.phone === '' ?'789***':formData?.phone}</span></p>
          <div className='absolute bottom-2  text-xs w-full'>
            <p className='text-center'>Social Media:- { formData?.socialMediaName}</p>
          </div>
        </div>
      </div>
      <div className='col-span-2'>
        <form onSubmit={handleSubmit}>
          <div className='w-full grid grid-flow-row grid-cols-1 min-h-fit rounded-xl overflow-hidden border shadow-lg pb-4 pt-5 mb-5'>
            <div className='w-full h-1/2  md:h-full px-5 py-2 flex flex-col'>
              <label htmlFor="branch">Branch <span className='text-red-500'>*</span></label>
              <select
                className='w-full px-2 py-2 mt-2 rounded-md border mb-4 focus:outline-red-400'
                name="branch"
                value={formData.branch}
                onChange={handleInputChange}
              >
                <option value="Main Branch">Main Branch</option>
                <option value="Branch 2">Branch 2</option>
                <option value="Bhopal">Bhopal</option>
                <option value="Delhi">Delhi</option>
              </select>
            </div>
            <div className="w-full h-1/2  md:h-full px-5 py-2 flex flex-col">
      <label htmlFor="logo-upload" className=" w-full border rounded-md hover:bg-gray-100  text-gray-700  py-2 px-4  cursor-pointer">
        Upload Logo
      </label>
      <input type="file" id="logo-upload" accept="image/*" className="hidden" onChange={handleLogoUpload} />
    </div>
            {/* Add similar input fields with two-way binding */}
            <div className='w-full h-1/2  md:h-full px-5 py-2'>
              <label htmlFor="title">Company Name <span className='text-red-500'>*</span></label>
              <input
                type="text"
                placeholder='Company Name'
                className='w-full px-2 py-2 mt-2 rounded-md border mb-4'
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className='w-full h-1/2  md:h-full px-5 py-2'>
              <label htmlFor="description">Description <span className='text-red-500'>*</span></label>
              <input
                type="text"
                placeholder='Description'
                className='w-full px-2 py-2 mt-2 rounded-md border mb-4'
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>

            <div className='flex'>
              <div className='w-full h-1/2  md:h-full px-5 py-2'>
                <label htmlFor="openingTime">Opening Time <span className='text-red-500'>*</span></label>
                <input
                  type="time"
                  placeholder='Opening Time'
                  className='w-full px-2 py-2 mt-2 rounded-md border mb-4'
                  name="openingTime"
                  value={formData.openingTime}
                  onChange={handleInputChange}
                />
              </div>
              <div className='w-full h-1/2  md:h-full px-5 py-2'>
                <label htmlFor="closingTime">Closing Time <span className='text-red-500'>*</span></label>
                <input
                  type="time"
                  placeholder='Closing Time'
                  className='w-full px-2 py-2 mt-2 rounded-md border mb-4'
                  name="closingTime"
                  value={formData.closingTime}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='flex'>
              <div className='w-full h-1/2  md:h-full px-5 py-2'>
                <label htmlFor="phone">Phone <span className='text-red-500'>*</span></label>
                <input
                  type="number"
                  placeholder='Phone'
                  className='w-full px-2 py-2 mt-2 rounded-md border mb-4'
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className='w-full h-1/2  md:h-full px-5 py-2'>
                <label htmlFor="websiteLink">Website Link <span className='text-red-500'>*</span></label>
                <input
                  type="text"
                  placeholder='Website Link'
                  className='w-full px-2 py-2 mt-2 rounded-md border mb-4'
                  name="websiteLink"
                  value={formData.websiteLink}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='w-full h-1/2  md:h-full px-5 py-2'>
              <label htmlFor="socialMediaName">Social Media Name <span className='text-red-500'>*</span></label>
              <input
                type="text"
                placeholder='Social Media Name'
                className='w-full px-2 py-2 mt-2 rounded-md border mb-4'
                name="socialMediaName"
                value={formData.socialMediaName}
                onChange={handleInputChange}
              />
            </div>
          </div>

                  
            </form>
            <div className='my-10  w-full flex items-center justify-center'>
                                {/* <button className='px-10 border-none rounded py-3 bg-gray-300'>Reset</button> */}
                                <button onClick={handlePrint} className='px-10 border-none rounded ml-4  py-3 bg-[#E35F4E] text-white'>Print</button>
                            </div>
        </div>
    </div>
  )
}

export default QRCode