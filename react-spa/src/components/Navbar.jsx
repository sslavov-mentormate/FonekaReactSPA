import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Microsoft App Store
        </Typography>
        <Button
          color="inherit"
          component={NavLink}
          to="/"
          exact
          sx={{
            "&.active": {
              background: "black",
            },
          }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={NavLink}
          to="/items"
          sx={{
            "&.active": {
              background: "black",
            },
          }}
        >
          Items
        </Button>
        <Button
          color="inherit"
          component={NavLink}
          to="/about"
          sx={{
            "&.active": {
              background: "black",
            },
          }}
        >
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
