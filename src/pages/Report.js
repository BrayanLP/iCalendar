import React, { Component } from 'react';
import CardDashboard from '../components/card/dashboard';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { Bar } from 'react-chartjs-2';
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import { Main } from '../components/App/style';
import { CardDashboardLists, Col2 } from '../components/card/style';
import { database, firestore } from '../firebase';
// import { FirestoreCollection } from 'react-firestore';
import { O2A } from 'object-to-array-convert';

const data = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
  datasets: [
    {
      label: 'Tardanza mensual',
      backgroundColor: 'rgba(24,200,255,0.2)',
      borderColor: '#3498db',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(26,288,156,0.4)',
      hoverBorderColor: '#3498db',
      data: [10, 20, 2, 0, 0, 0, 5, 8]
    }
  ]
};
class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log('cargando...');
    this.getList();
    // firestore
    //   .collection('todolist')
    //   .get()
    //   .then(querySnapshot => {
    //     querySnapshot.forEach(doc => {
    //       console.log(`${doc.id} => ${doc.data()}`);
    //     });
    //   });
    // console.log(todo);
  }
  getList = () => {
    database.ref('/todolist').on('value', snapshot => {
      const list = O2A(snapshot);
      console.log('TCL: Report -> getList -> list', list);
      return list;
    });
    console.log(data);
  };

  render() {
    return (
      <>
        <Navbar></Navbar>
        <Main>
          <Title>!Hola, Brayan Laureano Paucar</Title>
          {/* <FirestoreCollection
            path={'todolist'}
            render={({ isLoading, data, snapshot }) => {
              console.log(
                'TCL: Report -> render ->  isLoading, data,snapshot',
                isLoading,
                data,
                snapshot
              );
              return (
                <div>
                  listado de cosas, {data} {snapshot}
                  {data.map((res, index) => (
                    <div>{res}</div>
                  ))}
                </div>
              );
            }}
          ></FirestoreCollection> */}
          <CardDashboardLists className="cards-list">
            <CardDashboard
              time="10 min "
              description="tardanzas"
            ></CardDashboard>
            <CardDashboard time="20 min " description="permiso"></CardDashboard>
            <CardDashboard
              time="60 min "
              description="Tiempo Extra"
            ></CardDashboard>
            <CardDashboard
              time="5 dias"
              description="Vacaciones"
            ></CardDashboard>
            <CardDashboard
              time="2 dias"
              description="Ausencias"
            ></CardDashboard>
            <CardDashboard time="1 h" description="Diferencial"></CardDashboard>
          </CardDashboardLists>
          <Col2 className="middle">
            <div>
              <h2> Asistencia semanal</h2>
              <Timeline lineColor={'#ddd'}>
                <TimelineItem key="1" dateText="Lunes">
                  {/* <h3>Ingreso 09:30am</h3> */}
                  <p>
                    Ingreso 09:30am <br></br> Salida 07:00 pm
                  </p>
                </TimelineItem>
                <TimelineItem key="2" dateText="Martes">
                  {/* <h3>Ingreso 09:30am</h3> */}
                  <p>
                    Ingreso 09:30am <br></br> Salida 07:00 pm
                  </p>
                </TimelineItem>
                <TimelineItem key="3" dateText="Miercoles">
                  {/* <h3>Ingreso 09:30am</h3> */}
                  <p>
                    Ingreso 09:30am <br></br> Salida 07:00 pm
                  </p>
                </TimelineItem>
                <TimelineItem key="4" dateText="Jueves">
                  {/* <h3>Ingreso 09:30am</h3> */}
                  <p>
                    Ingreso 09:30am <br></br> Salida 07:00 pm
                  </p>
                </TimelineItem>
                <TimelineItem key="5" dateText="Viernes">
                  {/* <h3>Ingreso 09:30am</h3> */}
                  <p>
                    Ingreso 09:30am <br></br> Salida 07:00 pm
                  </p>
                </TimelineItem>
              </Timeline>
            </div>

            <div>
              <h2> Estado 12 últimos meses</h2>
              <Bar data={data} />
            </div>
          </Col2>
        </Main>
      </>
    );
  }
}

export default Report;
