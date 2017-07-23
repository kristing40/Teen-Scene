const initialState = {
  title: "Teen Scene",
  list: [],
}

export const appReducer = (state=initialState, action) => {
  switch (action.type) {
  case 'UPDATES_ACTIVITIES':
    return Object.assign({}, state, {
      list: action.activities
    })

  default:
    return state;
  }
}
