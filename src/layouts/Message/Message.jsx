import React, { useState } from "react";
import UserChatJson from "../../components/json/UserChatJson";
import ChatLoader from "./ChatLoader";

const Message = () => {
  const [chatData, setChatData] = useState(UserChatJson());
  const [loadChat, setLoadChat] = useState()




  return (
    <div className="p-3">
      <h1 className="text-2xl flex items-center gap-2 font-semibold my-3">
        <i className="ri-message-2-line text-xl text-red-400"></i>Messages
      </h1>
      <div className="flex md:flex-row flex-col h-fit gap-2">
        <div className="max-w-[400px] w-full sm:w-[400px] max-h-[600px] border-2 border-gray-100 rounded-md p-3 overflow-hidden">
          <div className="flex items-center justify-start gap-2 p-2">
            <span className="relative cursor-pointer">
              <span className="absolute flex h-3 w-3 bottom-1 right-0">
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white text-white items-center justify-center"></span>
              </span>
              <img
                className="h-12 rounded-full"
                src="https://efood-admin.6amtech.com/storage/app/public/admin/2023-09-13-650156f48dc51.png"
                alt=""
              />
            </span>
            <div className="cursor-pointer">
              <p className="w-full  text-sm">Admin</p>
              <p className="text-xs text-gray-500">Master Admin</p>
            </div>
          </div>

          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search...."
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
            />
            <i className="ri-search-line absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>

          <div className="overflow-y-auto h-full">
            {chatData?.map((elem, ind) => {
              return (
                <div
                  key={ind} onClick={()=>setLoadChat(elem)}
                  className="flex gap-1 p-2 border-[1px] border-gray-400 rounded-md my-1 hover:border-red-300 cursor-pointer"
                >
                  <img
                    src="https://images.pngnice.com/download/2321/Administrator-PNG-Picture.png"
                    className="w-12 rounded-full border-[1px] border-red-300"
                    alt=""
                  />
                  <div>
                    <h1 className="font-semibold ">{elem.name}</h1>
                    <span className="text-sm text-gray-500">
                      {elem.contact}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {loadChat && <ChatLoader msgData={loadChat}/>}
      </div>
    </div>
  );
};

export default Message;
