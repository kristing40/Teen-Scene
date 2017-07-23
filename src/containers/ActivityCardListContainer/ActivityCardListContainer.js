import { connect } from 'react-redux';
import ActivityCardList from '../../components/ActivityCardList/ActivityCardList';


const mapStateToProps = (state) => {
  console.log(state);
  return {
    list: state.appReducer.list,
    searchParam: state.searchParam,
  }
}


export default connect(mapStateToProps)(ActivityCardList);
