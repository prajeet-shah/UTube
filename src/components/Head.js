import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  HAMBURGER_ICON,
  USER_ICON,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // api calls

    // make an API calls after every key press
    // but if the difference between two API calls is < 200ms
    // decline the API calls

    // API calls after 200 ms
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery][0]);
      } else {
        getSearchSuggestions();
      }
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
    try {
      console.log("API Call - " + searchQuery);
      let data = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          "https://suggestqueries.google.com/complete/search?client=firefox&q=" +
            searchQuery
        )}`
      );
      if (!data.ok) {
        throw new Error("Network response was not ok");
      }
      let json = await data.json();
      console.log(json);
      setSuggestions(json.contents ? JSON.parse(json.contents)[1] : []);
      dispatch(
        cacheResults({
          [searchQuery]: [json.contents ? JSON.parse(json.contents)[1] : []],
        })
      );
    } catch (error) {
      console.error("Failed to fetch search suggestions:", error);
    }
  };

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 my-4 shadow-lg ">
      <div className="flex col-span-1">
        <img
          className="h-8 mx-2 cursor-pointer"
          src={HAMBURGER_ICON}
          alt="hamburger"
          onClick={handleToggleMenu}
        />
        <div>
          <img className="h-8" src={YOUTUBE_LOGO} alt="youtube-logo" />
        </div>
      </div>

      <div className="col-span-10 items-center relative">
        <div>
          <input
            className=" bg-gray-100 rounded-l-full w-1/2  border border-black focus:outline-none px-6 py-2"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />

          <button className=" border border-black col-span-1 bg-gray-100  px-6 rounded-r-3xl py-2 text-md ">
            Search
          </button>
        </div>
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute  bg-white w-[44rem] rounded-lg px-4 py-3 shadow-lg mx-2 border border-gray-100">
            <ul>
              {suggestions.map((s, index) => (
                <li
                  key={index}
                  className="hover:bg-gray-100 py-1"
                  onMouseEnter={() => {
                    setSearchQuery(s);
                  }}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1 ">
        <img className="h-8" src={USER_ICON} alt="user-icon" />
      </div>
    </div>
  );
};

export default Head;
