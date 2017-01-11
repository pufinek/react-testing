import React from 'react';
import {randomZnak, random} from '../helpers';

class Test extends React.Component {
    constructor(){
        super();
        this.generovaniZnaku=this.generovaniZnaku.bind(this);
        this.renderTest=this.renderTest.bind(this);

        this.state = {
            pismena: "yxcvbnmasdfghjklqwertzuiop",
            pismenaDiakritika:"yxcvbnmasdfghjklqwertzuiopěščřžýáíé",
            aktualLetter:'a',
            statisticTest:{
                ok:0,
                miss:0
            }
        }


    }

    generovaniZnaku(retezecSeZnaky, velkeBool){
        var znak=randomZnak(retezecSeZnaky);
        var zvetsit = Math.floor(random(0,2));
        if(velkeBool && zvetsit===1){ //pokud ma obsahovat i velké, tak náhodně zvětšíme znak, nebo ne
            znak = znak.toUpperCase();
        }
        this.setState({aktualLetter:znak});
        //return znak;
    }

    renderTest(e){
        var writtenLetter=e.target.value;
        const statisticTest={...this.state.statisticTest};
        if(writtenLetter === this.state.aktualLetter){
            statisticTest.ok++;
        }
        else{
           statisticTest.miss++;
        }
        this.setState({statisticTest});
        this.writtenLetter.value="";
        this.generovaniZnaku(this.state.pismena, true);


       // setTimeout(this.generovaniZnaku(this.state.pismena, true), 2000).bind(this);  
    }






    render() {
        return (
            <div className="testing-form" >
                <h2>Stiskněte klávesu: <strong>{this.state.aktualLetter}</strong></h2>
                <input type="text" 
                        placeholder={this.state.aktualLetter} 
                        className="actualLetter col-md-6" 
                        ref={(input) => this.writtenLetter = (input)} 
                        onChange={(e) => this.renderTest(e)} />
                         
               {/*<input type="text" required placeholder={() => this.renderTest} /> */}
                <div className="col-md-6 statisticTest">
                    <h3>Průběh testu:</h3> 
                    <table className="table">
                        <tr >
                            <td className="text-green">Správně: </td>
                            <td className="text-green">{this.state.statisticTest.ok}</td>
                            <td className="text-red">Špatně: </td>
                            <td className="text-red">{this.state.statisticTest.miss}</td>
                        </tr>
                    </table>

                </div>
            </div>
        )
    }
}

export default Test;