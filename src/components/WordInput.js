import React from 'react';
import {maHacky} from '../helpers';

class WordInput extends React.Component{

	constructor(){
		super();
		this.allowEditing=this.allowEditing.bind(this);
		this.disableEditing=this.disableEditing.bind(this);
		this.displayInput=this.displayInput.bind(this);
		this.displayResult=this.displayResult.bind(this);


		 this.state={
            editing:false
        };

	}

	allowEditing(){
		this.setState({editing:true});
	}
	disableEditing(index, e){
		//aktualizace stavo o háčcích až po kliknutí mimo input
		const word=this.props.details;
		let updatedWord;
        if(e.target.name==='cz'){
        	const hacky=maHacky(e.target.value);
   			updatedWord = {...word, [e.target.name]:e.target.value, hacky}
        }else{
        	updatedWord = {...word, [e.target.name]:e.target.value}
        }               
        this.props.updateWord(index, updatedWord);

		this.setState({editing:false});
	}

	handleChange(index, e){
		//aktualizace znaků ve slově (při kontrole háčků okamžitě se výrazně zpomalil program)
        const word=this.props.details;
        let updatedWord;
             
        this.props.updateWord(index, updatedWord);

    }


	displayInput(){
		const lang=this.props.language;
		return(
			<input type="text"  required value={this.props.details[lang]} name={lang} onBlur={(e) => this.disableEditing(this.props.index, e)} onChange={(e) => this.handleChange(this.props.index, e)}  autoFocus/>
		)
	}

	displayResult(){
		const lang=this.props.language;
		return(
			<span onClick={this.allowEditing}>{this.props.details[lang]}</span>
		)
	}



	render(){
		return(
			<span className="word-input">
                <strong>{this.props.language}:&nbsp;</strong>
                {this.state.editing ? this.displayInput() : this.displayResult()}
            </span>
		)
	}
}

WordInput.propTypes = {
	language:React.PropTypes.string.isRequired,
    details:React.PropTypes.object.isRequired,
    index:React.PropTypes.string.isRequired,
    updateWord:React.PropTypes.func.isRequired,
}
export default WordInput;