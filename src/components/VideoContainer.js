import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { Link } from "react-router";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);
  useEffect(() => {
    fetchVideoData();
  }, []);

  const fetchVideoData = async () => {
    let data = await fetch(YOUTUBE_VIDEO_API);
    let json = await data.json();
    // console.log(json.items);
    setVideoData(json.items);
  };

  return (
    <div className="flex flex-wrap justify-center mt-2">
      {videoData.map((video) => (
        <Link key={video.id} to={`/watch/?v=${video.id}`}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
