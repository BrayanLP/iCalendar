import ListAssistance from '../../components/assistance/Lists';
import { connect } from 'react-redux';
import { fetchAsistencia } from '../../store/reducers/asistencias';

const mapStateToProps = ({ asistencias: { isFetching, list } }) => {
  console.log(list);
  return {
    isFetching,
    listAssistance: list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAssistance() {
      dispatch(fetchAsistencia());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListAssistance);
