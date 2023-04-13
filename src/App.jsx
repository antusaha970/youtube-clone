import { Box } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  ChannelDetail,
  Feed,
  NavBar,
  SearchFeed,
  VideoDetail,
} from "./components/Index/Index";
function App() {
  return (
    <Box sx={{ background: "#000" }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  );
}

export default App;
