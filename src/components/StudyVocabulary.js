import React from 'react';
import {random} from '../helpers';

class StudyVocabulary extends React.Component{
	constructor(){
		super();
		this.generateWord = this.generateWord.bind(this);
		this.random10Words = this.random10Words.bind(this);

		this.state={
			actualWordKey:'key-1483624209232',
			actualWord:''
		}
	}
	/*generateWord(e){
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
	}*/
	generateWord(e){
		e.preventDefault();
		var keyArray = Object.keys(this.props.vocabulary);//pole klíčů
		var nahodnyIndex = random(0, Object.keys(this.props.vocabulary).length);  //nahodne cislo 0-pocet slovicek
		var actualWordKey = keyArray[nahodnyIndex]; //náhodný klíč např. key-14515655

		//přidavam slovo pod klíčem k použitým
		var usedWords = {...this.props.usedWordsStudy};
		usedWords[actualWordKey] = this.props.vocabulary[actualWordKey];

		var actualWord = this.props.vocabulary[actualWordKey];
		actualWord.miss = 0;  //kolik chyb

		this.props.addUsedWordsStudy(usedWords);  //aktualizace pole v state v App
		this.setState({actualWordKey:actualWordKey, actualWord});
		this.props.switchShowAllWords(false); //přepnutí výpisu na výuková slovíčka
	}

	random10Words(e){
		e.preventDefault();
		var keyArray = Object.keys(this.props.vocabulary); //pole klíčů
		var usedWords = {...this.props.usedWordsStudy};

		for(var i=0; i<10; i++){
			//console.log(i);
			var nahodnyIndex = random(0, Object.keys(this.props.vocabulary).length);  //cislo 0-pocet slovicek
			var actualWordKey = keyArray[nahodnyIndex]; //náhodný klíč např. key-14515655

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
                <button className="btn" onClick={(e) => this.generateWord(e)} >Další &nbsp;>></button>
				<div style={{fontSize:19, fontWeight:'bold', marginTop:5}}>{this.state.actualWord.cz}<br /> = <br /> {this.state.actualWord.en}</div>
				<div  style={{position:'absolute', bottom:20, right:20 }}>
					<button className="btn btn-warning" onClick={(e) => this.random10Words(e)}>Přidej náhodně 10 slov</button>
					&nbsp;<button className="btn" onClick={() => this.props.clearUsedWordsStudy()}>Smazat </button>
				</div>
            </div>
        )
    }

}

StudyVocabulary.propTypes = {

    vocabulary: React.PropTypes.object.isRequired,
    usedWordsStudy:React.PropTypes.object.isRequired,
    addUsedWordsStudy:React.PropTypes.func.isRequired,
    switchShowAllWords:React.PropTypes.func.isRequired,
    clearUsedWordsStudy:React.PropTypes.func.isRequired
}

export default StudyVocabulary;