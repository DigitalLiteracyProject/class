import React from 'react';
import Router, {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import Layout from './components/layout';
import Home from './components/home';
import NotFound from './components/notfound';
import Shell from './components/shell';
import TeacherLayout from './components/teacher-layout';

let routes = (
    <Route handler={Layout} name="layout" path="/">
        <Route handler={Home} name="student-login" path="/student/login"/>
        <Route handler={Home} name="teacher-login" path="/teacher/login"/>

        <Route handler={Shell} name="student-layout" path="/student">
            <DefaultRoute handler={Home} name="student-class"/>
        </Route>

        <Route handler={TeacherLayout} name="teacher-layout" path="/teacher">
            <Route handler={Shell} name="class" path="class/:classId">
                <Route handler={Home} name="running-module" path="modules/:moduleId"/>
                <DefaultRoute handler={Home} name="class-dashboard"/>
            </Route>

            <Route handler={Shell} name="teacher-modules" path="modules">
                <Route handler={Home} name="preview-module" path=":moduleId"/>
                <DefaultRoute handler={Home} name="module-library"/>
            </Route>

            <Route handler={Home} name="create-class" path="create/class"/>
            <Route handler={Home} name="create-module" path="create/module"/>

            <DefaultRoute handler={Home} name="teacher-dashboard"/>
        </Route>

        <DefaultRoute handler={Home}/>
        <NotFoundRoute handler={NotFound}/>
    </Route>
);

export function start() {
    Router.run(routes, function(Handler) {
        React.render(<Handler/>, document.getElementById('content'));
    });
}
