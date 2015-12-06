import React from 'react';
import {RouteHandler} from 'react-router';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {NavItemLink} from 'react-router-bootstrap';

/**
 * Defines the layout for all teacher pages. Contains the navigation, etc.
 */
let TeacherLayout = React.createClass({

    render: function() {

        // TODO(neel): make a DLPNavbar component that abstracts this away
        return (
            <div>
                <Navbar brand='DLP Class' toggleNavKey={0}>
                    <Nav eventKey={0} right>
                        <NavItemLink to="teacher-dashboard" eventKey={1}>Dashboard</NavItemLink>
                        <NavItemLink to="module-library" eventKey={2}>Module Library</NavItemLink>
                        <NavItemLink to="change-module" eventKey={3}>Add/edit modules</NavItemLink>
                        {/* TODO(neel): make this actually log out */}
                        <NavItemLink to="teacher-login" eventKey={3}>Log Out</NavItemLink>
                    </Nav>
                </Navbar>

                <div className="container">
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});

export default TeacherLayout;
