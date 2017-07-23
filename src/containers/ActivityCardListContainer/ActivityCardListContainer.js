import { connect } from 'react-redux';
import { selectNewActivity, addToFavorites, deleteActivity, deleteFromFavorites } from '../../actions/actions';
import ActivityCardList from '../../components/ActivityCardList/ActivityCardList';


const mapStateToProps = (state) => {
  // console.log(state);
  return {
    arrayOfActivities: state.activity,
    deleteCard: state.id,
    deleteFavorite: state.id,
    addFavorite: state.id
  }
}

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch);
  return {
    selectNewActivities: (id) => dispatch(selectNewActivity(id)),
    deleteActivity: (id) => dispatch(deleteActivity(id)),
    addToFavorites: (id) => dispatch(addToFavorites(id)),
    deleteFromFavorites: (id) => dispatch(deleteFromFavorites(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityCardList);
