import React from 'react';
import { CardDashboard } from './style';
export default ({ time, description }) => {
  return (
    <CardDashboard className="card">
      <div className="title">{time}</div>
      <div className="body">{description}</div>
    </CardDashboard>
  );
};
