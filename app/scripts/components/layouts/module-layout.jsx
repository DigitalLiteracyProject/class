import React from 'react';
import {RouteHandler} from 'react-router';

/**
 * Boilerplate for a view that contains other views.
 */
let ShellLayout = React.createClass({

    render: function() {

        return (
            <div>
                <RouteHandler/>
            </div>
        );
    }
});

export default ShellLayout;
