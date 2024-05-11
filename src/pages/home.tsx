import Grid from "@mui/material/Unstable_Grid2";
import { HomeLeft, HomeRight } from "../features/home";
import { Container } from "@mui/material";

export default function home() {
  return (
    <Container maxWidth={"xl"}>
      <Grid container spacing={2}>
        <Grid xs={12} sm={12} md={12} lg={8}>
          <HomeLeft />
        </Grid>

        <Grid xs={12} sm={12} md={12} lg={4}>
          <HomeRight />
        </Grid>
      </Grid>
    </Container>
  );
}
