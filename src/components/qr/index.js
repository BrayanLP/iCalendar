import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import qrAnimation from '../../assets/qr.gif';
import Modal from 'react-modal';
import good from '../../assets/good.svg';
import night from '../../assets/night.svg';
import { frases } from '../../helpers/frases';
import styled from '@emotion/styled';
const validation = Yup.object().shape({
  dni: Yup.string()
    .min(8, 'DNI minimo 8 caracteres')
    .max(8, 'DNI maximo 8 caracteres')
    .required('Required')
});

// import ListAssitance from '../containers/assistance/list';

export const ModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  picture {
    margin: 1rem 0;
  }
  span {
    font-size: 25px;
  }
  h2 {
    font-size: 30px;
  }
`;
export const FraseDesign = styled.p`
  color: gray;
  display: block;
  font-size: 16px;
  padding: 0 1rem;
  span {
    display: block;
    margin: 0.5rem 0;
    font-size: 14px;
    font-weight: bold;
  }
`;

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

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      openModal: false,
      userId: 'No hay resultados'
    };
  }
  componentDidMount() {
    const { getAsistencias } = this.props;
    /**
     * Obteniendo el listado de asistencias
     */
    getAsistencias();
  }
  handleScan = (
    values,
    { setFieldValue, submitForm, errors, touched, setTouched }
  ) => {
    /**
     * Primera validación de toast
     */

    if (touched.dni && errors.dni) {
      setTouched({ dni: false });
      this.setState({ isLoading: true });
      toast(errors.dni);
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 3000);
    }
    /**
     * Valida que exista una data
     */

    if (!values) return;
    setFieldValue('dni', values, false);
    console.log('TCL: extends -> value', values);
    submitForm();
  };
  handleSubmit = values => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ openModal: true });
      setTimeout(() => {
        this.setState({ openModal: false, isLoading: false });
      }, 5000);
    }, 3000);
  };
  handleError = err => {};
  notify = message => {
    toast(message);
  };
  render() {
    // const { isFetching } = this.props;
    const { isLoading, openModal } = this.state;

    const numberRamdon = Math.floor(Math.random() * 10);
    return (
      <>
        <Formik
          initialValues={{ dni: '' }}
          validationSchema={validation}
          onSubmit={values => {
            this.handleSubmit(values);
          }}
        >
          {props => (
            <form onSubmit={props.handleSubmit}>
              <div style={{ width: '250px', display: 'inline-block' }}>
                {!isLoading ? (
                  <QrReader
                    delay={1000}
                    // resolution={800}
                    // style={{
                    //   border: '15px solid red'
                    // }}
                    showViewFinder={false}
                    onError={this.handleError}
                    onScan={values =>
                      this.handleScan(values, {
                        ...props
                      })
                    }
                  />
                ) : (
                  <picture
                    style={{
                      width: '250px',
                      height: '250px',
                      overflow: 'hidden',
                      position: 'relative',
                      float: 'left'
                    }}
                  >
                    <img
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '300px'
                      }}
                      src={qrAnimation}
                      alt="QR SCANING"
                    ></img>
                  </picture>
                )}
                <input
                  type="hidden"
                  name="dni"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.dni}
                ></input>
                {/* {console.log(props.errors, props.values, props.touched)} */}
                {/* {errors.dni && touched.dni && toast(errors.dni)} */}
              </div>
              <ToastContainer />
              <Modal ariaHideApp={false} isOpen={openModal} style={styleGood}>
                <ModalStyle>
                  <picture>
                    <img width="150px" src={good} alt="Good"></img>
                  </picture>

                  <span>Bienvenido</span>
                  <h2>Brayan Laureano Paucar</h2>

                  <FraseDesign>
                    {frases[numberRamdon].frase}
                    <span>{frases[numberRamdon].author}</span>
                  </FraseDesign>
                </ModalStyle>
              </Modal>
              <Modal ariaHideApp={false} isOpen={false} style={styleNight}>
                <ModalStyle>
                  <picture>
                    <img width="150px" src={night} alt="Night"></img>
                  </picture>
                  <span>Hasta mañana</span>
                  <h2>Brayan Laureano Paucar</h2>

                  <FraseDesign>
                    "{frases[numberRamdon].frase}"
                    <span>{frases[numberRamdon].author}</span>
                  </FraseDesign>
                </ModalStyle>
              </Modal>
            </form>
          )}
        </Formik>
      </>
    );
  }
}
