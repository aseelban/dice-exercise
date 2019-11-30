import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css'


class RollDice extends Component {

    static defaultProps = {
        diceNum: ["one", "two", "three", "four", "five", "six"]
    };
    constructor(props) {
    super(props);
    this.state = { first: "one", second: "one", rolling: false };
    }



    // Roll function
    roll = () => {

        //pick 2 new rolls
        let getProp = this.props.diceNum;
        var rand = getProp[Math.floor(Math.random() * getProp.length)];
        var randTwo = getProp[Math.floor(Math.random() * getProp.length)];

        //set state with new rolls
        this.setState({first: rand, second: randTwo, rolling: true})

        //wait one second, then set rolling to false
        setTimeout(() => {
        this.setState({ rolling: false });
        }, 1000);

        
    }

    render() { 
        return (
        <div className='RollDice'>
            <div className='RollDice-container'>
            <Die face={this.state.first} rolling={this.state.rolling} />
            <Die face={this.state.second} rolling={this.state.rolling} />
            </div>
            <button onClick={this.roll} disabled={this.state.rolling}>
            {this.state.rolling ? "Rolling..." : "Roll Dice!"}
            </button>
        </div>
        );
    }
}
 
export default RollDice;