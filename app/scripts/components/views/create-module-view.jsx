import React from 'react';
import {Input, Button} from 'react-bootstrap';

/**
 * Boilerplate for a "leaf" view -- one without sub-views.
 */
let CreateModuleView = React.createClass({

    render: function() {
        return (
            <div>
                <Input type="select" placeholder="Module type">
                  <option value="type-1">Type 1</option>
                </Input>
                <Input
                    type="text"
                    placeholder="Module name" />

                <h3>Custom module customization</h3>

                <Button
                        bsStyle="primary"
                        bsSize="large"
                        block>
                    Create module
                </Button>
            </div>
        );
    }
});

export default CreateModuleView;
