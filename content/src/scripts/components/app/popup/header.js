import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav id="popup-header" className="navbar navbar-default">
        <a id="popup-brand" href="#">
          <h1>backstage</h1>
        </a>
      </nav>
    );
  }
}
