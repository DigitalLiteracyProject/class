var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

/**
 * Boilerplate for a view that contains other views.
 */
var Shell = React.createClass({

    render: function() {

        return (
            <div>
                <RouteHandler/>
            </div>
        );
    }
});

module.exports = Shell;
