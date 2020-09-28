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

  render(){
  return (
    <div>
      <h1>Your Feed</h1>
      <Cards />
      <Cards />
    </div>
  );
  }
}

export default Feed;