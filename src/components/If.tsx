import React from 'react';

interface Props {
  condition: any;
}

const If: React.FC<Props> = ({ condition, children }) => {
  return <>{condition ? children : null}</>;
}

export default If;
