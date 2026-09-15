import React from "react";
import Link from "next/link";
import { Stack, Box } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const Top = () => {
  return (
    <Stack className={"navbar"}>
      <Stack className={"navbar-main transparent"}>
        <Stack className={"container"}>
          <Box className={"logo-box"}>
            <Link href={"/"}>
              <img src={"/img/logo/logoWhite.svg"} alt={"logo"} />
            </Link>
          </Box>

          <Stack className={"router-box"}>
            <Link href={"/"}>
              <div>Home</div>
            </Link>
            <Link href={"/property"}>
              <div>Properties</div>
            </Link>
            <Link href={"/agent"}>
              <div>Agents</div>
            </Link>
            <Link href={"/community"}>
              <div>Community</div>
            </Link>
            <Link href={"/cs"}>
              <div>CS</div>
            </Link>
          </Stack>

          <Stack className={"user-box"}>
            <Box className={"join-box"}>
              <PersonOutlineIcon />
              <span>Login / Join</span>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Top;
