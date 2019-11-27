import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import qrAnimation from '../../assets/qr.gif';
const validation = Yup.object().shape({
  dni: Yup.string()
    .min(8, 'DNI minimo 8 caracteres')
    .max(8, 'DNI maximo 8 caracteres')
    .required('Required')
});
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
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
    value,
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

    if (!value) return;
    setFieldValue('dni', value, false);
    submitForm();
  };
  handleError = err => {
    console.error(err);
  };
  notify = message => {
    toast(message);
  };
  render() {
    const { isFetching } = this.props;
    const { isLoading } = this.state;
    return (
      <>
        <Formik
          initialValues={{ dni: '' }}
          validationSchema={validation}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
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
            </form>
          )}
        </Formik>
      </>
    );
  }
}
