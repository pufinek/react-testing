import React from 'react';

class Word extends React.Component{
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

	displayInput(lang){
		const langWord = (lang === 'cz') ? this.props.details.cz : this.props.details.en;
		console.log(langWord + "input");
		return(
			<input type="text" defaultValue={langWord} onBlur={this.disableEditing} />
		)
	}

	displayResult(lang){
		const langWord = (lang === 'cz') ? this.props.details.cz : this.props.details.en;
		console.log("result")
		return(
			<span onClick={this.allowEditing}>{langWord}</span>
		)
	}



    render(){
        return(


            <li className={this.props.details.hacky ? 'hacky col-md-4 col-sm-6' : 'col-md-4 col-sm-6'} >
                <span title="česky">
                	<strong>cz:&nbsp;</strong>
                	{this.state.editing ? this.displayInput('cz') : this.displayResult('cz')}
                	
                </span>

                <span title="anglicky">
                	<strong>en:&nbsp;</strong>                	
                	{this.state.editing ? this.displayInput('en') : this.displayResult('en')}
                {/* <input type="text" value={this.props.details.en} />*/}
                	</span>

                <span className="cross">x</span>

            </li>
        )
    }

}
{/* tohle bude jen vypisovat vysledky - bute to Stateless Function */}
export default Word;