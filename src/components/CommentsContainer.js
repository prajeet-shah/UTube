import React, { useEffect, useState } from "react";

import CommentList from "./CommentList";

const commentData = [
  {
    name: "prajeet shah",
    comment: "lorem is the best the best of all time",
    replies: [],
  },
  {
    name: "prajeet shah",
    comment: "lorem is the best the best of all time",
    replies: [
      {
        name: "prajeet shah",
        comment: "lorem is the best the best of all time",
        replies: [],
      },
      {
        name: "prajeet shah",
        comment: "lorem is the best the best of all time",
        replies: [],
      },
      {
        name: "prajeet shah",
        comment: "lorem is the best the best of all time",
        replies: [
          {
            name: "prajeet shah",
            comment: "lorem is the best the best of all time",
            replies: [],
          },
          {
            name: "prajeet shah",
            comment: "lorem is the best the best of all time",
            replies: [
              {
                name: "prajeet shah",
                comment: "lorem is the best the best of all time",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "prajeet shah",
    comment: "lorem is the best the best of all time",
    replies: [],
  },
  {
    name: "prajeet shah",
    comment: "lorem is the best the best of all time",
    replies: [
      {
        name: "prajeet shah",
        comment: "lorem is the best the best of all time",
        replies: [
          {
            name: "prajeet shah",
            comment: "lorem is the best the best of all time",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "prajeet shah",
    comment: "lorem is the best the best of all time",
    replies: [
      {
        name: "prajeet shah",
        comment: "lorem is the best the best of all time",
        replies: [
          {
            name: "prajeet shah",
            comment: "lorem is the best the best of all time",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "prajeet shah",
    comment: "lorem is the best the best of all time",
    replies: [],
  },
];

const CommentsContainer = ({ videoId }) => {
  const [videoComment, setVideoComment] = useState([]);
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY; // Replace with your API key
  const BASE_URL = "https://youtube.googleapis.com/youtube/v3/commentThreads";
  console.log(videoId);

  useEffect(() => {
    getCommentData();
  }, []);

  const getCommentData = async () => {
    let data = await fetch(
      `${BASE_URL}?part=snippet,replies&videoId=${videoId}&key=${API_KEY}`
    );
    let json = await data.json();
    console.log(json.items);
    setVideoComment(json.items);
  };

  if (!commentData) return;
  return (
    <div>
      <h1 className="font-bold text-3xl p-2 m-4">Comments: </h1>
      <div>
        <CommentList comments={videoComment} />
      </div>
    </div>
  );
};

export default CommentsContainer;
