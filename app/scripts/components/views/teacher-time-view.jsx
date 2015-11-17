import React from 'react';
import {ProgressBar} from 'react-bootstrap'

let TeacherTimeView = React.createClass({
    getInitialState: function(){
	return {
	    date: new Date()
	};
    },
    componentDidMount: function(){
	var that = this; //work-around for scope issue
	setInterval(function(){
	    that.setState({date: new Date()});
	}, 1000);
    },
    render: function(){
	var label = this.state.date.getHours()%12
	label += ':'+('00'+this.state.date.getMinutes()).slice(-2);
	label += ':'+('00'+this.state.date.getSeconds()).slice(-2);
	var now = this.state.date.getMinutes()+(this.state.date.getSeconds()/60.0);
	return (
	    <div><ProgressBar min={0} max={60} now={now} label={label} /></div> // placeholders assume class starts and ends on the hour
	);
    }
});

export default TeacherTimeView;
