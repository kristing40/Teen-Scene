import { connect } from 'react-redux';
import App from '../../components/App/App';
import { selectNewActivity, deleteActivity, addToFavorites, deleteFromFavorites } from '../../actions/actions';


const mapStateToProps = (state) => {

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
