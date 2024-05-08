import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import RightTimeZone from "./RightTimeZone";
import RightQuiz from "./RightQuiz";

export default function HomeRight() {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} sm={12} md={12} lg={12}>
        <Paper
          sx={{
            height: { xs: "auto", sm: "auto", md: "130px", lg: "140px" },
            border: "1px solid rgba(255, 0, 0, .5)",
            padding: "25px",
            "&:hover": { border: "2px solid rgba(255, 0, 0, 1)" },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.1em",
                color: "white",
                mb: "1rem",
              }}
            >
              Time zone
            </Typography>
            <RightTimeZone />
          </Box>
        </Paper>
      </Grid>

      <Grid xs={12} sm={12} md={12} lg={12}>
        <Paper
          sx={{
            height: { xs: "auto", sm: "auto", md: "500px", lg: "450px" },
            border: "1px solid rgba(255, 0, 0, .5)",
            padding: "25px",
            "&:hover": { border: "2px solid rgba(255, 0, 0, 1)" },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.1em",
                color: "white",
                mb: "1rem",
              }}
            >
              Quiz
            </Typography>
            <RightQuiz />
          </Box>
        </Paper>
      </Grid>

      <Grid xs={12} sm={12} md={12} lg={12}>
        <Paper
          sx={{
            height: { xs: "auto", sm: "auto", md: "420px", lg: "93px" },
            border: "1px solid rgba(255, 0, 0, .5)",
            padding: "25px",
            "&:hover": { border: "2px solid rgba(255, 0, 0, 1)" },
          }}
        >
          <Typography>
            © 2024 · Crafted with ♥️ using React by Temuujin.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
