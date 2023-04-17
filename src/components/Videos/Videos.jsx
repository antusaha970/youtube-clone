import { Box, Stack } from "@mui/material";
import React from "react";
import { VideoCard, ChannelCard, PlayListCard } from "../";

const Videos = ({ videos, direction, lastVideoRef }) => {
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {item.id.playlistId && <PlayListCard playListDetail={item} />}
        </Box>
      ))}
      <div ref={lastVideoRef || null}></div>
    </Stack>
  );
};

export default Videos;
