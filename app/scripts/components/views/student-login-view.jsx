import React from 'react';
import {ButtonLink} from 'react-router-bootstrap';
import {Input} from 'react-bootstrap';

/**
 * Renders a page for students to log in.
 */
let StudentLoginView = React.createClass({

    render: function() {
        return (
            <div>
                <Input
                    type="text"
                    placeholder="First name" />
                <Input
                    type="text"
                    placeholder="Last name" />
                <ButtonLink
                        to="student-class"
                        bsStyle="primary"
                        bsSize="large"
                        block>
                    Enter class
                </ButtonLink>
            </div>
        );
    }
});

export default StudentLoginView;
