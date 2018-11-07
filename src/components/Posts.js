import React, { Component, Fragment } from 'react';
import "./Header.css"
import './ListContainer.css'
import ItemPost from './ItemPost'
import HeaderTodo from './HeaderTodo'

function Header() {
    return(
        <header className="app-header">
        <p className="backBtn">Back</p>
        <h1>React Project - Post(s)</h1>
        </header>
    )
}

class Posts extends Component {
  constructor(){
    super()
    this.state = {
      list: [],
      loading: true,
      error: null}
}

  componentDidMount(){
    let url = `https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.userID}`;
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

goToUsers = () => {
  this.props.history.push("/users");
}


  render() {
    return (
        <Fragment>
          <HeaderTodo userRoute={this.goToUsers} header="Posts"/>

          {this.state.loading && (<h1 className="loading">Loading Post(s)...</h1>)}

          {!this.state.loading && !this.props.match.params.userID && (<h1>Please provide a user ID</h1>)}
          
          {!this.state.loading && this.props.match.params.userID && (
            <ul className="split list-container">
            {this.state.list.map((item) => (
            <ItemPost key={item.id} post={item}/>
            ))}
            </ul>
          )}

          
        </Fragment>
    );
  }
}

export default Posts;