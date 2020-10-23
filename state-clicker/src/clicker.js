/*import React, {Component} from 'react'
let num = 0

class stateClicker extends Component{

    render(){
        return(
        <div className= "stateClicker">
            <div className= "stateClicker-num">{num}</div>

        </div>
        )
    }
}
export default stateClicker
*/
import React, {Component} from 'react'



class stateClicker extends Component{
    
    constructor(props){
        super(props);
        this.state={
            num:1
        }
    }
    buttonEvent = (e)=>{
        let randNum = Math.floor(Math.random() * 10) + 1
        this.setState({num:randNum})
       

    }
render(){
   
    return(
       <div className= "stateClicker">
           <div className="stateClicker-num">
               <h1>Score</h1>
               <p>{this.state.num}</p>
               {this.state.num===7 ? 
               <h2>You win!</h2>
               :
               <button onClick={this.buttonEvent}>press me</button>
}
           </div>
       </div>
       
    )
}
}
export default stateClicker