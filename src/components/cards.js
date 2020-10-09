import React from 'react';
import './cards.css'
import LikeButton from './likeButtons.js'
import DislikeButton from './dislikeButton.js'
import DeleteButton from './deleteCard.js'

class Cards extends React.Component{
    constructor(props){
        super();

        this.state = {
            postId: 0,
            username: "",
            text: "",
            likes: 0,
            dislikes: 0,
        }
    }

    render(){
        return(
            <div className = "statusCards">
                <h4 className="UserInfo"> Username:{this.props.userID} <DeleteButton/> </h4>
                <h5 className="statusInfo"> Status: {this.props.status} </h5>
                <div className="likesCounter">
                    <LikeButton/>
                    <DislikeButton/>
                    
                </div>
            </div>
        );
    }
}


export default Cards;