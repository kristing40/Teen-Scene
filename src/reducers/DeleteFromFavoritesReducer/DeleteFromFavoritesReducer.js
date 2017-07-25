export const initialState = {
  id: '',
  deleteFromFavArray: []
}

export const deleteFromFavoritesReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'DELETE_FROM_FAVORITES':
    return Object.assign({}, state, {
      id: action.id,
      deleteFromFavArray: action.deleteFromFavArray
    })
  default: return state;
  }
}
