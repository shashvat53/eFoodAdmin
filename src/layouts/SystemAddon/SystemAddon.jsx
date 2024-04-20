import React from 'react';
import { useDropzone } from 'react-dropzone';

const SystemAddon = () => {
    const onDrop = (acceptedFiles) => {
        // Do something with the acceptedFiles
        console.log(acceptedFiles);
    };

    const { getRootProps, getInputProps } = useDropzone({
        accept: ['.zip', 'application/zip', 'application/x-zip-compressed', 'application/octet-stream', 'folder'],
        multiple: false,
        onDrop,
    });

    return (
        <div >
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold flex gap-2'><img className='w-7' src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/app.png" alt="" />System Addon</h1>
                <p className='font-semibold text-red-500'>How the Setting Works <i className="ri-information-line"></i></p>
            </div>
            <div className='w-full mb-16  h-fit p-10 mt-8 border shadow-md rounded-md'>
               <div className='grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-10 w-full'>
               <div className="w-full">
                    <p>Upload Addon</p>
                    <div {...getRootProps({ className: 'dropzone border border-dashed rounded-lg p-4 h-40 flex items-center justify-center  mt-8 cursor-pointer hover:text-red-500 hover:border hover:border-black hover:border-solid' })}>
                        <input {...getInputProps()}/>
                        <p className='text-gray-400 text-center font-semibold'>Drag and drop  file or Browse file</p>
                    </div>
                </div>
                <div className='w-full'>
                    <p className='font-semibold mb-8'>Instructions</p>
                    <p>1. Please make sure, Your server php "upload_max_filesize" Value is grater or equal to 20MB. Current value is - 2MB
                    </p>
                    <p> 2. Please make sure, Your server php "post_max_size" Value is grater or equal to 20MB . Current value is - 8MB
                    </p>
                </div>
               </div>
                <div className='w-full h-full gap-5 flex items-center justify-end'>
                    <button className='px-8 rounded py-2 w-full md:w-fit  text-white font-semibold bg-[#FC6A57] mt-5 '>Upload</button>
                </div>
            </div>
        </div>
    );
};

export default SystemAddon;
