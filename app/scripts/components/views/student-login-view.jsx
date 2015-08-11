import React from 'react';
import {ButtonLink} from 'react-router-bootstrap';

/**
 * Boilerplate for a "leaf" view -- one without sub-views.
 */
let HomeView = React.createClass({

    render: function() {

        return (
            <div className="hero-unit">
                <ButtonLink to="student-class">Go to class</ButtonLink>
            </div>
        );
    }
});

export default HomeView;
