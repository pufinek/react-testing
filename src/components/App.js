import React from 'react';
//import TestingForm from '../components/TestingForm';
import TestingGuide from '../components/TestingGuide';
//import Statistic from '../components/Statistic';
import ListOfWords from '../components/ListOfWords';
//import AddWord from '../components/AddWord';
import {maHacky} from '../helpers';
//import { Link, Match, Router } from 'react-router';
import base from '../base';
import slovickaSoubor from '../slovicka';



class App extends React.Component {
    constructor() {
        super();

        this.addVocabulary = this.addVocabulary.bind(this);
        this.updateWord = this.updateWord.bind(this);
        this.removeWord = this.removeWord.bind(this);
        this.loadWords = this.loadWords.bind(this);
        this.addToVocabulary=this.addToVocabulary.bind(this);
        this.addUsedWordsStudy=this.addUsedWordsStudy.bind(this);
        this.switchShowAllWords = this.switchShowAllWords.bind(this);
        this.clearUsedWordsStudy = this.clearUsedWordsStudy.bind(this);

        this.state = {
            vocabulary: {}, 
            usedWordsStudy: {},
            showAllWords:false
        }


    }

    addUsedWordsStudy(newWordArray) {
        this.setState({usedWordsStudy:newWordArray});
    }

    clearUsedWordsStudy(){
        let emptyArray={};
        this.setState({usedWordsStudy:emptyArray});
    }

    addVocabulary(Word) {
        const vocabulary = {...this.state.vocabulary};
        const timestamp = Date.now();

        vocabulary[`key-${timestamp}`] = Word;

        //přidávíme i do procvičovaných slovíček
        const usedWordsStudy = {...this.state.usedWordsStudy};
        usedWordsStudy[`key-${timestamp}`] = Word;

        this.setState({vocabulary,usedWordsStudy});
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

    removeWord(key){

            const vocabulary={...this.state.vocabulary};
            vocabulary[key]=null;
            this.setState({vocabulary}); 
    }
    switchShowAllWords(bool){
        //var show = !this.state.showAllWords;
        this.setState({showAllWords:bool});
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

            <TestingGuide addVocabulary={this.addVocabulary}  loadWords={this.loadWords} addUsedWordsStudy={this.addUsedWordsStudy} usedWordsStudy={this.state.usedWordsStudy} vocabulary={this.state.vocabulary} switchShowAllWords={this.switchShowAllWords} clearUsedWordsStudy={this.clearUsedWordsStudy} />

            {
                (this.state.showAllWords) ?
                <ListOfWords vocabulary={this.state.vocabulary} updateWord={this.updateWord} removeWord={this.removeWord}  title="Všechna slovíčka v databázi" vyuka={false}  />
                :
                <ListOfWords vocabulary={this.state.usedWordsStudy} updateWord={this.updateWord} removeWord={this.removeWord} title="Studovaná slovíčka" vyuka={true}  />

            }
            {/*
                <div className="row todo-list">
                <h2>TODO:</h2>
                <ul>
                    <li><span className="glyphicon glyphicon-ok"></span> &nbsp; detekce českých znaků při řidávání do slovníku</li>
                    <li> <span className="glyphicon glyphicon-ok" ></span> &nbsp; editace položek v databázi</li>
                    <li> <span className="glyphicon glyphicon-ok" ></span> &nbsp; načtení slovíček ze souboru</li>
                    <li> <span className="glyphicon glyphicon-ok" ></span> &nbsp; detekce háčků při editaci a načtení ze souboru</li>
                    <li> <span className="glyphicon glyphicon-ok"></span> &nbsp; mazání položek v databázi</li>
                    <li> <span className="glyphicon glyphicon-remove"></span> &nbsp; kontrola duplicit (nebude)</li>
                    <li> <span className="glyphicon glyphicon-remove"></span> &nbsp; stránkování slovíček</li>
                    <li> <span className="glyphicon glyphicon-remove"></span> &nbsp; filtrování slovíček</li>
                    <li> <span className="glyphicon glyphicon-remove"></span> &nbsp; Firebase háže chybu pri editaci - seká se to</li>
                    <li> <span className="glyphicon glyphicon-remove"></span> &nbsp; zlepšit routování - children?</li>
                    <li> <span className="glyphicon glyphicon-remove"></span> &nbsp; při načítání výpisu gif s loadingem</li>
                    <li> <span className="glyphicon glyphicon-ok"></span> &nbsp; po přidání slovíčka zobrazit hlášku</li>


                </ul>
            </div>*/}
            </div>

        )
    }
}


export default App;