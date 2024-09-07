import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (product) => {
    setFavorites(prevFavorites => {
      if (!prevFavorites.some(fav => fav.id === product.id)) {
        return [...prevFavorites, product];
      }
      return prevFavorites;
    });
  };

  const removeFavorite = (productId) => {
    setFavorites(prevFavorites => prevFavorites.filter(product => product.id !== productId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);