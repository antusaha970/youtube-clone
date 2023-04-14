import React from "react";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  console.log(videoId, snippet);
  return <div>this is video card</div>;
};

export default VideoCard;
