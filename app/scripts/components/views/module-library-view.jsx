import React from 'react';
import {ButtonLink} from 'react-router-bootstrap';
/**
 * Boilerplate for a "leaf" view -- one without sub-views.
 */
let HomeView = React.createClass({

    render: function() {

        return (
            <div className="hero-unit">
                <h1>Modules -- Modules everywhere</h1>
                <ButtonLink to="preview-module" params={{ moduleId: 95 }}>Check one out</ButtonLink>
            </div>
        );
    }
});

export default HomeView;
