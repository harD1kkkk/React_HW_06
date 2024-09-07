import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, IconButton, Stack } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useFavorites } from '../components/FavoritesContext'; // Перевірте шлях

function ProductCard({ product }) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const [isFavorite, setIsFavorite] = useState(favorites.some(fav => fav.id === product.id));
  const navigate = useNavigate();

  useEffect(() => {
    setIsFavorite(favorites.some(fav => fav.id === product.id));
  }, [favorites, product.id]);

  const handleFavoriteToggle = (e) => {
    e.stopPropagation(); // Зупинити подальше поширення події
    if (isFavorite) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
    setIsFavorite(!isFavorite);
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card
      sx={{ maxWidth: 300, margin: 'auto', height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}
      onClick={handleCardClick}
    >
      <CardActionArea sx={{ flexGrow: 1 }}>
        <CardMedia
          component="img"
          height="200"
          image={product.imageUrl}
          alt={product.name}
          sx={{ objectFit: 'contain' }}
        />
        <CardContent>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
              {product.name}
            </Typography>
            <IconButton onClick={handleFavoriteToggle} color="primary">
              {isFavorite ? <Favorite sx={{ color: 'red' }} /> : <FavoriteBorder />}
            </IconButton>
          </Stack>
          <Typography variant="body1" color="text.primary" sx={{ fontWeight: 'bold' }}>
            {product.price} грн
          </Typography>
          <Typography variant="body2" color={product.isRunningOut ? 'error.main' : 'success.main'} sx={{ mt: 1 }}>
            {product.isRunningOut ? 'Закінчується' : 'В наявності'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;