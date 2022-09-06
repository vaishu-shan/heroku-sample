import React from 'react';
import "./stackcard.scss"
import {  StackCard } from 'react-stack-cards'


  export default  class Toggle extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      directionTinder: "swipeCornerDownRight",
      directionToggle: "sideSlide",
      directionStack: "topRight",
      isOpen: false
    }
    this.Tinder = null
  }
  
  onTinderSwipe() {
    this.Tinder.swipe()
  }
  onToggle() {
    this.setState({isOpen: !this.state.isOpen})
  }
 
  render() {
    const arr = ["first", "second", "third", "fourth"]
    const Images =[
      {src:"./Images/t-card1.jpg"},
      {src:"./Images/t-card2.jpg"},
      {src:"./Images/t-card3.jpg"},
    ]
    
    return (
      <div>
 
        <StackCard
        duration= {0.5}
          images={Images.src}
        
          width="200"
          height="240"
          direction={this.state.directionStack}
         
        >
          <div>i</div>
          <div>i</div>
          <div>i</div>
          <div>i</div>
        </StackCard>
      </div>
    );
  }
}
 
