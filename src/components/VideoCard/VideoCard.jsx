import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoProfilePicture,
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
} from "../../utils/constants";
import { CheckCircle } from "@mui/icons-material";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <Card
        sx={{
          width: { md: "320px", xs: "100%" },
          borderRadius: "0",
          boxShadow: "none",
        }}
      >
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            height: 180,
            width: "100%",
          }}
        />
        <CardContent
          sx={{
            backgroundColor: "#1e1e1e",
            height: "106px",
          }}
        >
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography
              variant="subtitle1"
              color="#fff"
              sx={{
                fontWeight: "bold",
              }}
            >
              {snippet.title}
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="subtitle1" color="gray">
              {snippet.channelTitle}{" "}
              <CheckCircle
                sx={{
                  ml: "5px",
                  fontSize: "12px",
                }}
              />
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </Link>
  );
};

export default VideoCard;
