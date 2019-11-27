import React, { Component } from 'react';
import ListAssitance from '../containers/assistance/list';
class Asistencia extends Component {
  render() {
    return (
      <>
        <h1>Listado de asistencia</h1>
        <ListAssitance></ListAssitance>
      </>
    );
  }
}
export default Asistencia;
