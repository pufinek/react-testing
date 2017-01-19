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
            actualWord:'a',
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

    generovaniSlova(vocabulary){

        var slovo="ugacaga";
        this.setState({actualWord:slovo});
        //return znak;
    }

    unShake(){
       document.getElementById('actualWord').classList.remove('shake');
    }

    renderTest(writtenWord){
        //let writtenWord=writtenWord;
        const statisticTest={...this.state.statisticTest};
       
        if(writtenWord === this.state.actualWord){
            statisticTest.ok++;
            document.getElementById('allWrittenLetters').innerHTML+=writtenWord+" ";
        }
        else{
           statisticTest.miss++;
           document.getElementById('allWrittenLetters').innerHTML+=writtenWord+`<span>(${[this.state.actualWord]})</span> `;
           document.getElementById('actualWord').classList.add('shake');
           setTimeout(this.unShake, 500);        

        }
        this.setState({statisticTest});
        const znakyCelkem = statisticTest.miss+statisticTest.ok;
       
        this.generovaniSlova(this.props.vocabulary);
    }

    konecTestu(){        
        this.setState({testRunning:false});
       console.log("konec testu"); //xjb
    }




    render() {
        return (
            <div className="testing-form" >
                <h2>Stiskněte klávesu: <strong>{this.state.actualWord}</strong></h2>

                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        {/*<p>`${[this.state.actualWord.cz]} = ${[this.state.actualWord.en]}`</p>*/}
                        <TestInput actualWord={this.state.actualWord} renderTest={this.renderTest} testRunning={this.state.testRunning} />
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