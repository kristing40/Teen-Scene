import { connect } from 'react-redux';
import { addToFavorites, deleteActivity, deleteFromFavorites } from '../../actions/actions';
import ActivityCardList from '../../components/ActivityCardList/ActivityCardList';


const mapStateToProps = (state) => {

  return {
    deleteCard: state.id,
    deleteFavorite: state.id,
    addFavorite: state.id
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    deleteActivity: (id) => dispatch((deleteActivity(id)),
    addToFavorites: (id) => dispatch(addToFavorites(id)),
    deleteFromFavorites: (id) => dispatch(deleteFromFavorites(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityCardList);
