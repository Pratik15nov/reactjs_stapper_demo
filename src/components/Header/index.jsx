import React from "react";
import { Toolbar, Grid, IconButton, AppBar, styled } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
export const Navbar = styled(AppBar)(() => ({
  background: "#cb4249",
  borderRadius: "10px",
  padding: "6px",
}));
const Header = (props) => {
  return (
    <Navbar position="static">
      <Toolbar>
        <Grid container justifyContent="flex-start" spacing={2}>
          <Grid item>
            {props.isSmallScreen && (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={props.handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
            User Dashboard / Attendance
            {!props.isSmallScreen && (
              <>
                <br /> <strong> Attendance</strong>
              </>
            )}
          </Grid>
        </Grid>
        {!props.isSmallScreen && (
          <Grid container justifyContent="flex-end" spacing={2}>
            <Grid item>
              <strong>Set Password</strong>
            </Grid>
            <Grid item>
              <strong>LOG OUT</strong>
            </Grid>
            <Grid item>|</Grid>
            <Grid item>
              <strong>Hi, Mark</strong>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </Navbar>
  );
};

export default Header;
