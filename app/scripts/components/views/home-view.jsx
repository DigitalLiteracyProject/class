import React from 'react';
import {ButtonLink} from 'react-router-bootstrap';

/**
 * Boilerplate for a "leaf" view -- one without sub-views.
 */
let HomeView = React.createClass({

    render: function() {
        return (
            <div className="container">
                <div className="hero-unit">
                    <h1>This is DLP Class!</h1>
                    <p>Home Page Yo(TM).</p>
                    <ButtonLink bsStyle="primary" to="student-login">Student</ButtonLink>
                    <ButtonLink bsStyle="default" to="teacher-login">Teacher</ButtonLink>
                </div>
            </div>
        );
    }
});

export default HomeView;
