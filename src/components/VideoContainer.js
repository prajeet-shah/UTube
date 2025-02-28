import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "../utils/constants";

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
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
