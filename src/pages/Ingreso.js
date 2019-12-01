import React, { Component } from 'react';
import QrCard from '../components/card/qr';
import QrComponent from '../containers/qr';
import Text from '../components/Text';

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
                <a href="/">Utilizar otro método de ingreso</a>
              </li>
              <li>
                <a href="/">ver reporte</a>
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
