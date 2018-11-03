import React, {Component} from 'react';
import './ListContainer.css';
import Item from './Item';


export default class ListContainer extends Component{
    constructor(){
        super()
        // this.state = {players: [
        //     {id: 1, name: "Guo Ailun", position: "Point Guard"},
        //     {id: 2, name: "Yi Jianlian", position: "Power Foward"},
        //     {id: 3, name: "Yao Ming", position: "Center"}
        // ]}
    }

    // deletePlayer = (playerId) => {
    //     let newPlayers = this.state.players.filter((item) => {
    //         if(playerId != item.id){
    //             return true;
    //         }
    //     });
    //     this.setState({players: newPlayers});
    // }

    // addPlayer = (newPlayer) => {
    //     let newPlayers = this.state.players;
    //     newPlayers.push(newPlayer);
    //     this.setState({players: newPlayers});
    // }

    render(){
        return(
            <ul className="split list-container">
            {this.props.list.map((item) => (
            <Item key={item.id} player={item} todoRoute={this.props.todoRoute} postRoute={this.props.postRoute}/>
            ))}
            </ul>
        )
    }
}