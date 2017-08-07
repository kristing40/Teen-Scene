import { connect } from 'react-redux';
import { fetchActivitySelected } from '../../actions/actions';
import Search from '../../components/Search/Search';


const mapStateToProps = (state) => {

  return {
    selectNewActivity: state.selectNewActivityReducer.selectNewActivity,
  }

}

const mapDispatchToProps = (dispatch) => {

  return {
    getNewActivity: (selectNewActivity) => dispatch(fetchActivitySelected(selectNewActivity)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
