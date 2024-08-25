import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-60">
      <ul className="p-2">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className="font-bold">You &gt; </h1>
      <ul className="p-2">
        <li>Music</li>
        <li>Business</li>
        <li>Sports</li>
        <li>Politics</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold">Subscriptions</h1>
      <ul className="p-2">
        <li>Music</li>
        <li>Business</li>
        <li>Sports</li>
        <li>Politics</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
