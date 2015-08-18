import React from 'react';
import {RouteHandler} from 'react-router';
import io from 'socket.io-client';

/**
 * Top-level wrapper component; all other views are contained within this.
 */
let TopLayout = React.createClass({

    componentDidMount: function() {
        let socket = io('http://localhost:5000');
        console.log(socket);
        socket.on('connect', () => {
            console.log("connected");
        });
        socket.on("news", (data) => {
            console.log("Got news from socket.io:", data);
        })
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
