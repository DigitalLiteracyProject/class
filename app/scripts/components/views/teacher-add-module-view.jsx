import React from 'react';
import {ListGroupItemLink} from 'react-router-bootstrap';
import {PageHeader, ListGroup, ListGroupItem} from 'react-bootstrap';

/**
 * Renders a page from which you can create a new module.
 */
 let TeacherAddModuleView = React.createClass({

     render: function() {
         return (
             <ButtonLink
                     to=""
                     bsStyle="primary"
                     bsSize="large"
                     block>
                 Dummy 1
             </ButtonLink>
         );
     }
 });

 export default TeacherAddModuleView;
