import React from 'react';

import Module from './module';

/**
 * A Module with which you can render arbitrary Markdown.
 */
let MarkdownModule = class extends Module{
    get studentViewComponent() {
        return new React.createClass({
            render: function() {
                return (
                    <p>Hi</p>
                );
            }
        });
    }

    get editViewComponent() {
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
