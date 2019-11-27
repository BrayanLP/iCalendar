import React from 'react';
import Card from './index';
export default props => {
  return <Card {...props}>{props.children}</Card>;
};
