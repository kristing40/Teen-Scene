import { connect } from 'react-redux';
import actions from '../../actions/actions'
import Search from '../../components/Search/Search'


const mapStateToProps = (state) => {
  return {
    selectNewActivity: state.id,
    deleteActivity: state.id,
    addToFavorites: state.id,
    deleteFromFavorites: state.id,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)
