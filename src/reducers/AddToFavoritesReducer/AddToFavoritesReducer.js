export const addToFavoritesReducer= (state=[], action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return state;
    default: return state;
  }
}
