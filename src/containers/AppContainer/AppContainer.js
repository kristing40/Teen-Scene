import { connect } from 'react-redux';
import { fetchUpdatedActivities } from '../../actions/actions';
import App from '../../components/App/App';


const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {

  return {

    getUpdatedActivities: (activity) => dispatch(fetchUpdatedActivities(activity)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
