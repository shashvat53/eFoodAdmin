import React from 'react';
import { useDropzone } from 'react-dropzone';
import drugFIle from '../../assets/drug_file.png'
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
    <div>
      
      <div className='w-full py-2 mt-3 '>
        <div className="flex flex-col items-center ">
          <div {...getRootProps({ className: '' })}>
            <input {...getInputProps()} />
            <img className='h-36' src={drugFIle} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SystemAddon;

