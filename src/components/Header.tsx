import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/routes';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="transparent"  elevation={0} className="header-border">
      <Toolbar>
        <Typography variant="h6" component="div">
          Bookshelf
        </Typography>

        <Box sx={{ ml: 5 }}>
          <Button color="inherit" component={Link} to={ROUTES.HOME}>Home</Button>
          <Button color="inherit" component={Link} to={ROUTES.SHELF}>Minha Estante</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
