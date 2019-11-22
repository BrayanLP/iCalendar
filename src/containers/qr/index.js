import Qr from '../../components/qr';
import { connect } from 'react-redux';
import {
  fetchAsistencia,
  fetchAddAsistencia
} from '../../store/reducers/asistencias';

const mapStateToProps = ({ asistencias: { isFetching } }) => {
  return {
    isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //  dispatch,
    //  addAsistencia(asistencia) {
    //    const action = {
    //      type: 'ADD_ASISTENCIA',
    //      payload: asistencia
    //    };
    //    dispatch(action);
    //  },
    getAsistencias: () => dispatch(fetchAsistencia()),
    addAsistencia: data => dispatch(fetchAddAsistencia(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Qr);
