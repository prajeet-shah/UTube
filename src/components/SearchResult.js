import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import SearchResultsVideoContainer from "./SearchResultsVideoContainer";

const SearchResult = () => {
  const [videoItems, setVideoItems] = useState([]);
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("search_query"));

  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY; // Replace with your YouTube API Key
  const BASE_URL = "https://youtube.googleapis.com/youtube/v3/search";
  useEffect(() => {
    getSearchResults();
  }, []);

  const getSearchResults = async () => {
    let data = await fetch(
      `${BASE_URL}?part=snippet&maxResults=25&q=${encodeURIComponent(
        searchParams.get("search_query")
      )}&key=${API_KEY}`
    );
    let json = await data.json();
    setVideoItems(json.items);
    // console.log(json.items);
  };
  return (
    <div>
      <h1 className="px-5 text-2xl font-semibold">Search Results</h1>
      <SearchResultsVideoContainer videoItems={videoItems} />
    </div>
  );
};

export default SearchResult;
