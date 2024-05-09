import { Box, Paper, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import javascriptIcon from '../../../../assets/primaryTools/javascript.png';
import typescriptIcon from '../../../../assets/primaryTools/typescript.webp';
import cssIcon from '../../../../assets/primaryTools/css.png';
import htmlIcon from '../../../../assets/primaryTools/html.png';
import sassIcon from '../../../../assets/primaryTools/sass.png';
import muiIcon from '../../../../assets/primaryTools/mui.png';
import nodeIcon from '../../../../assets/primaryTools/node.png';
import expressIcon from '../../../../assets/primaryTools/express.png';
import gitIcon from '../../../../assets/primaryTools/git.png';
import mongoDBIcon from '../../../../assets/primaryTools/mongoDB.png';
import reactIcon from '../../../../assets/primaryTools/react.png';

const primaryTools = [
  { src: cssIcon, label: 'CSS' },
  { src: htmlIcon, label: 'HTML' },
  { src: sassIcon, label: 'SASS' },
  { src: muiIcon, label: 'MUI' },
  { src: javascriptIcon, label: 'JAVASCRIPT' },
  { src: typescriptIcon, label: 'TYPESCRIPT' },
  { src: reactIcon, label: 'REACT' },
  { src: nodeIcon, label: 'NODE.JS' },
  { src: expressIcon, label: 'EXPRESS.JS' },
  { src: mongoDBIcon, label: 'MONGODB' },
  { src: gitIcon, label: 'GIT' },
];

export default function LeftPrimaryTools() {
  return (
    <Paper
      sx={{
        height: { xs: 'auto', sm: 'auto', md: '350px', lg: '350px' },
        border: '1px solid rgba(255, 0, 0, .5)',
        padding: '25px',
        '&:hover': { border: '2px solid rgba(255, 0, 0, 1)' },
      }}
    >
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: '1.1em',
          color: 'white',
          mb: '1.5rem',
        }}
      >
        Primary tools
      </Typography>

      <Grid
        container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        spacing={2}
      >
        {primaryTools.map((tool, index) => (
          <Grid xs={3} sm={3} md={3} lg={3} key={index}>
            <Box
              sx={{
                border: '1px solid rgba(255, 10, 0, .5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '.7em 0px',
                borderRadius: '15px',
                '&:hover': { border: '1px solid rgba(255, 10, 0, 1)' },
                height: '68px',
              }}
            >
              <Stack
                component='img'
                src={tool.src}
                sx={{ height: '1.5em', mb: '.2em' }}
              />
              <Typography sx={{ fontSize: '0.7em', fontWeight: 'bold' }}>
                {tool.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
