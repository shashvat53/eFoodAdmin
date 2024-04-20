import React, { useState } from 'react'
import DraftEditor from '../../../components/editor/DraftEditor'
import CustomCheckbox from '../../../components/ui/CustomCheckBox';

const OrderPlacementTemp = ({setEmailTXT , setLogoUrl, setAllData}) => {
  const [formData, setFormData] = useState({
    privacyPolicy: true,
    mainTitle: '',
    contactUs: false,
    cancelationPolicy: false,
    refundPolicy: false,
    buttonName: '',
    btnUrl: '',
    copyrightContent: 'Copyright 2023 Capri-Global. All right reserved',
    instagram: true,
    facebook: false,
    linkedin: false,
    twitter: false,
    Pinterest: false,
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
  const handleInputChange = (e) => {
    console.log('ee',e)
    const { name, value } = e.target;
    if (name === 'description' && value.length > 200) {
        
    } else {
        setFormData({
            ...formData,
            [name]: value,
          });
          setAllData({ ...formData,
            [name]: value,})
    }
    
  };
  const handleCheckBoxChange = (e)=>{
    const { name, checked } = e.target;
    
        setFormData({
            ...formData,
            [name]: checked,
          });
          setAllData({ ...formData,
            [name]: checked,})
   
  }
  return (
    <div>
      <div className="w-full h-1/2  md:h-full px-5 py-2 flex flex-col">
        <h1 className='text-gray-600 text-sm font-semibold'>Logo</h1>
      <label htmlFor="logo-upload" className=" w-full border rounded-md hover:bg-gray-100  text-gray-700  py-2 px-4  cursor-pointer">
        Upload Logo
      </label>
      <input type="file" id="logo-upload" accept="image/*" className="hidden" onChange={handleLogoUpload} />
    </div>
    <div className="w-full h-1/2  md:h-full px-5 py-2 flex flex-col">
        <h1 className='text-gray-600 text-sm font-semibold'> 
< i className="ri-timeline-view"></i> Header Content</h1>
      
    </div>
    
    <div className='w-full h-1/2  md:h-full px-5 py-2'>
              <label htmlFor="title" className='text-sm text-gray-600'>Main Title <span className='text-red-500'>(Default)</span></label>
              <input
                type="text"
                placeholder='Main Title'
                className='w-full px-2 py-2 mt-2 rounded-md border mb-4'
                name="mainTitle"
                // defaultValue={'Order Place'}
                value={formData.mainTitle}
                onChange={handleInputChange}
              />
            </div>
    <div className="w-full h-1/2  md:h-full px-5 py-2 flex flex-col">
    <label htmlFor="title" className='text-sm text-gray-600'>Mail Body Message(Default) <span className='text-red-500'></span></label>
    <div className='border overflow-x-hidden'>
                <DraftEditor setEmailTXT={setEmailTXT}/>
      </div>
    </div>
    <div className="w-full h-1/2  md:h-full px-5 py-2 flex flex-col">
        <h1 className='text-gray-600 text-sm font-semibold'> 
< i className="ri-timeline-view"></i> Button Content</h1>
      
    </div>
   
    <div className='flex'>
              <div className='w-full h-1/2  md:h-full px-5 py-2'>
                <label htmlFor="phone" className='text-sm text-gray-600'>Button Name(Default) <span className='text-red-500'></span></label>
                <input
                  type="text"
                  placeholder='Button Name'
                  className='w-full px-2 py-2 mt-2 rounded-md border mb-4'
                  name="buttonName"
                  value={formData.buttonName}
                  onChange={handleInputChange}
                />
              </div>
              <div className='w-full h-1/2  md:h-full px-5 py-2'>
                <label htmlFor="websiteLink" className='text-sm text-gray-600'>Redirect Link <span className='text-red-500'>*</span></label>
                <input
                  type="text"
                  placeholder='Redirect Link'
                  className='w-full px-2 py-2 mt-2 rounded-md border mb-4'
                  name="btnUrl"
                  value={formData.btnUrl}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="w-full h-1/2  md:h-full px-5 py-2 flex flex-col">
        <h1 className='text-gray-600 text-sm font-semibold'> 
< i className="ri-timeline-view"></i> Footer Content</h1>
      
    </div>
    <div className='w-full h-1/2  md:h-full px-5 py-2'>
              <label htmlFor="title" className='text-sm text-gray-600'>Section Text(Default) <span className='text-red-500'>(Default)</span></label>
              <input
                type="text"
                placeholder='Section Text'
                className='w-full px-2 py-2 mt-2 rounded-md border mb-4'
                name="sectionText"
                value={formData.sectionText}
                onChange={handleInputChange}
              />
            </div>
            <div className='w-full h-1/2  md:h-full px-5 py-2 my-3'>
              <label htmlFor="title" className='text-sm text-gray-600 my-1'>Page Links <span className='text-red-500'>(Default)</span></label>
              <div className='flex gap-2 text-sm  justify-between px-2'>
                <CustomCheckbox label={'Privacy Policy'} name={'privacyPolicy'} setValue={handleCheckBoxChange} value={formData.privacyPolicy}/>
              <CustomCheckbox label={'Refund Policy'}  name={'refundPolicy'} setValue={handleCheckBoxChange} value={formData.refundPolicy} />
              <CustomCheckbox label={'Cancelation Policy'} name={'cancelationPolicy'} setValue={handleCheckBoxChange} value={formData.cancelationPolicy}/>
              <CustomCheckbox label={'Contact Us'} name={'contactUs'} setValue={handleCheckBoxChange} value={formData.contactUs}/>
              </div>
            </div>
            <div className='w-full h-1/2  md:h-full px-5 py-2 my-3'>
              <label htmlFor="title" className='text-sm text-gray-600 my-1'>Social Media Links <span className='text-red-500'>(Default)</span></label>
              <div className='flex gap-2 text-sm  justify-between px-2'>
                <CustomCheckbox label={'Facebook'} name={'facebook'} setValue={handleCheckBoxChange} value={formData.facebook}/>
              <CustomCheckbox label={'Linkedin'}  name={'linkedin'} setValue={handleCheckBoxChange} value={formData.linkedin} />
              <CustomCheckbox label={'Twitter'} name={'twitter'} setValue={handleCheckBoxChange} value={formData.twitter}/>
              <CustomCheckbox label={'Pinterest'} name={'Pinterest'} setValue={handleCheckBoxChange} value={formData.Pinterest}/>
              <CustomCheckbox label={'Instagram'} name={'instagram'} setValue={handleCheckBoxChange} value={formData.instagram}/>
              </div>
            </div>
            <div className='w-full h-1/2  md:h-full px-5 py-2'>
                <label htmlFor="websiteLink" className='text-sm text-gray-600'>Copyright Content(Default)<span className='text-red-500'>*</span></label>
                <input
                  type="text"
                  placeholder='Copyright Content'
                  className='w-full px-2 py-2 mt-2 rounded-md border mb-4'
                  name="copyrightContent"
                  value={formData.copyrightContent}
                  onChange={handleInputChange}
                />
              </div>
            <div>
            <div className="flex justify-end">
        <div className="flex gap-6 ">
         
          <button className="p-[12px_25px] bg-red-400 rounded-md shadow-md text-white">
            Save
          </button>
        </div>
      </div>
              
            </div>
    </div>
  )
}

export default OrderPlacementTemp