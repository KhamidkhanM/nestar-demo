import { Box, Container, Stack } from "@mui/material";
import withLayoutHome from "../libs/components/layout/layoutHome";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <Stack flexDirection={"column"}>
          <Box>Popular Properties</Box>
          <Box>Top Agents</Box>
          <Box>Top Properties</Box>
          <Box>Events</Box>
        </Stack>
      </Container>
    </>
  );
};

export default withLayoutHome(Home);
