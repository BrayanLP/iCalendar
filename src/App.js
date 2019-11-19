import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Instascan, { Scanner, Camera } from "instascan-umd";
// import {Scanner} from 'Instascan'
import { Cameras, Scanner } from "react-instascan";
import QrReader from 'react-qr-reader'
class App extends Component {
  // let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
  // scanner.addListener('scan', function (content) {
  //   console.log(content);
  // });
  // Instascan.Camera.getCameras().then(function (cameras) {
  //   if (cameras.length > 0) {
  //     scanner.start(cameras[0]);
  //   } else {
  //     console.error('No cameras found.');
  //   }
  // }).catch(function (e) {
  //   console.error(e);
  // });

  state = {
    result: 'No result'
  }

  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {

    return (
      <div className="App" >
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <video id='preview' width="400" height="400"></video> */}
          <div style={{ width: '300px' }}>
            <QrReader
              delay={300}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: '100%' }}
            />

          </div>
          <p>{this.state.result}</p>

          <p>
            Ingreso de personal RCP
          </p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
    );
  }
}

export default App;
