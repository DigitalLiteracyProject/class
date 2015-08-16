import React from 'react';
import {Panel} from 'react-bootstrap';

/**
 * What a student sees when they are in class. Little more than a module's
 * display.
 */
let StudentClassView = React.createClass({

    render: function() {

        return (
            <Panel>
                <h1>Module goes here</h1>
            </Panel>
        );
    }
});

export default StudentClassView;
