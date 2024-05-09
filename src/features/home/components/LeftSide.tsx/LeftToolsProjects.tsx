import Grid from '@mui/material/Unstable_Grid2';

import LeftPrimaryTools from './LeftPrimaryTools';
import LeftProjects from './LeftProjects';

export default function LeftToolsProjects() {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} sm={12} md={6} lg={8}>
        <LeftPrimaryTools />
      </Grid>

      <Grid xs={12} sm={12} md={6} lg={4}>
        <LeftProjects />
      </Grid>
    </Grid>
  );
}
