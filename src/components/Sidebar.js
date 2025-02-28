import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Sidebar = () => {
  const toggleMenu = useSelector((store) => store.app.isMenuOpen);

  if (!toggleMenu) return null;
  return (
    <div className="w-52 shadow-lg">
      <ul className="px-3">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>

      <h1 className="font-bold px-3">Subscriptions</h1>
      <ul className="px-3">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className="font-bold px-3">Watch Later</h1>
      <ul className="px-3">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
