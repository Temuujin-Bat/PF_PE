import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const ApplicationBar = () => (
  <AppBar
    elevation={1}
    position="fixed"
    sx={{
      zIndex: (theme) => theme.zIndex.drawer + 100,
      background: '#212B36',
    }}
  >
    <Toolbar>
      <Box sx={{ flexGrow: 1 }} />
      <Stack
        direction="row"
        alignItems="center"
        spacing={{
          xs: 0.5,
          sm: 1,
        }}
      />
    </Toolbar>
  </AppBar>
);

export {
  ApplicationBar,
};
