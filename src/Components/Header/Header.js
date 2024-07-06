import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import './Header.css';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className="header-title">
          Harshit Walecha's Weather App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
