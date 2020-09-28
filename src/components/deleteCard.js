import React from 'react';
import './cards.css'
import deletePost from '../images/deletePost.svg'


class DeleteButton extends React.Component{
    constructor(props){
        super();

        this.state = {
            card: [],
            cardRefs:[]
        }
    }

    removeCard(){
        this.setState((state) =>{
          return({
            card: state.card.slice(0, state.card.length -1),
            cardRefs: state.cardRefs.slice(0, state.cardRefs.length -1)
          })
        })
        }

    render(){
        return(
            <div>
                <button><img src={deletePost} onClick={() => this.removeCard()}/></button>
            </div>
        )
    }

}

export default DeleteButton;