const initialState = {
  newEvent: {
    addAnEvent: "",
    addNewLocation: "",
    addNewLeader: "",
    addNewDescription: "",
    addNewPhone: "",
    addNewEmail: "",
  }
}

export const addEventReducer = (state = initialState, action) => {
  switch (action.type) {
  case "ADD_EVENT":
    console.log(state.newEvent);
    return Object.assign({}, state.newEvent)


  default: return state

  }
}
