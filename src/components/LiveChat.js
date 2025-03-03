import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, getRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [LiveChatmessage, setLiveChatMessage] = useState();
  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      // console.log("API Polling");
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
    <div>
      <div className="px-2 mx-2 border border-black w-[450px] h-[700px] rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        {chatMessage.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <div>
        <form
          className="w-full border border-black bg-gray-100 h-10 rounded-lg"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "prajeet shah",
                message: LiveChatmessage,
              })
            );
            setLiveChatMessage("");
          }}
        >
          <input
            className="w-3/4 h-9 rounded-lg bg-gray-200 px-2 text-lg border-none focus:outline-none"
            type="text"
            placeholder="chat here"
            value={LiveChatmessage}
            onChange={(e) => setLiveChatMessage(e.target.value)}
          />
          <button className="bg-red-600 text-white px-5 py-1 text-md rounded-lg ">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
