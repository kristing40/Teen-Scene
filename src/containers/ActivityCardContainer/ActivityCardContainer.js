import { connect } from 'react-redux';
import actions from '../../actions/actions';
import ActivityCard from '../../components/ActivityCard/ActivityCard';


const mapStateToProps (state) => {
  return {
    cardId: state.id
  }
}

const mapDispatchToProps (dispatch) => {
  return {
    addNewActivity(id) =>  dispatch(addNewActivity(id)),
    deleteActivity(id) => dispatch(deleteActivity(id)),
    addToFavorites(id) => dispatch(addToFavorites(id)),
    deleteFromFavorites(id) => dispatch(deleteFromFavorites(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityCard)
