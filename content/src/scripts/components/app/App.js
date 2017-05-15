import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShadowDOM from 'react-shadow';
import Header from './popup/header';
import Footer from './popup/footer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let popup = null;

    if (this.props.icon !== undefined && this.props.icon.clicked) {
      popup = <ShadowDOM include={[chrome.extension.getURL('assets/css/popup.css')]}>
                <div id="bs-shadow">
                  <div id="bs-popup">
                    <div id="popup-content">
                      <Header />
                      <Footer />
                    </div>
                  </div>
                </div>
              </ShadowDOM>;
    } else {
      popup = "";
    }

    return (
      <div>
        {popup}
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
