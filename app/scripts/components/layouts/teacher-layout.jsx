import React from 'react';
import {RouteHandler} from 'react-router';
import {
    Navbar, Nav, NavItem
} from 'react-bootstrap';

/**
 * Defines the layout for all teacher pages. Contains the navigation, etc.
 */
let TeacherLayout = React.createClass({

    render: function() {

        return (
            <div>
                <Navbar brand='DLP Class' toggleNavKey={0}>
                    <Nav eventKey={0} right>
                        {/* This is the eventKey referenced */}
                        <NavItem eventKey={1} href='#'>Link</NavItem>
                        <NavItem eventKey={2} href='#'>Link</NavItem>
                    </Nav>
                </Navbar>

                <RouteHandler/>
            </div>
        );
    }
});

export default TeacherLayout;
