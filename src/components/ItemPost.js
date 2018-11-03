import React, {Component} from 'react';
import './ItemTodo.css';

export default class ItemPost extends Component{
    render(){
        return(
            <li className="itemTodo">

            <div className="todo-container">
            <h1>{this.props.post.title}</h1>
            {/* <h1>{this.props.todo.title}</h1> */}
            <p>{this.props.post.body}</p>
            {/* <input className={this.state.active?"input-field":"hide"} defaultValue={this.props.player.name} ref={this.nameRef}></input>
            <input className={this.state.active?"input-field":"hide"} defaultValue={this.props.player.position} ref={this.positionRef}></input> */}
            </div>

            <div className="id-container">
            <p>UserID: {this.props.post.userId}</p>
            {/* <button onClick={this.goToHome} className="button button-edit">Home</button>
            <button onClick={this.waivePlayer} className="button button-edit">Photo</button> */}
            {/* <button onClick={this.savePlayer} className={this.state.active?"button button-save":"hide" }>Save</button> */}
            </div>

            </li>

            
        )
    }
}