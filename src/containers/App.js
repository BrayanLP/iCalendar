import React, { Component } from 'react';
import QrReader from '../components/QrReader';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Asistencia from '../pages/Asistencia';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/asistencia">Asistencia</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>

              <Route exact path="/asistencia">
                <Asistencia></Asistencia>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
