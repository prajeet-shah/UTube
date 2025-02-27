import React from "react";

const Sidebar = () => {
  return (
    <div className="w-40 shadow-lg">
      <ul className="px-3">
        <li>Home</li>
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
