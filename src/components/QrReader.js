import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

export default class extends Component {


   state = {
      result: 'No result'
   }

   handleScan = data => {
      if (data) {
         // this.props.dispatch()
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
         <>
            <div style={{ width: '300px' }}>
               <QrReader
                  delay={3000}
                  onError={this.handleError}
                  onScan={this.handleScan}
                  style={{ width: '100%' }}
               />

            </div>
            <p>{this.state.result}</p>

            <p>
               Ingreso de personal RCP
        </p>
         </>
      )
   }
}