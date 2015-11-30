import React from 'react';
//import {ProgressBar} from 'react-bootstrap'

let TeacherTimeView = React.createClass({
    getInitialState: function(){
        return {
            date: new Date()
        };
    },
    componentDidMount: function(){
        setInterval(() => {
            this.setState({date: new Date()});
        }, 1000);
    },
    render: function(){
        var label = this.state.date.getHours()%12
        label += ':'+('00'+this.state.date.getMinutes()).slice(-2);
        var now = this.state.date.getMinutes()+(this.state.date.getSeconds()/60.0);
        return (
            <div>1:00pm - 2:00pm | Now {label}</div>
        );
    }
});

export default TeacherTimeView;
