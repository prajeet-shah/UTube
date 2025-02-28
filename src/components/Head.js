import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    // api calls

    // make an API calls after every key press
    // but if the difference between two API calls is < 200ms
    // decline the API calls

    // API calls after 200 ms
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   *  key press - i
   *  render the component
   *  useEffect() called
   *  start the timer => make an API call after 200ms
   *
   *
   *  key press - ip
   *  destroy the component
   *  re-render the component
   *  useEffect() called again
   *  start the timer -> make an API call after 200ms
   *
   *
   *
   *
   *
   *
   */

  const getSearchSuggestions = async () => {
    console.log("API Call - " + searchQuery);
    let data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    let json = await data.json();
    console.log(json[1]);
  };

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 my-4 shadow-lg ">
      <div className="flex col-span-1">
        <img
          className="h-8 mx-2 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="hamburger"
          onClick={handleToggleMenu}
        />
        <img
          className="h-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
          alt="youtube-logo"
        />
      </div>

      <div className="col-span-10 items-center ">
        <input
          className=" bg-gray-100 rounded-l-full w-1/2  border border-black focus:outline-none px-6 py-2"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button className=" border border-black col-span-1 bg-gray-100  px-6 rounded-r-3xl py-2 text-md ">
          Search
        </button>
      </div>

      <div className="col-span-1 ">
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
