export const addEventReducer = (state = [], action) => {
  switch (action.type) {
  case "ADD_EVENT":
    return {
      addNewEvent: state.addEventReducer
    }

  default: return state

  }
}
