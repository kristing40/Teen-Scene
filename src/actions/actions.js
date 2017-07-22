
  export const  selectNewActivity = (activity) => {
    return {type: 'SELECT_NEW_ACTIVITY', activity}
  }

  export const deleteActivity = (id) => {
    return {type: 'DELETE_ACTIVITY', id}
  }

  export const addToFavorites = (id) => {
    return {type: 'ADD_TO_FAVORITES', id}
  }

  export const  deleteFromFavorites = (id) => {
    return {type: 'DELETE_FROM_FAVORITES', id}
  }
