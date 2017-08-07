export const initialState = {
  id: '',
  favoritesArray: [],
  favorited: false
}

export const addToFavoritesReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_TO_FAVORITES':
    return Object.assign({}, state, {
      id: action.id,
      favoritesArray: action.favoritesArray,
    })
  case 'FAVORITED':
    return Object.assign({}, state, {
      id: action.id,
      favorited: action.favorited
    })
  default: return state;
  }
}
