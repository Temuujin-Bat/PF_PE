import { Button, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function LeftProjects() {
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
        Projects
      </Typography>

      <Grid container spacing={2}>
        <Grid xs={12} sm={4} md={12} lg={12}>
          <Button
            href='https://google.com'
            target='_blank'
            sx={{
              border: '1px solid rgba(255, 0, 0, .5)',
              width: '100%',
              height: '68px',
              padding: '.7em 0px',
              borderRadius: '15px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&:hover': {
                border: '1px solid rgba(255, 10, 0, 1)',
                '& svg': {
                  top: '.1em',
                  right: '.1em',
                  color: 'rgba(255, 10, 0, 1)',
                },
                '& p': {
                  fontWeight: 'bold',
                  color: 'white',
                },
              },
              position: 'relative',
            }}
          >
            <Typography sx={{ fontSize: '.7em' }}>Rentify</Typography>
            <ArrowOutwardIcon
              sx={{
                position: 'absolute',
                top: '.2em',
                right: '.2em',
                color: 'white',
              }}
            />
          </Button>
        </Grid>
        <Grid xs={12} sm={4} md={12} lg={12}>
          <Button
            href='https://google.com'
            target='_blank'
            sx={{
              border: '1px solid rgba(255, 0, 0, .5)',
              width: '100%',
              height: '68px',
              padding: '.7em 0px',
              borderRadius: '15px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&:hover': {
                border: '1px solid rgba(255, 10, 0, 1)',
                '& svg': {
                  top: '.1em',
                  right: '.1em',
                  color: 'rgba(255, 10, 0, 1)',
                },
                '& p': {
                  fontWeight: 'bold',
                  color: 'white',
                },
              },
              position: 'relative',
            }}
          >
            <Typography sx={{ fontSize: '.7em' }}>To Do</Typography>
            <ArrowOutwardIcon
              sx={{
                position: 'absolute',
                top: '.3em',
                right: '.3em',
                color: 'white',
              }}
            />
          </Button>
        </Grid>
        <Grid xs={12} sm={4} md={12} lg={12}>
          <Button
            href='https://google.com'
            target='_blank'
            sx={{
              border: '1px solid rgba(255, 0, 0, .5)',
              width: '100%',
              height: '68px',
              padding: '.7em 0px',
              borderRadius: '15px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&:hover': {
                border: '1px solid rgba(255, 10, 0, 1)',
                '& svg': {
                  top: '.1em',
                  right: '.1em',
                  color: 'rgba(255, 10, 0, 1)',
                },
                '& p': {
                  fontWeight: 'bold',
                  color: 'white',
                },
              },
              position: 'relative',
            }}
          >
            <Typography sx={{ fontSize: '.7em' }}>Airsoft</Typography>
            <ArrowOutwardIcon
              sx={{
                position: 'absolute',
                top: '.2em',
                right: '.2em',
                color: 'white',
              }}
            />
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
