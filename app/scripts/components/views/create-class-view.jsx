import React from 'react';
import {Input, Button} from 'react-bootstrap';
/**
 * Lets the user create a new class.
 */
let CreateClassView = React.createClass({

    render: function() {
        return (
            <div>
                <Input
                    type="text"
                    placeholder="Class name" />
                <Button
                        bsStyle="primary"
                        bsSize="large"
                        block>
                    Create class
                </Button>
            </div>
        );
    }
});

export default CreateClassView;
