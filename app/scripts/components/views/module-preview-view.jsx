import React from 'react';
import {Panel, PageHeader} from 'react-bootstrap';

/**
 * Previews a module when the teacher is just browsing for modules.
 */
let ModulePreviewView = React.createClass({

    render: function() {
        return (
            <div>
                <PageHeader>
                    "Cool Module"
                    <small>By Neel</small>
                </PageHeader>

                {/* TODO(neel): display # of module uses, stars here */}
                <Panel>
                    <h3>Module Preview</h3>
                </Panel>
            </div>
        );
    }
});

export default ModulePreviewView;
