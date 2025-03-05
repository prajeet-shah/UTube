const Comment = ({ data }) => {
  const { authorDisplayName, textOriginal, authorProfileImageUrl } =
    data.snippet.topLevelComment.snippet;
  return (
    <div className="flex my-2">
      <img
        className="w-12 h-12 mx-1 rounded-full"
        src={authorProfileImageUrl}
        alt="user-icon"
      />
      <div className="px-3 bg-gray-100 w-full shadow-sm rounded-lg">
        <p className="font-bold">{authorDisplayName}</p>
        <p>{textOriginal}</p>
      </div>
    </div>
  );
};

export default Comment;
