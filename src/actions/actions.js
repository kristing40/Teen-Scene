import 'whatwg-fetch';

export const  fetchActivitySelected = (searchParam) => {
  console.log("WE MADE IT!!!!!!!!!");
  return {type: 'SELECT_NEW_ACTIVITY', searchParam}
}

export const fetchActivityDeleted = (id) => {
  return {type: 'DELETE_ACTIVITY', id}
}

export const fetchActivityAddedToFavorites = (id) => {
  return {type: 'ADD_TO_FAVORITES', id}
}

export const  fetchActivityDeletedFromFavorites = (id) => {
  return {type: 'DELETE_FROM_FAVORITES', id}
}

export const  fetchUpdatedActivities = (activities) => {
  return {type: 'UPDATE_ACTIVITIES', activities}
}

export const fetchApiData = () => {
  return (dispatch) => {
    fetch("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/js?key=AIzaSyDOuS11_DCCtUQkmoRmeA_gWiLSh-onOGA&libraries=places")
    .then((response) => response.json())
    .then((data) => console.log(data))
  }
}
