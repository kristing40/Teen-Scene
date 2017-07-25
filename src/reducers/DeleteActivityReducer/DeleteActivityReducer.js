export const initialState = {
  id: ''
}

export const deleteActivityReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'DELETE_ACTIVITY':
    return action.id;
  default: return state;
  }
}
