import React from 'react';

const MainContent = ({ children }) => {
  return (
    <div className="w3-flex-stretch w3-flex w3-flex-column">{children}</div>
  );
};

export default MainContent;
