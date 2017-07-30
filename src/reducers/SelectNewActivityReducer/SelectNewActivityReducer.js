const initialState = {
  searchParam: "all"
}

export const selectNewActivityReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SELECT_NEW_ACTIVITY':
    return Object.assign({}, state, {
      searchParam: action.searchParam
    })

  default:
    return state;
  }
}
