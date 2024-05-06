import { Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import HomeLeftThreeGrids from "./HomeLeftThreeGrids";

export default function HomeLeftSide() {
  return (
    <Grid container spacing={3}>
      <Grid xs={12} sm={12} md={12} lg={12} sx={{ height: "40vh" }}>
        <Paper sx={{ height: "100%" }}></Paper>
      </Grid>

      <Grid xs={12} sm={12} md={12} lg={12} sx={{ height: "40vh" }}>
        <HomeLeftThreeGrids />
      </Grid>
    </Grid>
  );
}
