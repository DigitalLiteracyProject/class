import React from 'react';
import Router, {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import Layout from './components/layout';
import Home from './components/home';
import NotFound from './components/notfound';
import Shell from './components/shell';
// TODO(neel): make routing more consistent (/modules/new creates a new
// module, while /class creates a new class; unify that)
let routes = (
    <Route handler={Layout} name="layout" path="/">
        <Route handler={Home} name="student-login" path="/student/login"/>
        <Route handler={Home} name="teacher-login" path="/teacher/login"/>

        <Route handler={Shell} name="student-layout" path="/student">
            <Route handler={Home} name="student-class" path="class"/>
        </Route>

        <Route handler={Shell} name="teacher-layout" path="/teacher">
            <Route handler={Shell} name="teacher-class" path="class">
                <Route handler={Shell} name="class" path=":classId">
                    <Route handler={Home} name="running-module" path="modules/:moduleId"/>
                    <DefaultRoute handler={Home} name="class-dashboard"/>
                </Route>
                <DefaultRoute handler={Home} name="create-class"/>
            </Route>
            <Route handler={Shell} name="teacher-modules" path="modules">
                <Route handler={Home} name="create-module" path="new"/>
                <DefaultRoute handler={Home} name="module-library"/>
            </Route>
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
