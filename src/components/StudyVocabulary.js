import React from 'react';
import {random} from '../helpers';

class StudyVocabulary extends React.Component{
	constructor(){
		super();
		this.generateWord = this.generateWord.bind(this);
		this.getWordsKeys = this.getWordsKeys.bind(this);

		this.state={
			actualWordKey:'key-1483624209232',
			usedWords:[],
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
		console.log(actualWordKey);

		var usedWords = {...this.props.usedWords};
		usedWords[actualWordKey] = this.props.vocabulary[actualWordKey];
		var actualWord = this.props.vocabulary[actualWordKey];
		console.log(actualWord);
		//this.props.addUsedWordsStudy(usedWords);
		this.setState({usedWords, actualWordKey:actualWordKey, actualWord});
		//console.log(nahodnyIndex);
		//this.setState({actualWord:item});
		//console.log({this.props.vocabulary[this.state.actualWordKey].cz});
	}


    render(){
    	//this.generateWord();    	

        return(
            <div className="col-md-4 col-sm-6 statistic">
                <h2>Výuka slovíček</h2>
                <button onClick={(e) => this.generateWord(e)} >Další &nbsp;>></button>
                {/*<div style={{fontSize:20, fontWeight:'bold'}}>{this.props.vocabulary[this.state.actualWordKey].cz} / {this.props.vocabulary[this.state.actualWordKey].en}</div>
				*/}
				<div style={{fontSize:20, fontWeight:'bold'}}><br />{this.state.actualWord.cz}<br /> = <br /> {this.state.actualWord.en}</div>

				
            </div>
        )
    }

}
{/* tohle bude jen vypisovat vysledky - bute to Stateless Function */}
export default StudyVocabulary;