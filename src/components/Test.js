import React from 'react';
import {randomZnak, random} from '../helpers';

class Test extends React.Component {
    constructor(){
        super();
        this.generovaniZnaku=this.generovaniZnaku.bind(this);
        this.renderTest=this.renderTest.bind(this);

        this.state = {
            pismena: "yxcvbnmasdfghjklqwertzuiop",
            pismenaDiakritika:"yxcvbnmasdfghjklqwertzuiopěščřžýáíé"
        }

    }

    generovaniZnaku(retezecSeZnaky, velkeBool){

        var znak=randomZnak(retezecSeZnaky);
        var zvetsit = Math.floor(random(0,2));
        if(velkeBool && zvetsit===1){ //pokud ma obsahovat i velké, tak náhodně zvětšíme znak, nebo ne
            znak = znak.toUpperCase();
        }
        return znak;
    }

    renderTest(){


    }






    render() {
        return (
            <div className="testing-form" >
                <h2>Stiskněte klávesu: <strong></strong></h2>
                <input type="text" required placeholder="" />
                <button type="submit" onClick={(e) => this.generovaniZnaku(this.state.pismena, true)}>Kontrola</button>
            </div>
        )
    }
}

export default Test;