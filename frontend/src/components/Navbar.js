import React from 'react';
import { MdMenu } from 'react-icons/md';

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="w3-bar w3-primary w3-card w3-padding-10">
      <a
        href="#"
        className="w3-bar-item w3-button w3-hover-none w3-hover-text-success"
        onClick={toggleSidebar}
      >
        <MdMenu className="w3-xlarge" />
      </a>
      <a className="w3-bar-item w3-button w3-hover-none w3-hover-text-success w3-right">
        Settings
      </a>
    </div>
  );
};

export default Navbar;
