import React from 'react';
import '../App.css';
import Cards from '../components/cards';


class Feed extends React.Component {
  constructor(props){
    super();

    this.state = {
        cards:[],
        cardRefs:[],
    }
}

createPostList(){
  console.log(this.props.listItems)
  return(
    this.props.listItems.map((current, i) => 
    (<Cards key={i} userID={current.userID} status={current.status} likesCounter={current.likesCounter}/>))
  )
}

  render(){
  return (
    <div>
      <h1>Your Feed</h1>
      {this.createPostList()}
    </div>
  );
  }
}

export default Feed;