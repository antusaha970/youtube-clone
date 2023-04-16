import { CheckCircle, PlaylistPlay } from "@mui/icons-material";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const PlayListCard = ({ playListDetail }) => {
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
      <Link to={`/playlist/${playlistId}`}>
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
          }}
        >
          <Box
            sx={{
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
          </Box>
          <Typography
            variant="subtitle2"
            sx={{
              color: "gray",
            }}
          >
            {channelTitle}{" "}
            <CheckCircle
              sx={{
                ml: "5px",
                fontSize: "12px",
              }}
            />
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default PlayListCard;
