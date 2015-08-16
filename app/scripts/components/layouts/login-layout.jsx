import React from 'react';
import {RouteHandler} from 'react-router';
import {Row, Col} from 'react-bootstrap';

/**
 * Wraps login views for students and teachers.
 */
let LoginLayout = React.createClass({

    render: function() {

        return (
            <div>
                <div className="container centered">
                    <Row>
                        <Col xs={12} md={4} mdOffset={4}>
                            <img src="images/dlp-logo.png"
                                className="img img-responsive vertical-padding"
                                alt="Digital Literacy Project" />
                            <RouteHandler/>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
});

export default LoginLayout;
