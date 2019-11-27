import React from 'react';
import { CardWrapper, CardTitle, CardBody, CardFooter } from './style';

export default ({ title = '', children, footer = '' }) => {
  return (
    <CardWrapper className="card">
      <CardTitle className="card-title">{title}</CardTitle>
      <CardBody className="card-body">{children}</CardBody>
      <CardFooter className="card-footer">{footer}</CardFooter>
    </CardWrapper>
  );
};
