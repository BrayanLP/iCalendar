import React, { Component } from 'react';
import QrReader from '../components/QrReader';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Asistencia from '../pages/Asistencia';
import Ingreso from '../pages/Ingreso';
import { Wrapper } from './style.js';
class App extends Component {
  render() {
    return (
      <Wrapper className="App">
        <Router>
          <div>
            {/* <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/asistencia">Asistencia</Link>
                </li>
                <li>
                  <Link to="/ingreso">Ingreso</Link>
                </li>
              </ul>
            </nav> */}
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>

              <Route exact path="/asistencia">
                <Asistencia></Asistencia>
              </Route>
              <Route exact path="/ingreso">
                <Ingreso></Ingreso>
              </Route>
            </Switch>
          </div>
        </Router>
      </Wrapper>
    );
  }
}

export default App;
