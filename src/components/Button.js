import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="py-2 px-3 m-2 bg-gray-300 rounded-lg hover:bg-black hover:text-white">
        {name}
      </button>
    </div>
  );
};

export default Button;
