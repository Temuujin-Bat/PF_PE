import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
import { HomeLeftSide, HomeRightSide } from "../features/home";

export default function home() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid xs={12} sm={12} md={12} lg={8}>
          <HomeLeftSide />
        </Grid>

        <Grid xs={12} sm={12} md={12} lg={4}>
          <HomeRightSide />
        </Grid>
      </Grid>
    </Container>
  );
}
