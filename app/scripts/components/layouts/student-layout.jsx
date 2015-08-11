import React from 'react';
import {RouteHandler} from 'react-router';
import {
    Navbar, Nav, NavItem
} from 'react-bootstrap';

/**
 * Boilerplate for a view that contains other views.
 */
let ShellLayout = React.createClass({

    render: function() {

        return (
            <div>
                <Navbar brand='DLP Class' toggleNavKey={0}>
                    <Nav eventKey={0} right>
                        <NavItem eventKey={1}>Your School Fall 2015</NavItem>
                    </Nav>
                </Navbar>

                <RouteHandler/>
            </div>
        );
    }
});

export default ShellLayout;
