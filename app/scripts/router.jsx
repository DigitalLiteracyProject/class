import React from 'react';
import Router, {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import Layout from './components/layout';
import Home from './components/home';
import NotFound from './components/notfound';
import Shell from './components/shell';
import TeacherLayout from './components/teacher-layout';

let routes = (
    <Route handler={Layout} name="layout" path="/">

        <Route handler={Shell} name="login-layout" path="/">
            <Route handler={Home} name="student-login" path="student/login"/>
            <Route handler={Home} name="teacher-login" path="teacher/login"/>
        </Route>

        {/* TODO(neel): create student shell (simple header bar) */}
        <Route handler={Shell} name="student-layout" path="/student">
            {/* TODO(neel): create class view (wrapper around module view) */}
            <DefaultRoute handler={Home} name="student-class"/>
        </Route>

        <Route handler={TeacherLayout} name="teacher-layout" path="/teacher">
            {/* TODO(neel): create class wrapper (header with name of class) */}
            <Route handler={Shell} name="class" path="class/:classId">
                {/* TODO(neel): module view (preview & student responses) */}
                <Route handler={Home} name="running-module" path="modules/:moduleId"/>
                {/* TODO(neel): class dashboard (list of modules & active one) */}
                <DefaultRoute handler={Home} name="class-dashboard"/>
            </Route>

            {/* TODO(neel): pretty much a thin wrapper */}
            <Route handler={Shell} name="teacher-modules" path="modules">
                {/* TODO(neel): module preview and name (no student responses)  */}
                <Route handler={Home} name="preview-module" path=":moduleId"/>
                {/* TODO(neel): list of modules & searching */}
                <DefaultRoute handler={Home} name="module-library"/>
            </Route>

            {/* TODO(neel): class creation form  */}
            <Route handler={Home} name="create-class" path="create/class"/>
            {/* TODO(neel): module creation form */}
            <Route handler={Home} name="create-module" path="create/module"/>

            {/* TODO(neel): point this to student login */}
            <DefaultRoute handler={Home} name="teacher-dashboard"/>
        </Route>

        {/* TODO(neel): point this to student login */}
        <DefaultRoute handler={Home}/>
        <NotFoundRoute handler={NotFound}/>
    </Route>
);

export function start() {
    Router.run(routes, function(Handler) {
        React.render(<Handler/>, document.getElementById('content'));
    });
}
