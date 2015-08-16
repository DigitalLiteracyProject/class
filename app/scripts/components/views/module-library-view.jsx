import React from 'react';
import {Link} from 'react-router';
import {Row, Col, Panel, Input, Button} from 'react-bootstrap';

/**
 * Boilerplate for a "leaf" view -- one without sub-views.
 */
let HomeView = React.createClass({

    render: function() {
        // TODO(neel): consider removing the search button in favor of
        // auto-loading search results on key press
        let searchButton = (
            <Button>
                Search
            </Button>
        );

        return (
            <div>
                <h2>Your modules</h2>

                <Input type="text" buttonAfter={searchButton} />

                <Row>
                    <Col xs={6} md={4}>
                        <Panel>
                            <Link
                                    to="preview-module"
                                    params={{ moduleId: 95 }}>
                                First module
                            </Link>
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
            </div>
        );
    }
});

export default HomeView;
