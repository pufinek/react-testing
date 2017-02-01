import React from 'react';
import WordInput from '../components/WordInput';

class Word extends React.Component{
    render(){
    	const word=this.props.details; //info o aktualnim slove
        let searching = this.props.filtr;

        return(
            <span>
        {
            (word.cz.includes(searching) || word.en.includes(searching)) ?
            <li className={word.hacky ? 'hacky col-md-4 col-sm-6' : 'col-md-4 col-sm-6'} >   

                <WordInput details={word} language="cz" index={this.props.index} updateWord={this.props.updateWord}/>
                <WordInput  details={word} language="en" index={this.props.index} updateWord={this.props.updateWord}/>
                { (!this.props.vyuka) ? <span className="cross" onClick={() => this.props.removeWord(this.props.index)}><span className="glyphicon glyphicon-trash" title="Smazat z databáze"></span></span> : <span className="cross" onClick={() => this.props.removeEducatedWord(this.props.index)}><span className="glyphicon glyphicon-remove" title="Smazat z procvičovaných"></span></span>}
                { (!this.props.vyuka) ? <span className="edu" onClick={() => this.props.addToEducation(this.props.index)}><span className="glyphicon glyphicon-education" title="Přidat k procvičovaným"></span></span> : null}

                {/*mazani položky neni možne pri studiu, jen v celém seznamu slovíček*/}

            </li>
            : null
       }
       </span>
        )
    }

}

Word.propTypes = {
    details:React.PropTypes.object.isRequired,
    filtr:React.PropTypes.string.isRequired,
    index:React.PropTypes.string.isRequired,
    updateWord:React.PropTypes.func.isRequired,
    vyuka:React.PropTypes.bool.isRequired,
    removeWord:React.PropTypes.func.isRequired,
}
{/* tohle bude jen vypisovat vysledky - bute to Stateless Function */}
export default Word;