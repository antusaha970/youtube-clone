import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { fetchFromAPI } from "../../utils/API/fetchFromAPI";
import { SideBar, Videos } from "../";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const lastVideoRef = useRef(null); // add a ref to the last video element
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      const { nextPageToken } = data;
      setVideos(data.items);
      setNextPageToken(nextPageToken);
    });
  }, [selectedCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && nextPageToken) {
          // fetch the next page of videos and append to the current list
          fetchFromAPI(
            `search?part=snippet&q=${selectedCategory}&pageToken=${nextPageToken}`
          ).then((data) => {
            const { nextPageToken } = data;
            setVideos((prevVideos) => [...prevVideos, ...data.items]);
            setNextPageToken(nextPageToken);
          });
        }
      },
      { rootMargin: "0px 0px 200px 0px" } // set the margin to trigger the intersection
    );

    if (lastVideoRef.current) {
      observer.observe(lastVideoRef.current); // observe the last video element
    }

    return () => {
      if (lastVideoRef.current) {
        observer.unobserve(lastVideoRef.current); // unobserve when the component unmounts
      }
    };
  }, [selectedCategory, nextPageToken]);
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
      <Box
        p={2}
        sx={{
          color: "white",
          overflowY: "auto",
          height: "90vh",
          flex: 2,
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={2}>
          <span>{selectedCategory} </span>
          <span
            style={{
              color: "#FA0606",
            }}
          >
            Videos
          </span>
        </Typography>

        <Videos videos={videos} lastVideoRef={lastVideoRef} />
      </Box>
    </Stack>
  );
};

export default Feed;
