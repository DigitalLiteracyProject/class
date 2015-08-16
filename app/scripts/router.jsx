import React from 'react';
import Router, {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import TopLayout from './components/layouts/top-layout';
import NotFound from './components/notfound';

import ClassLayout from './components/layouts/class-layout';
import LoginLayout from './components/layouts/login-layout';
import ModuleLayout from './components/layouts/module-layout';
import StudentLayout from './components/layouts/student-layout';
import TeacherLayout from './components/layouts/teacher-layout';

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

let routes = (
    <Route handler={TopLayout} name="top-layout" path="/">

        <Route handler={LoginLayout} name="login-layout">
            <Route handler={StudentLoginView} name="student-login" path="/student/login"/>
            <Route handler={TeacherLoginView} name="teacher-login" path="/teacher/login"/>
        </Route>

        {/* TODO(neel): create student shell (simple header bar) */}
        <Route handler={StudentLayout} name="student-layout" path="/student">
            {/* TODO(neel): create class view (wrapper around module view) */}
            <DefaultRoute handler={StudentClassView} name="student-class"/>
        </Route>

        <Route handler={TeacherLayout} name="teacher-layout" path="/teacher">
            {/* TODO(neel): create class wrapper (header with name of class) */}
            <Route handler={ClassLayout} name="class" path="class/:classId">
                {/* TODO(neel): module view (preview & student responses) */}
                <Route handler={ClassModuleView} name="class-module" path="modules/:moduleId"/>
                {/* TODO(neel): class dashboard (list of modules & active one) */}
                <DefaultRoute handler={ClassDashboardView} name="class-dashboard"/>
            </Route>

            {/* TODO(neel): pretty much a thin wrapper */}
            <Route handler={ModuleLayout} name="teacher-modules" path="modules">
                {/* TODO(neel): module preview and name (no student responses)  */}
                <Route handler={ModulePreviewView} name="preview-module" path=":moduleId"/>
                {/* TODO(neel): list of modules & searching */}
                <DefaultRoute handler={ModuleLibraryView} name="module-library"/>
            </Route>

            {/* TODO(neel): class creation form  */}
            <Route handler={CreateClassView} name="create-class" path="create/class"/>
            {/* TODO(neel): module creation form */}
            <Route handler={CreateModuleView} name="create-module" path="create/module"/>

            {/* TODO(neel): teacher dashboard (list of classes) */}
            <DefaultRoute handler={TeacherDashboardView} name="teacher-dashboard"/>
        </Route>

        {/* TODO(neel): two-button login page */}
        <DefaultRoute handler={HomeView}/>

        <NotFoundRoute handler={NotFound}/>
    </Route>
);

export function start() {
    Router.run(routes, function(Handler) {
        React.render(<Handler/>, document.getElementById('content'));
    });
}
