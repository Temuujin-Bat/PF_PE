import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import pdfFile from "../../../../assets/dummy.pdf";

import javascriptIcon from "../../../../assets/primaryTools/javascript.png";
import typescriptIcon from "../../../../assets/primaryTools/typescript.webp";
import cssIcon from "../../../../assets/primaryTools/css.png";
import htmlIcon from "../../../../assets/primaryTools/html.png";
import sassIcon from "../../../../assets/primaryTools/sass.png";
import muiIcon from "../../../../assets/primaryTools/mui.png";
import nodeIcon from "../../../../assets/primaryTools/node.png";
import expressIcon from "../../../../assets/primaryTools/express.png";
import gitIcon from "../../../../assets/primaryTools/git.png";
import mongoDBIcon from "../../../../assets/primaryTools/mongoDB.png";
import reactIcon from "../../../../assets/primaryTools/react.png";

const primaryTools = [
  { src: cssIcon, label: "CSS" },
  { src: htmlIcon, label: "HTML" },
  { src: sassIcon, label: "SASS" },
  { src: muiIcon, label: "MUI" },
  { src: javascriptIcon, label: "JAVASCRIPT" },
  { src: typescriptIcon, label: "TYPESCRIPT" },
  { src: reactIcon, label: "REACT" },
  { src: nodeIcon, label: "NODE.JS" },
  { src: expressIcon, label: "EXPRESS.JS" },
  { src: mongoDBIcon, label: "MONGODB" },
  { src: gitIcon, label: "GIT" },
];

export default function HomeLeft() {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} sm={12} md={12} lg={12}>
        <Paper
          sx={{
            height: { xs: "auto", sm: "auto", md: "350px", lg: "350px" },
            border: "1px solid rgba(255, 10, 0, .5)",
            padding: "25px",
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
              right: { xs: "10px", sm: "20px", md: "10px", lg: "30px" },
              bottom: { xs: "20px", sm: "20px", md: "10px", lg: "30px" },
              display: "flex",
            }}
          >
            <Button
              href="https://github.com/Temuujin-Bat"
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
              href="https://il.linkedin.com/in/temuujin-bat-erdene-4984a42a7"
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
        <Grid xs={12} sm={12} md={12} lg={9}>
          <Paper
            sx={{
              height: { xs: "auto", sm: "auto", md: "350px", lg: "350px" },
              border: "1px solid rgba(255, 0, 0, .5)",
              padding: "25px",
              "&:hover": { border: "2px solid rgba(255, 0, 0, 1)" },
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.1em",
                color: "white",
                mb: "1.5rem",
              }}
            >
              Primary tools
            </Typography>

            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              spacing={2}
            >
              {primaryTools.map((tool, index) => (
                <Grid xs={3} sm={3} md={3} lg={3} key={index}>
                  <Box
                    sx={{
                      border: "1px solid rgba(255, 10, 0, .5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      padding: ".7em 0px",
                      borderRadius: "15px",
                      "&:hover": { border: "1px solid rgba(255, 10, 0, 1)" },
                      height: "68px",
                    }}
                  >
                    <Stack
                      component="img"
                      src={tool.src}
                      sx={{ height: "1.5em", mb: ".2em" }}
                    />
                    <Typography sx={{ fontSize: "0.7em", fontWeight: "bold" }}>
                      {tool.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        <Grid xs={12} sm={12} md={12} lg={3}>
          <Paper
            sx={{
              height: { xs: "auto", sm: "auto", md: "350px", lg: "350px" },
              border: "1px solid rgba(255, 0, 0, .5)",
              padding: "25px",
              "&:hover": { border: "2px solid rgba(255, 0, 0, 1)" },
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.1em",
                color: "white",
                mb: "1.5rem",
              }}
            >
              Projects
            </Typography>

            <Grid container spacing={2}>
              <Grid xs={12} sm={4} md={12} lg={12}>
                <Button
                  href="https://google.com"
                  target="_blank"
                  sx={{
                    border: "1px solid rgba(255, 0, 0, .5)",
                    width: "100%",
                    height: "68px",
                    padding: ".7em 0px",
                    borderRadius: "15px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                      border: "1px solid rgba(255, 10, 0, 1)",
                      "& svg": {
                        top: ".1em",
                        right: ".1em",
                        color: "rgba(255, 10, 0, 1)",
                      },
                      "& p": {
                        fontWeight: "bold",
                        color: "white",
                      },
                    },
                    position: "relative",
                  }}
                >
                  <Typography sx={{ fontSize: ".7em" }}>Rentify</Typography>
                  <ArrowOutwardIcon
                    sx={{
                      position: "absolute",
                      top: ".2em",
                      right: ".2em",
                      color: "white",
                    }}
                  />
                </Button>
              </Grid>
              <Grid xs={12} sm={4} md={12} lg={12}>
                <Button
                  href="https://google.com"
                  target="_blank"
                  sx={{
                    border: "1px solid rgba(255, 0, 0, .5)",
                    width: "100%",
                    height: "68px",
                    padding: ".7em 0px",
                    borderRadius: "15px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                      border: "1px solid rgba(255, 10, 0, 1)",
                      "& svg": {
                        top: ".1em",
                        right: ".1em",
                        color: "rgba(255, 10, 0, 1)",
                      },
                      "& p": {
                        fontWeight: "bold",
                        color: "white",
                      },
                    },
                    position: "relative",
                  }}
                >
                  <Typography sx={{ fontSize: ".7em" }}>To Do</Typography>
                  <ArrowOutwardIcon
                    sx={{
                      position: "absolute",
                      top: ".3em",
                      right: ".3em",
                      color: "white",
                    }}
                  />
                </Button>
              </Grid>
              <Grid xs={12} sm={4} md={12} lg={12}>
                <Button
                  href="https://google.com"
                  target="_blank"
                  sx={{
                    border: "1px solid rgba(255, 0, 0, .5)",
                    width: "100%",
                    height: "68px",
                    padding: ".7em 0px",
                    borderRadius: "15px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                      border: "1px solid rgba(255, 10, 0, 1)",
                      "& svg": {
                        top: ".1em",
                        right: ".1em",
                        color: "rgba(255, 10, 0, 1)",
                      },
                      "& p": {
                        fontWeight: "bold",
                        color: "white",
                      },
                    },
                    position: "relative",
                  }}
                >
                  <Typography sx={{ fontSize: ".7em" }}>Airsoft</Typography>
                  <ArrowOutwardIcon
                    sx={{
                      position: "absolute",
                      top: ".2em",
                      right: ".2em",
                      color: "white",
                    }}
                  />
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
