import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="popup-footer">
        <button type="button" className="btn btn-default">Go Backstage</button>
      </div>
    );
  }
}
