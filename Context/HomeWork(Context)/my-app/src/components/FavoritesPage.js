import React from 'react';
import { useFavorites } from '../components/FavoritesContext'; // Перевірте шлях
import ProductCard from './ProductCard'; // Перевірте шлях

function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div>
      <h1>Обрані Товари</h1>
      {favorites.length === 0 ? (
        <p>Виберіть товари для обрання.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          {favorites.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;