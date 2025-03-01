import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, getRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: getRandomMessage(),
        })
      );
    }, 600);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="px-2 mx-2 border border-black w-[450px] h-[700px] rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
      {chatMessage.map((c, i) => (
        <ChatMessage key={i} name={c.name} message={c.message} />
      ))}
      <ChatMessage name="prajeet shah" message="This is live chat" />
    </div>
  );
};

export default LiveChat;
