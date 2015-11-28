import React from 'react';

import Module from './module';

/**
 * A Module with which you can render arbitrary Markdown.
 */
let MarkdownModule = class extends Module {
    constructor(markdown){
        super();
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
