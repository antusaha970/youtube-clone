import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../../utils/API/fetchFromAPI";
import { Box } from "@mui/material";
import { ChannelCard, Videos } from "../";
const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetails(data?.items[0]);
    });
    fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);
  return (
    <Box
      sx={{
        minHeight: "90vh",
      }}
    >
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 42%, rgba(0,212,255,1) 100%)",
            zIndex: "10",
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetails} marginTop="-120px" />
      </Box>
      <Box
        sx={{
          display: "flex",
          p: 2,
        }}
      >
        <Box
          sx={{
            mx: { sm: "100px" },
          }}
        >
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
