import React from 'react';
import { Header } from './style';
import { Link } from '@reach/router';
export default props => {
  return (
    <Header>
      <nav>
        <div className="logo" style={{ 'margin-top': '8px' }}>
          <img
            width="130"
            src="https://rcp.pe/img/rcpWebLogo.png"
            alt="RCP"
          ></img>
        </div>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          {/* <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li> */}
          <li>
            <Link to="/reporte">Reporte</Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
};
