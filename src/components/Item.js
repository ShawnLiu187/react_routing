import React, {Component} from 'react';
import './Item.css';
import PropTypes from 'prop-types'

export default class Item extends Component{
    constructor(){
        super()
        // this.state = {
        //     active: false
        // }
        // this.nameRef = React.createRef();
        // this.positionRef = React.createRef();
    }

    // editSave = (ev) => {
    //     this.state.active?this.setState({active: false}):this.setState({active: true});
    // }

    // savePlayer = () => {
    //             this.editSave();
    //             this.props.player.name = this.nameRef.current.value;
    //             this.props.player.position = this.positionRef.current.value;
    // }

    // waivePlayer = () => {
    //     this.props.deletePlayer(this.props.player.id);
    // }

    goToToDo = () => {
        this.props.todoRoute(this.props.player.id)
    }

    goToPost = () => {
        this.props.postRoute(this.props.player.id)
    }

    render(){
        return(
            <li className="item">

            <div className="item-container">
            <h1>{this.props.player.name}</h1>
            <p>{this.props.player.email}</p>
            {/* <input className={this.state.active?"input-field":"hide"} defaultValue={this.props.player.name} ref={this.nameRef}></input>
            <input className={this.state.active?"input-field":"hide"} defaultValue={this.props.player.position} ref={this.positionRef}></input> */}
            </div>

            <div className="button-container">
            <button onClick={this.goToToDo} className="button button-edit">ToDos</button>
            <button onClick={this.goToPost} className="button button-edit">Posts</button>
            {/* <button onClick={this.savePlayer} className={this.state.active?"button button-save":"hide" }>Save</button> */}
            </div>

            </li>

            
        )
    }
}

Item.propTypes = {
    player: PropTypes.shape({
        name: PropTypes.string,
        position: PropTypes.string,
        id: PropTypes.number.isRequired
    })
}

Item.defaultProps = {
    player: {
        name: "Unknown",
        position: "Sixth Man",
        id: 0
    }
}