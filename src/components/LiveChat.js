import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessages({
          name: generateRandomName(),
          chat: makeRandomMessage(),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  });
  return (
    <>
      <div className="mx-4 p-2 border border-black w-[400px] h-[560px] rounded-lg shadow-sm bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} chat={c.chat} />
        ))}
      </div>
      <form
        className="mx-4 p-2 border border-black rounded-lg shadow-sm w-[400px] flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessages({
              name: "Sachin D",
              chat: liveMessage,
            })
          );
          setLiveMessage(" ");
        }}
      >
        <input
          type="text"
          className="w-[350px] px-2"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        ></input>
        <button className="w-5 h-5 cursor-pointer">
          <img
            src="https://www.vhv.rs/dpng/d/437-4370644_send-icon-png-image-free-download-searchpng-whatsapp.png"
            alt="Button Image"
          />
        </button>
      </form>
    </>
  );
};

export default LiveChat;
