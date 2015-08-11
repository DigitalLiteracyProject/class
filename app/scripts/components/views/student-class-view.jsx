import React from 'react';

/**
 * Boilerplate for a "leaf" view -- one without sub-views.
 */
let HomeView = React.createClass({

    render: function() {

        return (
            <div className="hero-unit">
                <h1>Sit down, kid.</h1>
            </div>
        );
    }
});

export default HomeView;
