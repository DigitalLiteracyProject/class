import React from 'react';
import Router, {Route, DefaultRoute, NotFoundRoute} from 'react-router';

import ClassLayout from './components/layouts/class-layout';
import LoginLayout from './components/layouts/login-layout';
import ModuleLayout from './components/layouts/module-layout';
import StudentLayout from './components/layouts/student-layout';
import TeacherLayout from './components/layouts/teacher-layout';
import TopLayout from './components/layouts/top-layout';

import ClassDashboardView from './components/views/class-dashboard-view';
import ClassModuleView from './components/views/class-module-view';
import CreateClassView from './components/views/create-class-view';
import CreateModuleView from './components/views/create-module-view';
import HomeView from './components/views/home-view';
import ModuleLibraryView from './components/views/module-library-view';
import ModulePreviewView from './components/views/module-preview-view';
import StudentClassView from './components/views/student-class-view';
import StudentLoginView from './components/views/student-login-view';
import TeacherDashboardView from './components/views/teacher-dashboard-view';
import TeacherLoginView from './components/views/teacher-login-view';
import NotFoundView from './components/views/not-found-view';

let routes = (
    <Route handler={TopLayout} name="top-layout" path="/">

        <Route handler={LoginLayout} name="login-layout">
            <Route handler={StudentLoginView} name="student-login" path="/student/login"/>
            <Route handler={TeacherLoginView} name="teacher-login" path="/teacher/login"/>
        </Route>

        <Route handler={StudentLayout} name="student-layout" path="/student">
            <DefaultRoute handler={StudentClassView} name="student-class"/>
        </Route>

        <Route handler={TeacherLayout} name="teacher-layout" path="/teacher">
            <Route handler={ClassLayout} name="class" path="class/:classId">
                <Route handler={ClassModuleView} name="class-module" path="modules/:moduleId"/>
                <DefaultRoute handler={ClassDashboardView} name="class-dashboard"/>
            </Route>

            <Route handler={ModuleLayout} name="teacher-modules" path="modules">
                <Route handler={ModulePreviewView} name="preview-module" path=":moduleId"/>
                <DefaultRoute handler={ModuleLibraryView} name="module-library"/>
            </Route>

            <Route handler={CreateClassView} name="create-class" path="create/class"/>
            <Route handler={CreateModuleView} name="create-module" path="create/module"/>

            <DefaultRoute handler={TeacherDashboardView} name="teacher-dashboard"/>
        </Route>

        <DefaultRoute handler={HomeView} name="home"/>

        <NotFoundRoute handler={NotFoundView}/>
    </Route>
);

export function start() {
    Router.run(routes, function(Handler) {
        React.render(<Handler/>, document.getElementById('content'));
    });
}
