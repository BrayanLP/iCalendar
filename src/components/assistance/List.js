import React from 'react';

export default ({
  fullName = 'Default',
  status = '',
  startTime = null,
  endTime = null,
  id = null
}) => {
  return (
    <li>
      Id: {id}
      <br />
      Nombre Completo: {fullName}, <br></br>
      Estado : {status} <br></br>
      Hora de ingreso : {startTime}, <br></br>
      Hora de salida : {endTime} <br></br>
    </li>
  );
};
