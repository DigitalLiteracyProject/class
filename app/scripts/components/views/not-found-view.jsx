import React from 'react';
import {ButtonLink} from 'react-router-bootstrap';

/**
 * A 404 page.
 */
let NotFound = React.createClass({

    render: function() {

        return (
            <div className="container">
                <h1>404 :(</h1>
                <ButtonLink to="home">
                    Go home
                </ButtonLink>
            </div>
        );
    }
});

export default NotFound;
