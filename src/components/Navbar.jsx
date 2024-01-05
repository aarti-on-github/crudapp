import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Definitics
          </Typography>
          <NavLink className="add-link" to={"/create"}>
            Add Details
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
   
  );
}