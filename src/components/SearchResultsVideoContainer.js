import React from "react";
import SearchVideo from "./SearchVideo";
import { Link } from "react-router";

const SearchResultsVideoContainer = ({ videoItems }) => {
  console.log(videoItems);
  if (!videoItems) return;
  return (
    <div>
      {videoItems.map((video) => (
        <Link key={video.id.videoId} to={`/watch/?v=${video.id.videoId}`}>
          <SearchVideo info={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResultsVideoContainer;
