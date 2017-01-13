import React from 'react';
import {randomZnak, random} from '../helpers';
import TestInput from './TestInput';
import TestWrittenSymbols from './TestWrittenSymbols';
import TestActiveStatistic from './TestActiveStatistic';


class Test extends React.Component {
    constructor(){
        super();
        this.generovaniZnaku=this.generovaniZnaku.bind(this);
        this.renderTest=this.renderTest.bind(this);
        this.generovaniZnakuZvolenehoTestu = this.generovaniZnakuZvolenehoTestu.bind(this);
        this.trvaniTestu=this.trvaniTestu.bind(this);

        this.state = {
            pismena: "yxcvbnmasdfghjklqwertzuiop",
            pismenaDiakritika:"yxcvbnmasdfghjklqwertzuiopěščřžýáíé",
            aktualLetter:'a',
            statisticTest:{
                ok:0,
                miss:0
            },
            showLastStatistic:false,
            startTestuString:new Date().toLocaleTimeString(),
            trvaniTestu:0,
            testRunning:true
        }
    }

    trvaniTestu(trvani){
        this.setState({trvaniTestu:trvani, testRunning:false});
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

    generovaniZnakuZvolenehoTestu(){
        var znaky=this.state.pismena; //univerzálně používám bez diakritiky
        var velkaPismena = false; //univerzálně používám malá písmena
        //toto nastaveni odpovida case 'mala' pro 'selectedTestOption.testType'
        switch(this.props.selectedTestOption.testType){
            case 'velka': velkaPismena=true; break;
            case 'malaDiakritika': znaky = this.state.pismenaDiakritika; break;
            case 'vse':  velkaPismena=true; znaky = this.state.pismenaDiakritika; break;
            default:znaky=this.state.pismena; velkaPismena = false;
        }
        this.generovaniZnaku(znaky, velkaPismena);


    }

    unShake(){
       document.getElementById('actualLetter').classList.remove('shake');
    }

    renderTest(writtenletter){
        var writtenLetter=writtenletter;
        const statisticTest={...this.state.statisticTest};
       
        if(writtenLetter === this.state.aktualLetter){
            statisticTest.ok++;
            document.getElementById('allWrittenLetters').innerHTML+=writtenLetter+" ";
        }
        else{
           statisticTest.miss++;
           document.getElementById('allWrittenLetters').innerHTML+=writtenLetter+`<span>(${[this.state.aktualLetter]})</span> `;
           document.getElementById('actualLetter').classList.add('shake');
           setTimeout(this.unShake, 500);

           if(this.props.selectedTestOption.testEnd === 'chyby'  && statisticTest.miss === 5){
               console.log('provedeno 5 chyb');  //xjb
               this.konecTestu();
           }         

        }
        this.setState({statisticTest});
        const znakyCelkem = statisticTest.miss+statisticTest.ok;

        if(this.props.selectedTestOption.testEnd === 'cas'  && znakyCelkem === 30){
               console.log('zapsano 30 znků');  //xjb
               this.konecTestu();
        }
       
        //this.generovaniZnaku(this.state.pismena, true);
        this.generovaniZnakuZvolenehoTestu()
    }

    konecTestu(){        
        this.setState({testRunning:false});
       console.log("konec testu"); //xjb
    }




    render() {
        return (
            <div className="testing-form" >
                <h2>Stiskněte klávesu: <strong>{this.state.aktualLetter}</strong></h2>

                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <TestInput aktualLetter={this.state.aktualLetter} renderTest={this.renderTest} testRunning={this.state.testRunning} />
                        <TestWrittenSymbols />
                    </div>

                    <TestActiveStatistic statisticTest={this.state.statisticTest} testRunning={this.state.testRunning} startTestuString={this.state.startTestuString} trvaniTestu={this.trvaniTestu}/>
                </div>

            </div>
        )
    }
}

export default Test;