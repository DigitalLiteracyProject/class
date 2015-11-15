import React from 'react';

let TeacherTimeView = React.createClass({
  render: function(){
    var date = new Date();
    //
    return (
      <p>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</p>
    );
  }
});

export default TeacherTimeView;
