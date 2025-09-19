export const useToggleFavorite = (favorites, createFavorite, removeFavorite) => {
  const addToFavorites = (user, id) => {
    if (!favorites.some((fav) => fav.id === id)) {
      createFavorite(user, id);
    }
  };

  const removeFromFavorites = (id) => {
    removeFavorite(id);
  };

  const isFavorite = (id) => favorites.some((fav) => fav.id === id);

  return { addToFavorites, removeFromFavorites, isFavorite };
};
