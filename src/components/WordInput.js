import React from 'react';

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
	disableEditing(){
		this.setState({editing:false});
	}

	handleChange(index, e){
        const word=this.props.details;
        const updatedWord = {...word, [e.target.name]:e.target.value}
        console.log(updatedWord);

        this.props.updateWord(index, updatedWord);
    }


	displayInput(){
		const lang=this.props.language;
		return(
			<input type="text" value={this.props.details[lang]} name={lang} onBlur={this.disableEditing} onChange={(e) => this.handleChange(this.props.index, e)}  autoFocus/>
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
export default WordInput;