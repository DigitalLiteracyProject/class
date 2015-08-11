import React from 'react';
import {ButtonLink} from 'react-router-bootstrap';

/**
 * Boilerplate for a "leaf" view -- one without sub-views.
 */
let HomeView = React.createClass({

    render: function() {

        return (
            <div className="hero-unit">
                <h1>This is DLP Class!</h1>
                <p>Home Page Yo(TM).</p>
                <ButtonLink to="student-login" bsStyle="primary">Student</ButtonLink>
                <ButtonLink to="teacher-login" bsStyle="default">Teacher</ButtonLink>
            </div>
        );
    }
});

export default HomeView;
