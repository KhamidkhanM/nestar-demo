import { Box, Container, Stack } from "@mui/material";
import withLayoutHome from "../libs/components/layout/layoutHome";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Stack>
      <Stack flexDirection={"column"}>
        <Stack>
          <Stack className="container">Popular Properties</Stack>
        </Stack>
        <Stack>
          <Stack className="container">Top Agents</Stack>
        </Stack>
        <Stack>
          <Stack className="container">Top Properties</Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default withLayoutHome(Home);
