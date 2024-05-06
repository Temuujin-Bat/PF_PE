import { Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function HomeRight() {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} sm={12} md={12} lg={12}>
        <Paper
          sx={{
            height: "250px",
            border: "1px solid rgba(255, 0, 0, .5)",
            padding: "30px",
            "&:hover": { border: "2px solid rgba(255, 0, 0, 1)" },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ab
          magnam ducimus harum unde obcaecati numquam expedita. Non provident
          veritatis ex! Saepe, quasi dicta molestias culpa ab quis totam.
          Corporis.
        </Paper>
      </Grid>

      <Grid xs={12} sm={12} md={12} lg={12}>
        <Paper
          sx={{
            height: "250px",
            border: "1px solid rgba(255, 0, 0, .5)",
            padding: "30px",
            "&:hover": { border: "2px solid rgba(255, 0, 0, 1)" },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ab
          magnam ducimus harum unde obcaecati numquam expedita. Non provident
          veritatis ex! Saepe, quasi dicta molestias culpa ab quis totam.
          Corporis.
        </Paper>
      </Grid>

      <Grid xs={12} sm={12} md={12} lg={12}>
        <Paper
          sx={{
            height: "184px",
            border: "1px solid rgba(255, 0, 0, .5)",
            padding: "30px",
            "&:hover": { border: "2px solid rgba(255, 0, 0, 1)" },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ab
          magnam ducimus harum unde obcaecati numquam expedita. Non provident
          veritatis ex! Saepe, quasi dicta molestias culpa ab quis totam.
          Corporis.
        </Paper>
      </Grid>
    </Grid>
  );
}
