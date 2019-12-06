import React from 'react';
import { Header } from './style';
export default props => {
  return (
    <Header>
      <nav>
        <div className="logo">
          <img src=""></img>
        </div>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/Dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/reporte">Reporte</a>
          </li>
        </ul>
      </nav>
    </Header>
  );
};
