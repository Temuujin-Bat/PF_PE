import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const MainLayout = () => (
  <Box
    sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: { xs: 'none', sm: 'none', md: 'center', lg: 'center' },
      padding: { xs: '10px', sm: '10px', md: '100px', lg: '200px' },
    }}
  >
    <Outlet />
  </Box>
);

export { MainLayout };
