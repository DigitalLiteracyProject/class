import React from 'react';
import {RouteHandler} from 'react-router';
import {PageHeader} from 'react-bootstrap';

/**
 * Shell for all views triggered when a teacher is leading a class.
 */
let ClassLayout = React.createClass({

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

export default ClassLayout;
