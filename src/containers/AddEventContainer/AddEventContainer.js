import { connect } from 'react-redux';
import AddEvent from '../../components/AddEvent/AddEvent';
import { fetchAddEvent } from '../../actions/actions';


const mapStateToProps = (state) => {

  return {
    addNewEvent: state.addEventReducer
  }
}

const mapDispatchToProps = (dispatch) => {

  return {

    getAddedEvent: (addNewEvent) => dispatch(fetchAddEvent(addNewEvent))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddEvent)
