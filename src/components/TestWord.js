import React from 'react';
import {randomZnak, random} from '../helpers';
import TestInput from './TestInput';
import TestWrittenSymbols from './TestWrittenSymbols';
import TestActiveStatistic from './TestActiveStatistic';


class TestWord extends React.Component {
    constructor(){
        super();
        this.generovaniSlova=this.generovaniSlova.bind(this);
        this.renderTest=this.renderTest.bind(this);
        this.trvaniTestu=this.trvaniTestu.bind(this);

        this.state = {
            actualWordEN:'a',
            actualWordCZ:'a',
            statisticTest:{
                ok:0,
                miss:0
            },
            startTestuString:new Date().toLocaleTimeString(),
            trvaniTestu:0,
            testRunning:true
        }
    }

    trvaniTestu(trvani){
        this.setState({trvaniTestu:trvani, testRunning:false});
    }

    componentWillMount(){
        this.generovaniSlova();
    }

    generovaniSlova(){
        //e.preventDefault();
       
        var keyArray = Object.keys(this.props.vocabulary);//pole klíčů
        var nahodnyIndex = random(0, Object.keys(this.props.vocabulary).length);  //nahodne cislo 0-pocet slovicek
        var actualWordKey = keyArray[nahodnyIndex]; //náhodný klíč např. key-14515655
        var actualWord = this.props.vocabulary[actualWordKey];
        var actualWordEN = actualWord.en;
        var actualWordCZ = actualWord.cz;
        //this.setState({actualWordKey:actualWordKey, actualWord});

        this.setState({actualWordEN, actualWordCZ});

    }

    unShake(){
       document.getElementById('actualWord').classList.remove('shake');
    }

    renderTest(writtenWord){
        //let writtenWord=writtenWord;
        const statisticTest={...this.state.statisticTest};
        if(writtenWord === this.state.actualWordEN){
            statisticTest.ok++;
            document.getElementById('allWrittenLetters').innerHTML+=writtenWord+"<br />";
        }
        else{
           statisticTest.miss++;
           document.getElementById('allWrittenLetters').innerHTML+=writtenWord+`<span>(${[this.state.actualWordEN]})</span><br />`;
           document.getElementById('actualWord').classList.add('shake');
           setTimeout(this.unShake, 500);        

        }
        this.setState({statisticTest});
        const znakyCelkem = statisticTest.miss+statisticTest.ok;
       
        this.generovaniSlova();
    }

    konecTestu(){        
        this.setState({testRunning:false});
    }




    render() {
        return (
            <div className="testing-form" >
                <h2>Zapište anglický výraz: <strong style={{color:'black'}}>{this.state.actualWordEN}</strong></h2>

                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <p style={{textAlign:'center', fontSize:18}}> Česky: &nbsp;<span style={{fontSize:20, fontWeight:'bold'}}>{[this.state.actualWordCZ]}</span></p>
                        <TestInput actualWord={this.state.actualWordEN} renderTest={this.renderTest} testRunning={this.state.testRunning} />
                        <TestWrittenSymbols title="Zapsaná slova: " />
                    </div>

                    <TestActiveStatistic statisticTest={this.state.statisticTest} testRunning={this.state.testRunning} startTestuString={this.state.startTestuString} trvaniTestu={this.trvaniTestu}/>
                </div>

            </div>
        )
    }
}

TestWord.propTypes = {
   
}

export default TestWord;