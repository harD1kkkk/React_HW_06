import React from 'react';
import ProductCard from './ProductCard';
import { productsData } from './productsData'; // Перевірте шлях

function HomePage() {
  return (
    <div>
      <h1>Головна сторінка</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {productsData.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;