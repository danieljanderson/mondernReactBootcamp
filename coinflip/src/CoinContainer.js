import React, {Component} from 'react'
import {choice} from './helpers'
import Coin from './Coin'
class CoinContainer extends Component{
    static defaultProps={
        coins: [
           {side: "Heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
           {side: "Tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg"}
        ]
    }
    constructor(props){
        super(props)
        this.state={
            currCoin:null,
            nFlips:0,
            nHeads:0,
            nTails:0
        }
       
    }
    flipCoin(){

        const newCoin = choice(this.props.coins)
        this.setState(
            st=>{
                return{
                    currCoin:newCoin,
                    nFlips:st.nFlips + 1,
                    nHeads: st.nHeads + (newCoin.side==="Heads"? 1:0),
                    nTails:st.nTails + (newCoin.side==="Tails"? 1:0)

                }
            }
        )
    }
    handleClick = (e) =>{
        this.flipCoin()
    }
    render(){
        return(
            <div className="CoinContainer">
                <h2>Let's Flip a Coin!</h2>
                <button onClick={this.handleClick}>Flip Me!</button>
                {this.state.currCoin && <Coin info={this.state.currCoin}/>}
                <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} Heads and {this.state.nTails} Tails</p>
            </div>
        )
    }
    
}
export default CoinContainer