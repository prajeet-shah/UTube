const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${YOUTUBE_API_KEY}`;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const OFFSET_LIVE_CHAT = 50;

export const USER_ICON =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s";

export const HAMBURGER_ICON =
  "https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png";

export const YOUTUBE_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png";
