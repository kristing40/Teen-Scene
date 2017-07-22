export const deleteActivityReducer = (state=[], action) => {
  switch (action.type) {
    case 'DELETE_ACTIVITY':
      return state;
    default: return state;
  }
}
