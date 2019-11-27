import React, { Component } from 'react';
import QrCard from '../components/card/qr';
import QrComponent from '../containers/qr';
import Text from '../components/Text';
import Modal from 'react-modal';
import good from '../assets/good.svg';
import night from '../assets/night.svg';
// import ListAssitance from '../containers/assistance/list';

const styleGood = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    height: '500px',
    border: 'none'
  },
  overlay: {
    background: '#2ecc71'
  }
};
const styleNight = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    height: '500px',
    border: 'none'
  },
  overlay: {
    background: '#2c3e50'
  }
};

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
                <a href="">Utilizar otro método de ingreso</a>
              </li>
              <li>
                <a href="">ver reporte</a>
              </li>
            </ul>
          }
        >
          <QrComponent></QrComponent>
        </QrCard>
        <Modal isOpen={false} style={styleGood}>
          <picture>
            <img width="150px" src={good} alt="Good"></img>
          </picture>

          <span>Bienvenido</span>
          <h2>Brayan Laureano Paucar</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            tempora praesentium dolorum impedit inventore, maiores soluta nulla
            quisquam reiciendis, consequuntur fuga. Repudiandae officia dolorem
            repellat omnis? Dignissimos aperiam dolorem non.
          </p>
        </Modal>
        <Modal isOpen={false} style={styleNight}>
          <picture>
            <img width="150px" src={night} alt="Night"></img>
          </picture>
          <span>Hasta mañana</span>
          <h2>Brayan Laureano Paucar</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            tempora praesentium dolorum impedit inventore, maiores soluta nulla
            quisquam reiciendis, consequuntur fuga. Repudiandae officia dolorem
            repellat omnis? Dignissimos aperiam dolorem non.
          </p>
        </Modal>
      </>
    );
  }
}
export default Ingreso;
