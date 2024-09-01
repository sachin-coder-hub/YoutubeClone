import React from "react";

const VideoCard = ({ info }) => {
  if (!info) return null;
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  function formatViews(viewCount) {
    if (viewCount >= 1000000) {
      return (viewCount / 1000000).toFixed(1) + "M";
    } else if (viewCount >= 1000) {
      return (viewCount / 1000).toFixed(1) + "K";
    } else {
      return viewCount.toString();
    }
  }

  return (
    <div className="px-2 py-2 m-1 w-80  rounded-lg">
      <img src={thumbnails.medium.url} alt="video" className="rounded-lg " />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <div className="flex justify-between">
          <li>{channelTitle}</li>
          <li>{formatViews(statistics.viewCount)} Views</li>
        </div>
      </ul>
    </div>
  );
};

export default VideoCard;
