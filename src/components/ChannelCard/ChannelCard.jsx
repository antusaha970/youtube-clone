import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoProfilePicture,
} from "../../utils/constants";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "100%", md: "320px" },
        height: "326px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link
        to={
          channelDetail?.snippet?.channelId
            ? `/channel/${channelDetail?.snippet?.channelId}`
            : demoChannelUrl
        }
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet.channelTitle}
            sx={{
              borderRadius: "50%",
              width: "180px",
              height: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
            }}
          >
            {channelDetail?.snippet?.title}{" "}
            <CheckCircle
              sx={{
                ml: "5px",
                fontSize: "16px",
                color: "gray",
              }}
            />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography
              variant="p"
              sx={{
                color: "gray",
              }}
            >
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
