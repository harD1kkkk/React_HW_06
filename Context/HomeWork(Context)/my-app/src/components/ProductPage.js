import React from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from './productsData'; // Перевірте шлях

function ProductPage() {
  const { id } = useParams();
  const product = productsData.find(p => p.id === parseInt(id));

  if (!product) return <p>Товар не знайдено.</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>Ціна: {product.price} грн</p>
      <p>{product.isRunningOut ? 'Закінчується' : 'В наявності'}</p>
    </div>
  );
}

export default ProductPage;