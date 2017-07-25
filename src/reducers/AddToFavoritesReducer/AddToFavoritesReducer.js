export const initialState = {
  id: '',
  favoritesArray: []
}

export const addToFavoritesReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_TO_FAVORITES':
    return Object.assign({}, state, {
      id: action.id,
      favoritesArray: action.favoritesArray
    })
  default: return state;
  }
}
