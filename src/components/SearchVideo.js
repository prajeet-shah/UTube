import React from "react";

const SearchVideo = ({ info }) => {
  // console.log(info.snippet.thumbnails.medium.url);

  return (
    <div className="flex items-center shadow-sm bg-gray-100 rounded-lg py-2 my-4">
      <img className="px-4 rounded-lg" src={info.snippet.thumbnails.medium.url} alt="thumbnails" />
      <div className="px-2">
      <h1 className="font-bold text-2xl">{info.snippet.title}</h1>
      <h1 className="font-semibold">{info.snippet.channelTitle}</h1>
      <p>{info.snippet.description}</p>
      </div>
    </div>
  );
};

export default SearchVideo;
