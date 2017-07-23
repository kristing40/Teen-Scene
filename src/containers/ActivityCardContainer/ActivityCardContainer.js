import { connect } from 'react-redux';
import {selectNewActivity, deleteActivity, addToFavorites, deleteFromFavorites } from '../../actions/actions';
import ActivityCard from '../../components/ActivityCard/ActivityCard';


const mapStateToProps = (state) => {
  return {
    activityCardId: state.id
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    selectNewActivity: (id) =>  dispatch(selectNewActivity(id)),
    deleteActivity: (id) => dispatch(deleteActivity(id)),
    addToFavorites: (id) => dispatch(addToFavorites(id)),
    deleteFromFavorites: (id) => dispatch(deleteFromFavorites(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityCard)
