import React from 'react';
import {random} from '../helpers';

class StudyVocabulary extends React.Component{
	constructor(){
		super();
		this.generateWord = this.generateWord.bind(this);
		this.getWordsKeys = this.getWordsKeys.bind(this);
		this.random10Words = this.random10Words.bind(this);

		this.state={
			actualWordKey:'key-1483624209232',
			//usedWords:[],
			actualWord:''
			//allKeys:[]
		}
	}

	getWordsKeys(){
		//všechny klíče slovíček
		var keyArray=[];
		Object.keys(this.props.vocabulary).map(key => keyArray.push(key));
		return keyArray;
		//this.setState({allKeys:pole});
	}

	generateWord(e){
		e.preventDefault();
		var keyArray = this.getWordsKeys(); //pole klíčů
		var nahodnyIndex = random(0, keyArray.length);  //cislo 0-600
		var actualWordKey = keyArray[nahodnyIndex]; //key-14515655

		var usedWords = {...this.props.usedWordsStudy};
		usedWords[actualWordKey] = this.props.vocabulary[actualWordKey];
		var actualWord = this.props.vocabulary[actualWordKey];
		actualWord.miss = 0;  //kolik chyb
		//console.log(actualWord);
		this.props.addUsedWordsStudy(usedWords);
		this.setState({actualWordKey:actualWordKey, actualWord});
		this.props.switchShowAllWords(false);
	}

	random10Words(e){
		e.preventDefault();
		var keyArray = this.getWordsKeys(); //pole klíčů
		var usedWords = {...this.props.usedWordsStudy};

		for(var i=0; i<10; i++){
			//console.log(i);
			var nahodnyIndex = random(0, keyArray.length);  //cislo 0-600
			var actualWordKey = keyArray[nahodnyIndex]; //key-14515655
			//console.log(actualWordKey);
			usedWords[actualWordKey] = this.props.vocabulary[actualWordKey];
			var actualWord = this.props.vocabulary[actualWordKey];
			actualWord.miss = 0;  //kolik chyb

		}
			this.props.switchShowAllWords(false);
			this.props.addUsedWordsStudy(usedWords);
			this.setState({actualWordKey:actualWordKey, actualWord});



		
	}


    render(){
    	//this.generateWord();    	

        return(
            <div className="col-md-4 col-sm-6 statistic">
                <h2>Výuka slovíček</h2>
                <button onClick={(e) => this.generateWord(e)} >Další &nbsp;>></button>
				<div style={{fontSize:20, fontWeight:'bold'}}><br />{this.state.actualWord.cz}<br /> = <br /> {this.state.actualWord.en}</div>
				<button className="btn btn-warning" style={{position:'absolute', bottom:20, right:20 }} onClick={(e) => this.random10Words(e)}>Přidej náhodně 10 slov</button>
				
            </div>
        )
    }

}
{/* tohle bude jen vypisovat vysledky - bute to Stateless Function */}
export default StudyVocabulary;