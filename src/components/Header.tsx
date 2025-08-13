import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="transparent"  elevation={0} className="header-border">
      <Toolbar>
        <Typography variant="h6" component="div">
          Bookshelf
        </Typography>

        <Box sx={{ ml: 5 }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Minha Estante</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
