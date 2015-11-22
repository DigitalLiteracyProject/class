import React from 'react';

import Module from './module';

/**
 * A Module with which you can render arbitrary Markdown.
 */
let MarkdownModule = class {
    getStudentViewComponent() {
        return new React.createClass({
            render: function() {
                return (
                    <p>Hi</p>
                );
            }
        });
    }

    getEditViewComponent() {
        return new React.createClass({
            render: function() {
                return (
                    <p>Hey</p>
                );
            }
        });
    }
};

export default MarkdownModule;
