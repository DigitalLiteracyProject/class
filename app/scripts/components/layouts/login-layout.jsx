import React from 'react';
import {RouteHandler} from 'react-router';

/**
 * Boilerplate for a view that contains other views.
 */
let ShellLayout = React.createClass({

    render: function() {

        return (
            <div>
                <h1>You're logging in to DLP Class.</h1>
                <div className="container">
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});

export default ShellLayout;
