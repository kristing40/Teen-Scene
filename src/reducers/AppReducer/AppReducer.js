export const appReducer = (state = [], action) => {
  switch (action.type) {
  case 'UPDATE_ACTIVITIES':
    return Object.assign({}, state,
       action.searchParam
    )

  default:
    return state;
  }
}
