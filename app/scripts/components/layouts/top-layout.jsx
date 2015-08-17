import React from 'react';
import {RouteHandler} from 'react-router';
import io from 'socket.io-client';

/**
 * Top-level wrapper component; all other views are contained within this.
 */
let TopLayout = React.createClass({

    componentDidMount: function() {
        let socket = io();
        // TODO(neel): test this here
    },

    render: function() {
        return (
            <div className="App">
                <RouteHandler/>
            </div>
        );
    }
});

export default TopLayout;
