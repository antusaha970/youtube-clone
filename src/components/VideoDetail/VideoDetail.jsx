import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../../utils/API/fetchFromAPI";
import { CheckCircle } from "@mui/icons-material";
import { Videos, CommentFeed } from "../";
const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    // For getting video details
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetails(data.items[0]);
    });

    // For getting suggested videos
    fetchFromAPI(
      `search?part=snippet&maxResults="10"&relatedToVideoId=${id}`
    ).then((data) => {
      const videoToShow = data.items.slice(0, 10);
      setVideos(videoToShow);
    });

    // For getting video comments
    fetchFromAPI(
      `commentThreads?part=snippet&videoId=${id}&maxResults="100"`
    ).then((data) => setComments(data.items));
  }, []);
  if (!videoDetails?.snippet) {
    return <h2>Loading</h2>;
  }
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetails;
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: "86px",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              className="react-player"
            />
            <Typography variant="h5" fontWeight="bold" p={2} color="#fff">
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                color: "#fff",
              }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant="h6" color="#fff">
                  {channelTitle}
                  <CheckCircle
                    sx={{
                      color: "gray",
                      fontSize: "12px",
                      pl: "5px",
                    }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography sx={{ opacity: 0.7 }} variant="body1">
                  {likeCount ? parseInt(likeCount).toLocaleString() : "hidden"}{" "}
                  likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          py={{ md: 1, xs: 5 }}
          px={2}
          justifyContent="center"
          alignItems="center"
        >
          <Videos direction="column" videos={videos} />
        </Box>
      </Stack>
      <Box>
        <CommentFeed comments={comments} />
      </Box>
    </Box>
  );
};

export default VideoDetail;
