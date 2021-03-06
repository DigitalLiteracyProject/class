import React from 'react';
import {ListGroupItemLink} from 'react-router-bootstrap';
import {PageHeader, ListGroup, ListGroupItem} from 'react-bootstrap';

/**
 * Shown to the teacher upon logging in; contains a list of classes.
 */
let TeacherDashboardView = React.createClass({

    render: function() {
        return (
            <div className="hero-unit">
                <PageHeader>
                    Hi, <strong>Neel</strong>!
                </PageHeader>

                <ListGroup>
                  <ListGroupItemLink
                        to="class-dashboard"
                        params={{ classId: 1636 }}>
                    Cool School Fall 2015
                  </ListGroupItemLink>
                </ListGroup>
            </div>
        );
    }
});

export default TeacherDashboardView;
