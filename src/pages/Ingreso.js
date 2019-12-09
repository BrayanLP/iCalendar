import React, { Component } from 'react';
import QrCard from '../components/card/qr';
import QrComponent from '../containers/qr';
import Text from '../components/Text';
import { Link } from '@reach/router';
class Ingreso extends Component {
  render() {
    return (
      <>
        <Text type="h1">Ingreso de Personal</Text>
        <QrCard
          title={'Acerca tu Qr a la camara para marcar tu asistencia.'}
          footer={
            <ul>
              <li>
                <Link to="/">Utilizar otro método de ingreso</Link>
              </li>
              <li>
                <Link to="/reporte">ver reporte</Link>
              </li>
            </ul>
          }
        >
          <QrComponent></QrComponent>
        </QrCard>
      </>
    );
  }
}
export default Ingreso;
