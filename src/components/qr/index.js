import React, { Component } from 'react';
import QrReader from 'react-qr-reader';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dni: 'No hay resultados'
    };
  }
  componentDidMount() {
    const { getAsistencias } = this.props;
    /**
     * Obteniendo el listado de asistencias
     */
    getAsistencias();
  }
  handleScan = data => {
    const { addAsistencia } = this.props;
    if (!data) return;

    // this.props.dispatch()
    this.setState({
      dni: data
    });
    addAsistencia(data);
  };
  handleError = err => {
    console.error(err);
  };
  render() {
    const { isFetching } = this.props;
    const { dni } = this.state;
    console.log(this.props);
    return (
      <>
        {/* <QrReader {...props}></QrReader> */}
        {isFetching ? (
          <>Loading ....</>
        ) : (
          <>
            <div style={{ width: '300px' }}>
              <QrReader
                delay={3000}
                onError={this.handleError}
                onScan={this.handleScan}
                style={{ width: '100%' }}
              />
            </div>
          </>
        )}
        <p>{dni}</p>

        {/* <p>Ingreso de personal RCP</p> */}
      </>
    );
  }
}
