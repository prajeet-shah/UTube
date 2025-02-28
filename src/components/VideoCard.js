import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);

  if (!info) return;

  const { title, thumbnails, channelTitle } = info.snippet;
  const { viewCount } = info.statistics;

  return (
    <div>
      <div className="m-2 shadow-lg w-72 rounded-lg">
        <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnails" />
        <ul>
          <li className="truncate">{title}</li>
          <li>{channelTitle}</li>
          <li> {viewCount}Views</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
