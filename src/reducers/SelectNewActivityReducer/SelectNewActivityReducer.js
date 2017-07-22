export const selectNewActivityReducer = (state=[], action) => {
  switch (action.type) {
    case 'select_NEW_ACTIVITY':
      return state;
    default: return state;
  }
}
