import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "JavaScript",
    "Web Development",
    "News",
    "Cristiano",
    "Cricket",
    "Tailwind",
    "Fitness",
    "Spiritual",
    "Paneer Bhurji",
    "Biryani",
    "T-Series",
  ];
  return (
    <div className="flex">
      {list.map((list) => {
        return <Button key={list} name={list} />;
      })}
    </div>
  );
};

export default ButtonList;
