import React from 'react';
import WordInput from '../components/WordInput';

class Word extends React.Component{
    render(){
    	const word=this.props.details; //info o aktualnim slove
        return(


            <li className={word.hacky ? 'hacky col-md-4 col-sm-6' : 'col-md-4 col-sm-6'} >
               
                <WordInput details={word} language="cz" index={this.props.index} updateWord={this.props.updateWord}/>
                <WordInput  details={word} language="en" index={this.props.index} updateWord={this.props.updateWord}/>
                <span className="cross">x</span>

            </li>
        )
    }

}
{/* tohle bude jen vypisovat vysledky - bute to Stateless Function */}
export default Word;