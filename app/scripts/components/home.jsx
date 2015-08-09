var React = require('react');

/**
 * Boilerplate for a "leaf" view; that is, one without sub-views.
 */
var Home = React.createClass({

  render: function() {

    return (
      <div className="hero-unit">
        <h1>'Allo, 'Allo!</h1>
        <p>You now have</p>
        <ul>
          <li>ReactJS Reflux Boilerplate</li>
          <li>Sass with Compass</li>
        </ul>
      </div>
    );
  }
});

module.exports = Home;
