import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const CommentCard = ({ comment }) => {
  if (!comment?.snippet) return <h6>loading...</h6>;
  const {
    snippet: {
      topLevelComment: {
        snippet: { authorDisplayName, authorProfileImageUrl, textOriginal },
      },
    },
  } = comment;
  console.log(authorDisplayName, authorProfileImageUrl, textOriginal);

  return (
    <Card
      sx={{
        background: "transparent",
        mb: 2,
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
      }}
    >
      <Stack direction="row" alignItems="center">
        <Box
          sx={{
            height: "50px",
            width: "50px",
          }}
        >
          <CardMedia
            image={authorProfileImageUrl}
            sx={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",
            }}
          />
        </Box>
        <CardContent
          sx={{
            ml: 2,
          }}
        >
          <Stack>
            <Typography
              variant="body2"
              component="p"
              sx={{
                color: "#fff",
                pb: 1,
              }}
            >
              {authorDisplayName}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{
                color: "gray",
                pb: 1,
              }}
            >
              {textOriginal}
            </Typography>
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default CommentCard;
