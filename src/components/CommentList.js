import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  // console.log(comments);
  return (
    <div>
      {comments.map((comment, index) => (
        <div>
          <Comment key={index} data={comment} />
        </div>
      ))}
    </div>
  );
};

export default CommentList;
