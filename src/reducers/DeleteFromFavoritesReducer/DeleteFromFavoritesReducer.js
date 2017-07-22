export const deleteFromFavoritesReducer = (state=[], action) => {
  switch (action.type) {
    case 'DELETE_FROM_FAVORITES':
      return state
    default: return state;
  }
}
