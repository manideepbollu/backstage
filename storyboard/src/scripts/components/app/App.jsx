import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './header';
import Banner from './banner';
import Stories from './stories';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="wrapper">
        <div id="main">
          <div className="inner">
            <Header />
            <Banner />
            <Stories />
          </div>
        </div>
      </div>
    );
  }
}

let mapStoreToProps = (store) => {
  return {
    icon: store.icon,
    tab: store.tab
  };
};

export default connect(mapStoreToProps)(App);
