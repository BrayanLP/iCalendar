import React from 'react';
import { WrapperText } from './style';

export default ({ type, children }) => {
  return (
    <>
      <WrapperText>
        {type === 'h1' && <h1>{children}</h1>}
        {type === 'h2' && <h2>{children}</h2>}
        {type === 'h3' && <h3>{children}</h3>}
        {type === 'h4' && <h4>{children}</h4>}
        {type === 'h5' && <h5>{children}</h5>}
        {type === 'h6' && <h6>{children}</h6>}
      </WrapperText>
    </>
  );
};
