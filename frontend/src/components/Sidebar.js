import React from 'react';

const Sidebar = ({ sideBarStyle }) => {
  return (
    <div
      className="w3-sidebar w3-bar-block w3-secondary w3-card w3-animate-left"
      style={sideBarStyle}
    >
      <a className="w3-bar-item w3-button" href="#">
        Link 1
      </a>
      <a className="w3-bar-item w3-button" href="#">
        Link 2
      </a>
      <a className="w3-bar-item w3-button" href="#">
        Link 3
      </a>
    </div>
  );
};

export default Sidebar;
