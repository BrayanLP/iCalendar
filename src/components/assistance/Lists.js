import React, { Component } from 'react';
import ListAssistance from './List';
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { getAssistance } = this.props;
    /**
     * Obteniendo las asistencias
     */
    getAssistance();
  }

  render() {
    const { listAssistance = [] } = this.props;
    console.log(this.props, 'component listassitance');
    return (
      <>
        <ul>
          {listAssistance.map((res, index) => {
            return <ListAssistance key={index + 1} {...res}></ListAssistance>;
          })}
        </ul>

        {/* <p>Ingreso de personal RCP</p> */}
      </>
    );
  }
}
