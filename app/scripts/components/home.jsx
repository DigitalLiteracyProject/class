import React from 'react';

/**
 * Boilerplate for a "leaf" view; that is, one without sub-views.
 */
let Home = React.createClass({

    render: function() {

        return (
            <div className="hero-unit">
                <h1>This is DLP Class!</h1>
                <p>Not CS50.</p>
            </div>
        );
    }
});

export default Home;
