import { connect } from 'react-redux';
import { selectNewActivity, deleteActivity, addToFavorites, deleteFromFavorites } from '../../actions/actions';
import Search from '../../components/Search/Search';


const mapStateToProps = (state) => {

  return {
    selectNewActivity: state.selectNewActivityReducer,
    addToFavorites: state.addToFavoritesReducer,
    deleteFromFavorites: state.deleteFromFavoritesReducer,
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

export default connect(mapStateToProps, mapDispatchToProps)(Search)
