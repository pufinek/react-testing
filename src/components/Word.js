import React from 'react';
import WordInput from '../components/WordInput';

class Word extends React.Component{
    render(){
        return(


            <li className={this.props.details.hacky ? 'hacky col-md-4 col-sm-6' : 'col-md-4 col-sm-6'} >
               
                <WordInput details={this.props.details} language="cz"/>

                 {/* <span title="anglicky">
                	<strong>en:&nbsp;</strong>                	
                	{this.state.editing ? this.displayInput('en') : this.displayResult('en')}
               <input type="text" value={this.props.details.en} />
                </span>*/}
                <WordInput  details={this.props.details} language="en"/>

                <span className="cross">x</span>

            </li>
        )
    }

}
{/* tohle bude jen vypisovat vysledky - bute to Stateless Function */}
export default Word;