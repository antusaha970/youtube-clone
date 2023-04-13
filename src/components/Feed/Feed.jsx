import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { SideBar, Videos } from "../";

const Feed = () => {
  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar />
        <Typography
          variant="body2"
          className="copyright"
          sx={{
            mt: 1.5,
            color: "#fff",
          }}
        >
          Copyright 2023 Antu Dev.
        </Typography>
      </Box>
      <Box p={2}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: "white",
            overflowY: "auto",
            height: "90vh",
            flex: 2,
          }}
        >
          <span>New </span>
          <span
            style={{
              color: "#f31503",
            }}
          >
            Videos
          </span>
        </Typography>

        <Videos video={[]} />
      </Box>
    </Stack>
  );
};

export default Feed;
