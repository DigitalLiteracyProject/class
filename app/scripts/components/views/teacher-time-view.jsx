import React from 'react';

let TeacherTimeView = React.createClass({
    getInitialState: function(){
	return {
	    date: new Date()
	};
    },
    componentDidMount: function(){
	var that = this;
	setInterval(function(){
	    that.setState({date: new Date()});
	}, 1000);
    },
    render: function(){
	return (
	    <p>{this.state.date.getHours()}:{this.state.date.getMinutes()}:{this.state.date.getSeconds()}</p>
	);
    }
});

export default TeacherTimeView;
