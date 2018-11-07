import React, {Component} from 'react';
import './Header.css';

export default class HeaderTodo extends Component{
    // constructor(){
    //     super()
    // }
    goToUsers = () => {
        this.props.userRoute();
    }

    render(){
        return(
            <header className="app-header">
            <p onClick={this.goToUsers} className="backBtn">Back</p>
            <h1>React Project - {this.props.header}</h1>
            </header>
        )
    }
}