import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { fetchFromAPI } from "../../utils/API/fetchFromAPI";
import { Videos } from "../";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const lastVideoRef = useRef(null);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      const { nextPageToken } = data;
      setVideos(data.items);
      setNextPageToken(nextPageToken);
    });
  }, [searchTerm]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && nextPageToken) {
          // Fetch the next page videos and append
          fetchFromAPI(
            `search?part=snippet&q=${searchTerm}&pageToken=${nextPageToken}`
          ).then((data) => {
            const { nextPageToken } = data;
            setVideos((prevVideos) => [...prevVideos, ...data.items]);
            setNextPageToken(nextPageToken);
          });
        }
      },
      { rootMargin: "0px 0px 200px 0px" }
    );

    if (lastVideoRef.current) {
      observer.observe(lastVideoRef.current); // observe the last video element
    }

    return () => {
      if (lastVideoRef.current) {
        observer.unobserve(lastVideoRef.current); // observe the last video element when the component unmounts
      }
    };
  }, [searchTerm, nextPageToken]);

  return (
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
        <span>{searchTerm} </span>
        <span
          style={{
            color: "#f31503",
          }}
        >
          Videos
        </span>
      </Typography>

      <Videos videos={videos} lastVideoRef={lastVideoRef} />
    </Box>
  );
};

export default SearchFeed;
