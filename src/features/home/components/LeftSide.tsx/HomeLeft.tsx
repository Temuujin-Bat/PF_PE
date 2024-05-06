import { Box, Button, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import pdfFile from "../../../../assets/dummy.pdf";

export default function HomeLeft() {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} sm={12} md={12} lg={12}>
        <Paper
          sx={{
            height: "350px",
            border: "1px solid rgba(255, 10, 0, .5)",
            padding: "30px",
            "&:hover": { border: "1px solid rgba(255, 0, 0, 1)" },
            position: "relative",
          }}
        >
          <Box>
            <Typography sx={{ color: "rgba(255, 255, 255, .5)" }}>
              welcome
            </Typography>
            <Typography>
              Hi, I am{" "}
              <Typography
                component={"span"}
                sx={{ fontWeight: "bold", fontSize: "1.1em", color: "white" }}
              >
                Temuujin Bat Erdene
              </Typography>
            </Typography>
            <Typography>
              Fully committed to the philosophy of life-long learning, I’m a
              full stack developer with a deep passion for JavaScript, React and
              all things web development. The unique combination of creativity,
              logic, technology and never running out of new things to discover,
              drives my excitement and passion for web development. When I’m not
              at my computer I like to spend my time reading, going to gym and
              playing video games.
            </Typography>
            <Typography sx={{ color: "rgba(255, 255, 255, .5)", mt: "1rem" }}>
              Contact Details
            </Typography>
            <Typography>
              temujinba@gmail.com
              <Typography component={"br"} />
              Romania / Israel / Mongolia
              <Typography component={"br"} />
              +972 054-2892359
            </Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",
              right: "30px",
              bottom: "30px",
              display: "flex",
            }}
          >
            <Button
              href="https://google.com"
              target="_blank"
              sx={{
                color: "white",
                border: "1px solid rgba(255, 10, 0, .5)",
                borderBottomWidth: "4px",
                borderRightWidth: "4px",
                padding: "10px 15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20%",
                "&:hover": {
                  color: "rgba(255, 10, 0, 1)",
                  "&::after": {
                    content: "'github'",
                    position: "absolute",
                    top: "-15px",
                    fontSize: ".6em",
                    color: "white",
                  },
                },
                mr: ".8em",
              }}
            >
              <GitHubIcon sx={{ fontSize: "1.4em" }} />
            </Button>
            <Button
              href="https://google.com"
              target="_blank"
              sx={{
                color: "white",
                border: "1px solid rgba(255, 10, 0, .5)",
                borderBottomWidth: "4px",
                borderRightWidth: "4px",
                padding: "10px 15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "15%",
                "&:hover": {
                  color: "rgba(255, 10, 0, 1)",
                  "&::after": {
                    content: "'linkedin'",
                    position: "absolute",
                    top: "-15px",
                    fontSize: ".6em",
                    color: "white",
                  },
                },
                mr: ".8em",
              }}
            >
              <LinkedInIcon sx={{ fontSize: "1.4em" }} />
            </Button>
            <Button
              component={"a"}
              href={pdfFile}
              target="_blank"
              sx={{
                border: "1px solid rgba(255, 10, 0, .5)",
                borderBottomWidth: "4px",
                borderRightWidth: "4px",
                padding: "10px 15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20%",
                position: "relative",
                cursor: "pointer",
                color: "white",
                "&:hover": {
                  color: "rgba(255, 10, 0, 1)",
                  "&::after": {
                    content: "'resume'", // Display text on hover
                    position: "absolute",
                    top: "-15px",
                    fontSize: ".6em",
                    color: "white",
                  },
                },
              }}
            >
              <FileDownloadIcon sx={{ fontSize: "1.4em" }} />
            </Button>
          </Box>
        </Paper>
      </Grid>

      <Grid xs={12} sm={12} md={12} lg={12} container>
        <Grid xs={12} sm={12} md={12} lg={6}>
          <Paper
            sx={{
              height: "350px",
              border: "1px solid rgba(255, 0, 0, .5)",
              padding: "30px",
              "&:hover": { border: "2px solid rgba(255, 0, 0, 1)" },
            }}
          >
            <Typography
              sx={{ fontWeight: "bold", fontSize: "1.1em", color: "white" }}
            >
              Primary tools
            </Typography>

            <Grid container>
              <Grid xs={12} sm={12} md={12} lg={6}></Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid xs={12} sm={12} md={12} lg={6}>
          <Paper
            sx={{
              height: "350px",
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
    </Grid>
  );
}
