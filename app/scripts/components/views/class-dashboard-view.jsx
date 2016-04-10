import React from 'react';
import {ButtonLink} from 'react-router-bootstrap';
import {Row, Col, Panel, Input, Button} from 'react-bootstrap';

import MarkdownModule from '../../modules/markdown';

/**
 * A teacher's home page when running a class. Contains a list of modules
 * available to the teacher and information about the current module.
 */
let ClassDashboardView = React.createClass({

    getCurModuleComponent: function() {
	let Module = this.state.curModule.studentViewComponent;
	return <Module />;
    },
  
    getInitialState: function() {
	// testing out a module
        let module = new MarkdownModule("default", "# header");
        let ModuleComponent = module.studentViewComponent;
	return {
	    curModule: module
	};
    },
    
    render: function() {
        let searchButton = (
            <Button>
                Search
            </Button>
        );

        // testing out a module
        let module = new MarkdownModule("default", "# header");
        let ModuleComponent = module.studentViewComponent;

	// some dummy modules the teacher can choose to show
	// TODO(brian): create database for this and populate
	let moduleA = new MarkdownModule("A","This is the A module");
	let moduleB = new MarkdownModule("B","This is the B module");
	let moduleC = new MarkdownModule("C","This is not the D module");
	let ModuleAPreview = moduleA.teacherPreviewComponent;
	let ModuleBPreview = moduleB.teacherPreviewComponent;
	let ModuleCPreview = moduleC.teacherPreviewComponent;


	
        return (
            <Row>
                <Col xs={12} md={6}>
                    <h2>"My Current Module"</h2>

                    <Panel>
                      {this.getCurModuleComponent()}
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
                            <Panel onClick={()=>{
				this.setState({curModule: moduleA});
				// TODO(brian): emit via socket, pass module,
				// set up listener elsewhere
			    }}>
                                <ModuleAPreview />
                            </Panel>
                        </Col>
                        <Col xs={6} md={4}>
	                    <Panel onClick={()=>this.setState({curModule: moduleB})}>
                                <ModuleBPreview />
                            </Panel>
                        </Col>
                        <Col xs={6} md={4}>
	                    <Panel onClick={()=>this.setState({curModule: moduleC})}>
                                <ModuleCPreview />
                            </Panel>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
});

export default ClassDashboardView;
