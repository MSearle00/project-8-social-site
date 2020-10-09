import React from 'react';
import '../components/cards.css';
import Cards from '../components/cards';

class NewPost extends React.Component {
  constructor(props){
    super();

    this.state = {
        card:[],
        cardRefs:[],
        username:"",
        status:"",
    }
}

createCard(i, ref){
  return(
    <Cards cardName={(i+1)} key={i} ref={ref} />
  )
 }

addCard(event){
      event.preventDefault();
      this.props.onsubmit(this.props.postID, this.state.username, this.state.status, 0);
      this.setState({username: "", status: ""});
  }

  usernameChangeHandler = (event) => {
    this.setState({username:event.target.value})
  }
  statusChangeHandler = (event) => {
    this.setState({status:event.target.value})
  }


  render(){
  return (
    <div>
      <h1>Create a Post</h1>
      <div className = "statusCards">
        <h4 className="statusInfo"> Username:</h4>
        <input type="text" className="usernameInput" value={this.state.username} onChange={this.usernameChangeHandler}></input>
        <h5 className="statusInfo"> Status:</h5>
        <input type="text" className="statusInput" value={this.state.status} onChange={this.statusChangeHandler} ></input>
        <div className="createPost">
        <button onClick={(e) => this.addCard(e)}>Create Post</button>
        </div>
      </div>
    </div>
  );
  }
}

export default NewPost;
