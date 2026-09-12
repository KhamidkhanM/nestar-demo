import { Container, Stack } from "@mui/material";
import withLayoutBasic from "../../libs/components/layout/layoutBasic";

const PropertyDetail = () => {
  <>
    <Stack sx={{ background: "#81c784" }}>Header Basic</Stack>
    <Container>PROPERTY DETAIL</Container>
    <Stack sx={{ background: "#a1887f" }}>Footer </Stack>
  </>;
  return <div>PROPERTY DETAIL</div>;
};

export default withLayoutBasic(PropertyDetail);
