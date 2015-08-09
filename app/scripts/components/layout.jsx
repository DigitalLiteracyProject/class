import React from 'react';
import {RouteHandler} from 'react-router';

/**
 * Top-level wrapper component; all other views are contained within this.
 */
let Layout = React.createClass({

    render: function() {

        return (
            <div className="App">
                <RouteHandler/>
            </div>
        );
    }
});

export default Layout;
