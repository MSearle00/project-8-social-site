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

addCard(){
  this.setState((state) =>{
    const ref = React.createRef();
    const newCard = this.createCard(state.card.length, ref);
    return({
      card: state.card.concat(newCard),
      cardRefs: state.cardRefs.concat(ref)
    })
  })
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
        <p className="statusInfo"> Status:</p>
        <input type="text" className="statusInput" value={this.state.status} onChange={this.statusChangeHandler} ></input>
        <div className="createPost">
        <button onClick={() => this.addCard()}>Create Post</button>
        </div>
      </div>
    </div>
  );
  }
}

export default NewPost;
