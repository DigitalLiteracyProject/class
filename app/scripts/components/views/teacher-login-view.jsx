import React from 'react';
import {ButtonLink} from 'react-router-bootstrap';

/**
 * Renders a page for teachers to log in.
 */
let TeacherLoginView = React.createClass({

    render: function() {
        return (
            <ButtonLink
                    to="teacher-dashboard"
                    bsStyle="primary"
                    bsSize="large"
                    block>
                Log in with Google
            </ButtonLink>
        );
    }
});

export default TeacherLoginView;
