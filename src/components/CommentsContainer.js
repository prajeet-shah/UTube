import React from "react";
import { USER_ICON } from "../utils/constants";

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

const Comment = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div className="flex my-2">
      <img className="w-12 h-12 mx-1" src={USER_ICON} alt="user-icon" />
      <div className="px-3 bg-gray-100 w-full shadow-sm rounded-lg">
        <p className="font-bold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  console.log(comments);
  return (
    <div>
      {comments.map((comment, index) => (
        <div>
          <Comment key={index} data={comment} />
          <div className="mx-10 border border-l-black border-r-0 border-t-0 border-b-0">
            <CommentList comments={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-2 m-4">Comments: </h1>
      <div>
        <CommentList comments={commentData} />
      </div>
    </div>
  );
};

export default CommentsContainer;
