import React from 'react';
import {RouteHandler} from 'react-router';

/**
 * Boilerplate for a view that contains other views.
 */
let ShellLayout = React.createClass({

    render: function() {

        return (
            <div>
                <h2>This is your classroom.</h2>
                <RouteHandler/>
            </div>
        );
    }
});

export default ShellLayout;
