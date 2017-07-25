import { connect } from 'react-redux';
import { fetchUpdatedActivities } from '../../actions/actions';
import App from '../../components/App/App';


const mapStateToProps = (state) => {
 console.log(state);
  return {
    title: state.appReducer.title,
  }
}

const mapDispatchToProps = (dispatch) => {

  return {

    getUpdatedActivities: (activity) => dispatch(fetchUpdatedActivities(activity)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
