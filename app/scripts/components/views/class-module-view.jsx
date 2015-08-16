import React from 'react';
import {Row, Col, Panel} from 'react-bootstrap';

/**
 * When a module is being used in a class, shows a preview of it and
 * module-specific student data.
 */
let ClassModuleView = React.createClass({

    render: function() {
        return (
            <div>
                <h2>"My Cool Module"</h2>

                <Row>
                    <Col xs={12} md={6}>
                        <h3>Module Preview</h3>

                        {/* TODO(neel): extract this out to its own component
                            (the same preview appears in class dashboard view)
                            */}
                        <Panel>
                            <h3>Module Preview</h3>
                        </Panel>
                    </Col>
                    <Col xs={12} md={6}>
                        <h3>Student Data</h3>

                        <Row>
                            <Col xs={6} md={4}>
                                <Panel>
                                    A
                                </Panel>
                            </Col>
                            <Col xs={6} md={4}>
                                <Panel>
                                    B
                                </Panel>
                            </Col>
                            <Col xs={6} md={4}>
                                <Panel>
                                    C
                                </Panel>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
});

export default ClassModuleView;
