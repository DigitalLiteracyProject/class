import React from 'react';
import {RouteHandler} from 'react-router';
import {PageHeader} from 'react-bootstrap';

/**
 * Boilerplate for a view that contains other views.
 */
let ShellLayout = React.createClass({

    render: function() {

        return (
            <div>
                <PageHeader>Your Cool Class Fall 2015</PageHeader>
                <div className="container">
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});

export default ShellLayout;
