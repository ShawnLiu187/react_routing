import React, { Component, Fragment } from 'react';
import Header from './Header';
import ListContainer from './ListContainer';
import './Users.css'

class Users extends Component {
  constructor(){
    super()
    this.state = {
      list: [],
      loading: true,
      error: null}
}

  componentDidMount(){
    let url = 'https://jsonplaceholder.typicode.com/users/';
        fetch(url)
        .then(response => response.json())
        .then(this.buildList)
        .catch(err => {
            this.setState({error:err});
            this.setState({loading:false})
        })
  }

  finishLoading = () => {
    //this.setState({loading:false});
     setTimeout(()=>{this.setState({loading:false})}, 1000)
  }

  goToToDos = (userID) => {
    this.props.history.push(`/todos/${userID}`);
  }

  goToPosts = (userID) => {
    this.props.history.push(`/posts/${userID}`);
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
          {this.state.loading && (<h1 className="loading">Loading Users...</h1>)}
          {!this.state.loading && (<ListContainer list={this.state.list} todoRoute={this.goToToDos} postRoute={this.goToPosts}/>)}
          
        </Fragment>
    );
  }
}

export default Users;
