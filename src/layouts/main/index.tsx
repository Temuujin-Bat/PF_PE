import { Outlet } from "react-router-dom";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

const MainStyled = styled("main")(() => ({
  width: "100%",
  height: "100%",
  flexGrow: 1,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

const MainLayout = () => (
  <Box height="100%" display="flex">
    <MainStyled>
      <Toolbar />
      <Outlet />
    </MainStyled>
  </Box>
);

export { MainLayout };
