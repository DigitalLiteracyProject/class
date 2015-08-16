import React from 'react';
import {ButtonLink} from 'react-router-bootstrap';
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
                <h2>Choose a new module</h2>

                <Input type="text" buttonAfter={searchButton} />

                <Row>
                    <Col xs={6} md={4}>
                        <Panel>
                            {/* TODO(neel): STOPSHIP make this Panel a link
                                in itself */}
                            <ButtonLink
                                    to="preview-module"
                                    params={{ moduleId: 95 }}>
                                First module
                            </ButtonLink>
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
