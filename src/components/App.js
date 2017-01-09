import React from 'react';
//import TestingForm from '../components/TestingForm';
import TestingGuide from '../components/TestingGuide';
import Statistic from '../components/Statistic';
import Word from '../components/Word';
import AddWord from '../components/AddWord';
import {maHacky} from '../helpers';


import base from '../base';
import slovickaSoubor from '../slovicka';



class App extends React.Component {
    constructor() {
        super();

        this.addVocabulary = this.addVocabulary.bind(this);
        this.updateWord = this.updateWord.bind(this);
        this.loadWords = this.loadWords.bind(this);
        this.addToVocabulary=this.addToVocabulary.bind(this);

        this.state = {
            vocabulary: {}, 
            statistic: {},
            symbols: "yxcvbnmasdfghjklqwertzuiop,.(){}-;+ěščřžýáíéYXCVBNMASDFGHJKLQWERTZUIOP+ĚŠČŘŽÝÁÍÉ"
        }
    }



    addVocabulary(Word) {
        const vocabulary = {...this.state.vocabulary};
        const timestamp = Date.now();

        vocabulary[`key-${timestamp}`] = Word;
        this.setState({vocabulary});
    }

     addToVocabulary(cz, en) {  //only for load from file .json
        const vocabulary = {...this.state.vocabulary};
        const timestamp = Date.now();

        const hacky = maHacky(cz);
        const word={cz, en, hacky};
        vocabulary[`key-${timestamp}`] = word;
        this.setState({vocabulary});
    }

    updateWord(key, updatedWord){
       const vocabulary={...this.state.vocabulary};
       vocabulary[key]=updatedWord;
       this.setState({vocabulary});

    }

    loadWords(){
        Object.keys(slovickaSoubor).map((key) => this.addToVocabulary(slovickaSoubor[key].cz, slovickaSoubor[key].en)) 
    }

    componentWillMount(){
        this.ref=base.syncState(`vocabulary`, {
            context: this,
            state:'vocabulary'
        });
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <TestingGuide />

                    <Statistic />

                    <div className="col-md-4 col-sm-12 addVocabulary-box">
                        <h2>Přidat slovíčko</h2>
                        <AddWord addVocabulary={this.addVocabulary}/>

                    </div>
                </div>
               <div className="row">
                    <h2>Slovíčka v databázi</h2>
                    <p>(Barevně označená slovíčka obsahují české znaky!)</p>
                    <ul className="vocabulary-list">
                        {
                            Object
                                .keys(this.state.vocabulary)
                                .map(key => <Word key={key} index={key} details={this.state.vocabulary[key]} updateWord={this.updateWord}/>)
                        }

                    </ul>
                </div>

                <div className="row">
                    <button className="btn btn-primary" onClick={this.loadWords}>Načíst ze souboru</button>
                </div>

                <div className="row todo-list">
                <h2>TODO:</h2>
                <ul>
                    <li><span className="glyphicon glyphicon-ok"></span> &nbsp; detekce českých znaků při řidávání do slovníku</li>
                    <li> <span className="glyphicon glyphicon-ok" ></span> &nbsp; editace položek v databázi</li>
                    <li> <span className="glyphicon glyphicon-remove"></span> &nbsp; mazání položek v databázi</li>
                    <li> <span className="glyphicon glyphicon-remove"></span> &nbsp; kontrola duplicit (nebude)</li>

                </ul>


                </div>
            </div>

        )
    }
}

export default App;