import { connect } from 'react-redux';
import { selectNewActivity, deleteActivity, addToFavorites, deleteFromFavorites } from '../../actions/actions';
import App from '../../components/App/App';


const mapStateToProps = (state) => {
// console.log(state.selectNewActivityReducer);
  return {

    activity: state.selectNewActivityReducer
  }
}

const mapDispatchToProps = (dispatch) => {

 return {

   selectNewActivity: (activity) => dispatch(selectNewActivity(activity)),
   deleteActivity: (id) => dispatch(deleteActivity(id)),
   addToFavorites: (id) => dispatch(addToFavorites(id)),
   deleteFromFavorites: (id) => dispatch(deleteFromFavorites(id))
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
