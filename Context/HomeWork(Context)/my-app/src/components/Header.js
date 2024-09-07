import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from './FavoritesContext'; // Перевірте шлях
import { AppBar, Toolbar, Typography, Badge, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Header() {
  const { favorites } = useFavorites();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1 }}>
          Мій Магазин
        </Typography>
        <IconButton color="inherit" component={Link} to="/favorites">
          <Badge badgeContent={favorites.length} color="error">
            <FavoriteIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;