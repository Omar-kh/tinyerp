import React, { Component } from 'react';

export default class Burgermenu extends Component {
  state = {};

  activateBurger = event => {
    const burgerIcon = event.target.closest('.navbar-burger');
    const burgerMenu = document.getElementById(burgerIcon.dataset.target);

    burgerIcon.classList.toggle('is-active');
    burgerMenu.classList.toggle('is-active');
  };

  render = () => {
    return (
      <a
        onClick={this.activateBurger}
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    );
  };
}
