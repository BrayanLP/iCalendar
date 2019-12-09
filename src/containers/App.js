import React, { Component } from 'react';
// import QrReader from '../components/QrReader';
// import Home from '../pages/Home';
import Asistencia from '../pages/Asistencia';
import Ingreso from '../pages/Ingreso';
import { Wrapper } from './style.js';
import Report from '../pages/Report';
import { Router, Link } from '@reach/router';
class App extends Component {
  render() {
    return (
      <Wrapper className="App">
        <Router>
          <Ingreso path="/"></Ingreso>
          <Asistencia path="/asistencia"></Asistencia>
          <Report path="/reporte"></Report>
        </Router>
      </Wrapper>
    );
  }
}

export default App;
