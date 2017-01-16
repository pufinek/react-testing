import React from 'react';
import WordInput from '../components/WordInput';

class Word extends React.Component{
    render(){
    	const word=this.props.details; //info o aktualnim slove
        var searching = this.props.filtr;

        return(
            <span>
        {
            (word.cz.includes(searching) || word.en.includes(searching)) ?
            <li className={word.hacky ? 'hacky col-md-4 col-sm-6' : 'col-md-4 col-sm-6'} >   

                <WordInput details={word} language="cz" index={this.props.index} updateWord={this.props.updateWord}/>
                <WordInput  details={word} language="en" index={this.props.index} updateWord={this.props.updateWord}/>
                <span className="cross" onClick={() => this.props.removeWord(this.props.index)} >x</span>

            </li>
            : null
       }
       </span>
        )
    }

}
{/* tohle bude jen vypisovat vysledky - bute to Stateless Function */}
export default Word;