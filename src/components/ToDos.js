import React, { Component, Fragment } from 'react';
import "./Header.css"
import './ListContainer.css'
import ItemTodo from './ItemTodo'

function Header() {
    return(
        <header className="app-header">
        <h1>React Project - ToDo(s)</h1>
        </header>
    )
}

class Todos extends Component {
  constructor(){
    super()
    this.state = {
      list: [],
      loading: true,
      error: null}
}

  componentDidMount(){
    let url = `https://jsonplaceholder.typicode.com/todos?userId=${this.props.match.params.userID}`;
        fetch(url)
        .then(response => response.json())
        .then(this.buildList)
        .catch(err => {
            this.setState({error:err});
            this.setState({loading:false})
        })

        console.log(this.props.match.params.userID);
  }

  finishLoading = () => {
    //this.setState({loading:false});
     setTimeout(()=>{this.setState({loading:false})}, 1000)
  }

  buildList =(data)=>{
    console.log(JSON.stringify(data), null, '\n');
    this.setState({
        list: data,
        error: null
    })
    this.finishLoading()
}


  render() {
    return (
        <Fragment>
          <Header />

          {this.state.loading && (<h1 className="loading">Loading ToDo(s)...</h1>)}

          {!this.state.loading && !this.props.match.params.userID && (<h1>Please provide a user ID</h1>)}
          
          {!this.state.loading && this.props.match.params.userID && (
            <ul className="split list-container">
            {this.state.list.map((item) => (
            <ItemTodo key={item.id} todo={item}/>
            ))}
            </ul>
          )}

          
        </Fragment>
    );
  }
}

export default Todos;