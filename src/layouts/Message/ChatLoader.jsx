import React from 'react'

const ChatLoader = ({msgData})=>{


    return(
        <div className="w-full h-[600px]  rounded-md border-2 border-gray-100 flex flex-col">
          <div>
            <div className="flex gap-1 p-2 border-[1px] border-gray-200 rounded-md my-1 ">
              <img
                src="https://images.pngnice.com/download/2321/Administrator-PNG-Picture.png"
                className="w-12 rounded-full border-[1px] border-red-300"
                alt=""
              />
              <div>
                <h1 className="font-semibold ">{msgData?.name}</h1>
                <span className="text-sm text-gray-500"> {msgData?.contact}</span>
              </div>
            </div>
          </div>
          <div className="h-full flex flex-col">
            {msgData?.chat?.map((elem, ind)=>{

            if(elem.sender !== "admin") {

           return <div key={ind} className="w-full flex items-center justify-end">
                <div className="max-w-[80%] md:w-fit bg-red-200 shadow-md rounded-s-md p-3 my-2">
                    <p className="text-sm">{elem.msg}</p>
                    <span className="text-xs text-gray-500">{elem.time}</span>
                </div>
            </div>
            } else {
           return <div key={ind} className="w-full flex items-center justify-start">
                <div className="max-w-[80%] md:w-fit bg-blue-200 shadow-md rounded-e-md p-3 my-2">
                    <p className="text-sm">{elem.msg}</p>
                    <span className="text-xs text-gray-500">{elem.time}</span>
                </div>
            </div>
            }
})}
          </div>
          <div>
            <div>
              <div className=" flex items-center">
              <i className="ri-export-fill px-5 py-1 text-red-500 border-2 rounded-md hover:border-red-400 text-xl h-full"></i>
                <input
                  type="text"
                  placeholder="type message..."
                  className="w-full px-2 py-2  rounded-md border "
                />
                <button className="px-5 py-2 rounded-md bg-red-400 text-white font-semibold">Send</button>
              </div>
            </div>
          </div>
        </div>
    )

}

export default ChatLoader