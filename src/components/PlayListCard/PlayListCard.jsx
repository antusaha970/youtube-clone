import { PlaylistPlay } from "@mui/icons-material";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const PlayListCard = ({ playListDetail }) => {
  console.log(playListDetail);
  const {
    id: { playlistId },
    snippet: { channelId, title, channelTitle, thumbnails },
  } = playListDetail;
  return (
    <Card
      sx={{
        width: { md: "320px", xs: "100%" },
        borderRadius: "0",
        boxShadow: "none",
      }}
    >
      <Link to={`/playlist`}>
        <CardMedia
          image={thumbnails.high.url}
          sx={{
            height: "180px",
          }}
        />
        <CardContent
          sx={{
            backgroundColor: "#1e1e1e",
            height: "106px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
          <PlaylistPlay
            sx={{
              color: "#fff",
              fontSize: "30px",
            }}
          />
        </CardContent>
      </Link>
    </Card>
  );
};

export default PlayListCard;
