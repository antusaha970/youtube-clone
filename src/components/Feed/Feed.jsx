import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../../utils/API/fetchFromAPI";
import { SideBar, Videos } from "../";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      console.log(data)
    );
  }, [selectedCategory]);
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
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
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
          <span>{selectedCategory} </span>
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
