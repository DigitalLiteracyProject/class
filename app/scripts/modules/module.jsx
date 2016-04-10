import React from 'react';

/**
 * A reusable type of lesson plan content that teachers can push to students.
 * Types of Modules should extend this class and implement abstract methods.
 * Instantiate a subclass of Module to create a module (lowercase "m"),
 * which teachers can use.
 */
let Module = class {
    // TODO: figure out way in ES6 to make methods abstract
    // TODO: find way to integrate Modules in general with rest of app


    /**
     * [ABSTRACT]
     * Returns a React Component that students will see and interact with.
     * The main user-facing part of this Module.
     */
    get studentViewComponent() {
        return null;
    }

    /**
      * [ABSTRACT]
      * Returns a React Component that teachers will see and ineract with.
      * Should allow teacher to identify the module at a glance
      */
    get teacherPreviewComponent() {
	return null;
    }

    /**
     * [ABSTRACT]
     * Returns a React Component that teachers will interact with to create
     * a module. Should contain form fields etc. that let teachers customize
     * the module.
     */
    get editViewComponent() {
        return null;
    }

    /**
     * [ABSTRACT]
     * TODO: flesh out spec of how this'll work
     * Returns a list of actions or action creators that correspond to the
     * views' events.
     */
    get actions() {
        return null;
    }

    /**
     * [ABSTRACT]
     * TODO: flesh out spec of how this'll work
     * Returns a list of stores that this Module will use.
     */
    get stores() {
        return null;
    }

};

export default Module;
