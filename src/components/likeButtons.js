import React from 'react';
import './cards.css'
import thumbUp from '../images/thumbUp.svg'


class LikeButton extends React.Component{
    constructor(props){
        super();

        this.state = {
            likes: 0,
        }
    }

    addLikes() {
        this.setState((state) => ({
          likes: state.likes + 1
        })
        )
      }
    
    render(){
        return(
            <div>

                <p className="likeValue">{this.state.likes}</p>
                <button className="likeButton"><img src={thumbUp} onClick={() => this.addLikes()}/></button>
            </div>
        )
    }

}

export default LikeButton;