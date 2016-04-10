import React from 'react';
import {Panel} from 'react-bootstrap';

import Module from './module';

/**
 * A Module with which you can render arbitrary Markdown.
 */
let MarkdownModule = class extends Module {
    constructor(name,markdown){
        super();
	this.name = name
        this.markdown = markdown;
    }

    get studentViewComponent() {
        return React.createClass({
            render: () => {
                return (
                    <p>{this.markdown}</p>
                );
            }
        });
    }

    get teacherPreviewComponent() {
	return React.createClass({
	    render: () => {
		return (
		    <p>{this.name}</p>
		)
	    }
	})
    }

    get editViewComponent() {
        return React.createClass({
            render: function() {
                return (
                    <p>Hey</p>
                );
            }
        });
    }
};

export default MarkdownModule;
