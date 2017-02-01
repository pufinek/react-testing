import React from 'react';
import Word from './Word';
import TestVocabulary from './TestVocabulary';

class ListOfWords extends React.Component{
    constructor(){
        super();
        this.handleChangeFiltr = this.handleChangeFiltr.bind(this);
        this.switchRunVocabularyTest = this.switchRunVocabularyTest.bind(this);

        this.state={
            searching:'',
            runVocabularyTest:false
        }
    }

    handleChangeFiltr(){
        let filtrInput = this.filtr.value;
        this.setState({searching:filtrInput});
    }
    switchRunVocabularyTest(e){
        e.preventDefault();
        let prom = this.state.runVocabularyTest;
        this.setState({runVocabularyTest:!prom});
    }


	render(){
		return(
            <div>{
                (this.state.runVocabularyTest) ?
                <TestVocabulary switchRunVocabularyTest={this.switchRunVocabularyTest} vocabulary={this.props.vocabulary} />
                :            
               
			    <div className="row">
                    <h2>{this.props.title}</h2>
                    <p>(Barevně označená slovíčka obsahují české znaky!)</p>

                    <div style={{marginBottom:20}}>
                        Filtr: <input type="text" ref={(input) => this.filtr =(input)} className="" onChange={() => this.handleChangeFiltr()} />
                        { //procvicovani pouze pokud array obsahuje vice jak 5 slovicek
                        (Object.values(this.props.vocabulary).length>=5) ? <button className="btn btn-danger" onClick={(e) => this.switchRunVocabularyTest(e)}  style={{marginLeft:20}}>Procvičit</button> : <button className="btn btn-danger disabled" title="minimum k procvičování je 5 slovíček"  style={{marginLeft:20}}>Procvičit</button>
                        }
                        

                    </div>
                    <div><p>Počet slovíček: <strong style={{fontSize:16, color:'red'}}>{Object.values(this.props.vocabulary).length}</strong>
                        {
                        (Object.values(this.props.vocabulary).length===0) ? ` (Slovíčka z databáze projdete nahoře v části v VÝUKOU)` : null
                        }</p></div>

                    <ul className="vocabulary-list">
                        {
                            Object
                                .keys(this.props.vocabulary)
                                .map(key => <Word key={key} index={key} details={this.props.vocabulary[key]} filtr={this.state.searching} updateWord={this.props.updateWord} removeWord={this.props.removeWord} addToEducation={this.props.addToEducation} removeEducatedWord={this.props.removeEducatedWord} vyuka={this.props.vyuka}/>)
                        }
                    </ul>
                </div>
            }
            </div>
		)
	}
}

ListOfWords.propTypes = {
    title: React.PropTypes.string.isRequired,
    vocabulary: React.PropTypes.object.isRequired,
    updateWord:React.PropTypes.func.isRequired,
    removeWord:React.PropTypes.func.isRequired,
    vyuka:React.PropTypes.bool.isRequired

}
export default ListOfWords;