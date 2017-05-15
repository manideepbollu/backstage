import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header id="header">
                <a href="index.html" className="logo"><strong>Storyboard</strong> by Backstage</a>
                <ul className="header-actions">
                    <li><a href="#" className="button ">Something</a></li>
                    <li><a href="#" className="button special ">Go Backstage</a></li>
                </ul>
            </header>
        );
    }
}
