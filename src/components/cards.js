import React from 'react';
import './cards.css'
import LikeButton from './likeButtons.js'
import DislikeButton from './dislikeButton.js'
import DeleteButton from './deleteCard.js'

class Cards extends React.Component{
    constructor(props){
        super();

        this.state = {
            username: "",
            text: "",
            likes: 0,
            dislikes: 0,
        }
    }

    render(){
        return(
            <div className = "statusCards">
                <div className = "deleteButton">
                    <DeleteButton/>
                </div>
                <h4 className="statusInfo"> Username:{this.state.username} </h4>
                <p className="statusInfo"> Status: {this.state.text} </p>
                <div className="likesCounter">
                    <LikeButton/>
                    <DislikeButton/>
                    
                </div>
            </div>
        );
    }
}


export default Cards;