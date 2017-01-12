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

    unShake(){
       document.getElementById('actualLetter').classList.remove('shake');
    }

    renderTest(e){
        var writtenLetter=e.target.value;
        const statisticTest={...this.state.statisticTest};
        
        if(writtenLetter === this.state.aktualLetter){
            statisticTest.ok++;
            document.getElementById('allWrittenLetters').innerHTML+=writtenLetter+" ";
        }
        else{
           statisticTest.miss++;
           document.getElementById('allWrittenLetters').innerHTML+=writtenLetter+`<span>(${[this.state.aktualLetter]})</span>`+" ";
           document.getElementById('actualLetter').classList.add('shake');
           setTimeout(this.unShake, 500);
           

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

                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <input type="text" 
                            placeholder={this.state.aktualLetter} 
                            className="actualLetter col-md-12" 
                            ref={(input) => this.writtenLetter = (input)} 
                            onChange={(e) => this.renderTest(e)}
                            id="actualLetter"
                             />
                         
                         <div id="allWrittenLetters" className="col-md-12">
                         Zapsaná písmena:
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12 statisticTest">
                        <h3>Průběh testu:</h3> 
                        <table className="table">
                            <tbody>
                            <tr >
                                <td className="text-green">Správně: </td>
                                <td className="text-green">{this.state.statisticTest.ok}</td>
                                <td className="text-red">Špatně: </td>
                                <td className="text-red">{this.state.statisticTest.miss}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Test;