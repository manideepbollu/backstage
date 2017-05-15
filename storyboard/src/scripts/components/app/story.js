import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Story extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article>
                <a href="#" className="image"><img src={this.props.imgSrc} alt="" /></a>
                <h3>{this.props.title}</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul className="actions">
                    <li><a href="#" className="button">More</a></li>
                </ul>
            </article>
        );
    }
}
