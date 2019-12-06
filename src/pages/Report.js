import React, { Component } from 'react';
import CardDashboard from '../components/card/dashboard';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { Bar } from 'react-chartjs-2';
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import { Main } from '../containers/style';
import { CardDashboardLists, Col2 } from '../components/card/style';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(24,200,255,0.2)',
      borderColor: '#3498db',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(26,288,156,0.4)',
      hoverBorderColor: '#3498db',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Navbar></Navbar>
        <Main>
          <Title>Brayan Laureano Paucar</Title>
          <CardDashboardLists className="cards-list">
            <CardDashboard
              time="30 min "
              description="tardanzas"
            ></CardDashboard>
            <CardDashboard time="30 min " description="permiso"></CardDashboard>
            <CardDashboard
              time="30 min "
              description="Tiempo Extra"
            ></CardDashboard>
            <CardDashboard
              time="30 min "
              description="Vacaciones"
            ></CardDashboard>
            <CardDashboard
              time="30 min "
              description="Ausencias"
            ></CardDashboard>
            <CardDashboard
              time="30 min "
              description="Diferencial"
            ></CardDashboard>
          </CardDashboardLists>
          <Col2 className="middle">
            <div>
              <h2> Asistencia semanal</h2>
              <Timeline lineColor={'#ddd'}>
                <TimelineItem key="001" dateText="11/2010 – Present">
                  <h3>Title, Company</h3>
                  <p>Est incididunt sint eu minim dolore</p>
                </TimelineItem>
                <TimelineItem key="002" dateText="04/2009 – 11/2010">
                  <h3>Title, Company</h3>
                  <p>Est incididunt sint eu minim dol</p>
                </TimelineItem>
              </Timeline>
            </div>

            <div>
              <h2> Estado 12 últimos meses</h2>
              <Bar data={data} options={{ maintainAspectRatio: false }} />
            </div>
          </Col2>
        </Main>
      </>
    );
  }
}

export default Report;
