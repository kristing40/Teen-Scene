import { addNewActivity, deleteActivity, addToFavorites, deleteFromFavorites } from '../actions/actions';
import myData from '../../dataSet/myData';
import addNewActivityReducer from '../Model/reducers/AddNewActivityReducer/AddNewActivityReducer'



export default class FetchCalls () {
  componentDidMount () {
    addNewActivity(myData) {

    }
  }

}
