import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { CommentCard } from "../";

const CommentFeed = ({ comments }) => {
  return (
    <Box
      sx={{
        background: "#1E1E1E",
        p: 2,
      }}
    >
      <Typography
        variant="subtitle1"
        component="h6"
        sx={{
          color: "#fff",
          pb: 1,
        }}
      >
        All Comments
      </Typography>
      <Stack>
        {comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </Stack>
    </Box>
  );
};

export default CommentFeed;
