import React from 'react';
import {randomZnak, randomZnaky} from '../helpers';
import AddWord from '../components/AddWord';

class TestLetters extends React.Component {
    constructor() {
        super();

        this.state = {
            symbols: "yxcvbnmasdfghjklqwertzuiop,.(){}-;+ěščřžýáíéYXCVBNMASDFGHJKLQWERTZUIOP+ĚŠČŘŽÝÁÍÉ"
        }


    }
    render() {
        return (
            <div className="col-md-12 ">
                <h2>TestLetters</h2>
                <p>počet znaků: {this.state.symbols.length}</p>
                <p>jeden náhodný znak: {randomZnak(this.state.symbols)}</p>
                <p>5 náhodný znak: {randomZnaky(this.state.symbols, 5)}</p>
            </div>
        )
    }

}


export default TestLetters;