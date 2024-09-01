import React from "react";

const ChatMessage = ({ name, chat }) => {
  return (
    <div className="flex items-center">
      <img
        src="https://yt3.ggpht.com/yti/ANjgQV-kOny_JuxUhT89NKtBhwIjwyvyh78ljjuTb-3k1es=s88-c-k-c0x00ffffff-no-rj"
        alt="User"
        className="w-10 h-10 rounded-full p-1"
      />
      <span className="text-gray-600 px-2">{name}</span>
      <span>{chat}</span>
    </div>
  );
};

export default ChatMessage;
