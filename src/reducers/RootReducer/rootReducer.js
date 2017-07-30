import { combineReducers } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { selectNewActivityReducer } from '../SelectNewActivityReducer/SelectNewActivityReducer';
import { addEventReducer } from '../AddEventReducer/AddEventReducer';
import { deleteActivityReducer } from '../DeleteActivityReducer/DeleteActivityReducer';
import { addToFavoritesReducer } from '../AddToFavoritesReducer/AddToFavoritesReducer';
import { deleteFromFavoritesReducer } from '../DeleteFromFavoritesReducer/DeleteFromFavoritesReducer';
import { appReducer } from '../AppReducer/AppReducer'


export const history = createHistory();
export const routerConnected = routerMiddleware(history);

export const rootReducer = combineReducers ({
  routerReducer,
  selectNewActivityReducer,
  addEventReducer,
  deleteActivityReducer,
  addToFavoritesReducer,
  deleteFromFavoritesReducer,
  appReducer
});
