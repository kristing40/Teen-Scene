import { connect } from 'react-redux';
import { toggleFavoritedCard } from '../../actions/actions';
import ActivityCard from '../../components/ActivityCard/ActivityCard';


const mapStateToProps = (state) => {

  return {
    favorited: state.addToFavoritesReducer
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    getFavorited: (favorited) => dispatch(toggleFavoritedCard(favorited))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityCard)
