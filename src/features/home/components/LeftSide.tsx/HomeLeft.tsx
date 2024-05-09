import Grid from '@mui/material/Unstable_Grid2';
import LeftToolsProjects from './LeftToolsProjects';
import LeftWelcome from './LeftWelcome';

export default function HomeLeft() {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} sm={12} md={12} lg={12}>
        <LeftWelcome />
      </Grid>
      <Grid xs={12} sm={12} md={12} lg={12}>
        <LeftToolsProjects />
      </Grid>
    </Grid>
  );
}
