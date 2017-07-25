import { connect } from 'react-redux';
import { fetchActivitySelected, fetchApiData } from '../../actions/actions';
import Search from '../../components/Search/Search';


const mapStateToProps = (state) => {

  return {
    selectNewActivity: state.selectNewActivityReducer,
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    getApiData: () => dispatch(fetchApiData()),
    getNewActivity: (searchParam) => dispatch(fetchActivitySelected(searchParam)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
