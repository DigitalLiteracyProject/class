import React from 'react';
import {ButtonLink} from 'react-router-bootstrap';

/**
 * Boilerplate for a "leaf" view -- one without sub-views.
 */
let HomeView = React.createClass({

    render: function() {

        return (
            <div className="hero-unit">
                <h1>Sup, teacher!</h1>
                <ButtonLink to="class-dashboard" params={{ classId: 1636 }}>Go teach</ButtonLink>
            </div>
        );
    }
});

export default HomeView;
