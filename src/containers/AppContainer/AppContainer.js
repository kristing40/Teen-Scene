import { connect } from 'react-redux';
import { activitySelected, updatesActivities } from '../../actions/actions';
import App from '../../components/App/App';


const mapStateToProps = (state) => {

  return {
    title: state.appReducer.title
  }
}

const mapDispatchToProps = (dispatch) => {

 return {

   updatesActivities: (activity) => dispatch(updatesActivities(activity)),

 }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
