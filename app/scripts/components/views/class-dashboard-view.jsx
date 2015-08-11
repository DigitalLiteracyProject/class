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
                <p>Not CS50.</p>
                <ButtonLink to="class-module" params={{ classId: 1636, moduleId: 42 }}>Check out a module</ButtonLink>
            </div>
        );
    }
});

export default HomeView;
