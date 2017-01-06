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
	/*displayInput(){
		return(
			<input type="text" value={this.props.details.cz} onBlur={this.disableEditing} autoFocus />
		)
	}*/

	displayInput(){
		const lang=this.props.language;
		return(
			<input type="text" defaultValue={this.props.details[lang]} onBlur={this.disableEditing}  autoFocus/>
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