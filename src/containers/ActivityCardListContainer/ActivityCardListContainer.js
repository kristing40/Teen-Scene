import { connect } from 'react-redux';
import { toggleFavoritedCard } from '../../actions/actions';
import ActivityCardList from '../../components/ActivityCardList/ActivityCardList';


const mapStateToProps = (state) => {

  return {
    searchParam: state.selectNewActivityReducer.searchParam,
    favorited: state.addToFavoritesReducer.favorited
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    getFavorited: (favorited) => dispatch(toggleFavoritedCard(favorited))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityCardList);
