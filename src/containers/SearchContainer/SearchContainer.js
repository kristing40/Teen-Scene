import { connect } from 'react-redux';
import { activitySelected, activityDeleted, activityAddedToFavorites, activityDeletedFromFavorites, fetchActiveData } from '../../actions/actions';
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
    searchActiveData: () => dispatch(fetchActiveData()),
    selectNewActivity: (searchParam) => dispatch(activitySelected(searchParam)),
    deleteActivity: (id) => dispatch(activityDeleted(id)),
    addToFavorites: (id) => dispatch(activityAddedToFavorites(id)),
    deleteFromFavorites: (id) => dispatch(activityDeletedFromFavorites(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
