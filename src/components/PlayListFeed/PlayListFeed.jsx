import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../../utils/API/fetchFromAPI";
import { Box, Stack } from "@mui/material";
import { VideoCard } from "../";

const PlayListFeed = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`playlistItems?part=snippet&playlistId=${id}`).then((data) =>
      setVideos(data.items)
    );
  }, [id]);
  return (
    <Box
      sx={{
        minHeight: "90vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          p: 2,
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {videos.map((video) => (
          <Box key={video.id}>
            <VideoCard video={video} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PlayListFeed;
