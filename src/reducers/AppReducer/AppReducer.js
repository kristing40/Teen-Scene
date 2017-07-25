const initialState = {
  title: "Teen Scene",
  list: [],
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'UPDATE_ACTIVITIES':
    return Object.assign({}, state, {
      list: action.activities
    })

  default:
    return state;
  }
}
