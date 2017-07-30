import { connect } from 'react-redux';
import AddEvent from '../../components/AddEvent/AddEvent';
import { fetchAddEvent } from '../../actions/actions';


const mapStateToProps = (state) => {

  return {
    addAnEvent: state.addEventReducer
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    getAddedEvent: (event) => dispatch(fetchAddEvent(event))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddEvent)
