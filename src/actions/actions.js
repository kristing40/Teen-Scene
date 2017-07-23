
  export const  activitySelected = (searchParam) => {
    console.log("WE MADE IT!!!!!!!!!");
    return {type: 'SELECT_NEW_ACTIVITY', searchParam}
  }

  export const activityDeleted = (id) => {
    return {type: 'DELETE_ACTIVITY', id}
  }

  export const activityAddedToFavorites = (id) => {
    return {type: 'ADD_TO_FAVORITES', id}
  }

  export const  activityDeletedFromFavorites = (id) => {
    return {type: 'DELETE_FROM_FAVORITES', id}
  }

  export const  updatesActivities = (activities) => {
    return {type: 'UPDATES_ACTIVITIES', activities}
  }
