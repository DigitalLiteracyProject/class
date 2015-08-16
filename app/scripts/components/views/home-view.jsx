import React from 'react';
import {ButtonLink} from 'react-router-bootstrap';
import {PageHeader} from 'react-bootstrap';

/**
 * Boilerplate for a "leaf" view -- one without sub-views.
 */
let HomeView = React.createClass({

    render: function() {
        return (
            <div className="container">
                <PageHeader>DLP Class</PageHeader>

                <h2>Log in</h2>
                <ButtonLink
                        bsStyle="primary"
                        bsSize="large"
                        to="student-login">
                    Student
                </ButtonLink>
                &nbsp;
                <ButtonLink
                        bsStyle="default"
                        bsSize="large"
                        to="teacher-login">
                    Teacher
                </ButtonLink>
            </div>
        );
    }
});

export default HomeView;
