import React from 'react';
import {ButtonLink} from 'react-router-bootstrap';
import {Row, Col, Panel, Input, Button} from 'react-bootstrap';

import MarkdownModule from '../../modules/markdown';

/**
 * A teacher's home page when running a class. Contains a list of modules
 * available to the teacher and information about the current module.
 */
let ClassDashboardView = React.createClass({

    render: function() {
        let searchButton = (
            <Button>
                Search
            </Button>
        );

        // testing out a module
        let module = new MarkdownModule("# header");
        let ModuleComponent = module.studentViewComponent;

        return (
            <Row>
                <Col xs={12} md={6}>
                    <h2>"My Current Module"</h2>

                    <Panel>
                        <ModuleComponent />
                    </Panel>

                    <ButtonLink
                            to="class-module"
                            params={{ classId: 1636, moduleId: 42 }}
                            bsStyle="primary"
                            block>
                        View student input
                    </ButtonLink>
                </Col>
                <Col xs={12} md={6}>
                    <h2>Choose a new module</h2>

                    <Input type="text" buttonAfter={searchButton} />

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
        );
    }
});

export default ClassDashboardView;
