// import React, { Component } from 'react';
// export default class Bomb extends React.Component{

//     constructor(props){
//         super()
//         this.state ={
//             secondsLeft: props.initalCount
//         }
//     }
//     renderCondition(){
//         if (this.state.secondsLeft !== 0) return <p> {this.state.secondsLeft} seconds left before I go boom!</p>
//         return<p> Boom! </p>
//     }
//     render() {
//         return (
//             <div>
//                 <p>{this.renderCondition()}</p>
//             </div>
//         )
//     }
// }
import React, { Component } from 'react';
// your Bomb code here!
class Bomb extends Component {
    constructor(props) { //props that the component gets from its parent
        super()
        this.state = { //define initial state with a key of 'someKey' set to the 'someValue' prop
          secondsLeft: props.initialCount
        }
      }
      renderCondition() {
          if (this.state.secondsLeft !== 0) return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
          return <p>Boom!</p>
      }
    render() { 
        return (
        <div>
            {this.renderCondition()}
        </div>) 
    }
}
export default Bomb;