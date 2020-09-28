import React from 'react';
import './cards.css'
import thumbDown from '../images/thumbDown.svg'


class DislikeButton extends React.Component{
    constructor(props){
        super();

        this.state = {
            dislikes: 0,
        }
    }
    
    addDislikes() {
        this.setState((state)  =>({
            dislikes: state.dislikes +1
        })
        )
    }
    
    render(){
        return(
            <div>
                <p className="likeValue">{this.state.dislikes}</p>
                <button className="likeButton"><img src={thumbDown} onClick={() => this.addDislikes()}/></button>
            </div>
        )
    }

}

export default DislikeButton;