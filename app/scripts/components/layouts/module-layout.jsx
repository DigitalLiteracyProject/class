import React from 'react';
import {RouteHandler} from 'react-router';

/**
 * Wraps all teacher module views, e.g. the teacher's module library.
 */
let ModuleLayout = React.createClass({

    render: function() {
        return (
            <div>
                <div className="container">
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});

export default ModuleLayout;
