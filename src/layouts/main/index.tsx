import { Outlet } from 'react-router-dom';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { ApplicationBar } from './Bar';

const MainStyled = styled('main')(() => ({
  width: '100%',
  minHeight: 'calc(100vh - 88px)',
  flexGrow: 1,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

const MainLayout = () => (
  <Box height="100%" display="flex">
    <ApplicationBar />
    <MainStyled>
      <Toolbar />
      <Outlet />
    </MainStyled>
  </Box>
);

export {
  MainLayout,
};
