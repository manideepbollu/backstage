import React, { Component } from 'react';
import { connect } from 'react-redux';

import Story from './story';

export default class Stories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stories: [
                {
                    storyUrl: "#",
                    imgSrc: "assets/images/pic01.jpg",
                    title: "Interdum aenean",
                    body: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
                }, {
                    storyUrl: "#",
                    imgSrc: "assets/images/pic02.jpg",
                    title: "Tempus ullamcorper",
                    body: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
                }, {
                    storyUrl: "#",
                    imgSrc: "assets/images/pic03.jpg",
                    title: "Tempus ullamcorper",
                    body: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
                }, {
                    storyUrl: "#",
                    imgSrc: "assets/images/pic04.jpg",
                    title: "Sed etiam facilis",
                    body: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
                }, {
                    storyUrl: "#",
                    imgSrc: "assets/images/pic05.jpg",
                    title: "Feugiat lorem aenean",
                    body: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
                }, {
                    storyUrl: "#",
                    imgSrc: "assets/images/pic06.jpg",
                    title: "Amet varius aliquam",
                    body: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
                }, {
                    storyUrl: "#",
                    imgSrc: "assets/images/pic01.jpg",
                    title: "Feugiat lorem aenean",
                    body: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
                }, {
                    storyUrl: "#",
                    imgSrc: "assets/images/pic02.jpg",
                    title: "Interdum aenean",
                    body: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
                }, {
                    storyUrl: "#",
                    imgSrc: "assets/images/pic03.jpg",
                    title: "Tempus ullamcorper",
                    body: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
                },

            ]
        }  
    }

    render() {
        return (
            <section>
                <header className="major">
                    <h2>Ipsum sed dolor</h2>
                </header>
                <div className="posts">
                    {this.state.stories.map((story, i) => {
                        return <Story key={i} imgSrc={story.imgSrc} title={story.title} />
                    })}
                </div>
            </section>
        );
    }
}
