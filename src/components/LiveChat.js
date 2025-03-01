import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.message);
  console.log(chatMessage);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("API Polling");
      dispatch(addMessage({name:"Prajeet Shah", message: "This is live chat"}))
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="px-2 mx-2 border border-black w-full h-[700px] rounded-lg bg-slate-100 py-2 overflow-y-scroll">
      <h1 className="font-bold py-1 mx-5 text-lg q">Livechat</h1>
      {chatMessage.map((c, i) => (
        <ChatMessage key={i} name={c.name} message={c.message} />
      ))}
      <ChatMessage name="prajeet shah" message="This is live chat" />
    </div>
  );
};

export default LiveChat;
