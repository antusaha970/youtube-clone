import { Stack } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.webp";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="logo" height={45} width={70} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default NavBar;
