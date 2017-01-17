import React from 'react';
import Word from '../components/Word';

class ListOfWords extends React.Component{
    constructor(){
        super();
        this.handleChangeFiltr = this.handleChangeFiltr.bind(this);

        this.state={searching:''}
    }

    handleChangeFiltr(){
        var filtrInput = this.filtr.value;
        this.setState({searching:filtrInput});
    }

	render(){
		return(
			    <div className="row">
                    <h2>{this.props.title}</h2>
                    <p>(Barevně označená slovíčka obsahují české znaky!)</p>

                    <div style={{marginBottom:20}}>
                        Filtr: <input type="text" ref={(input) => this.filtr =(input)} className="" onChange={() => this.handleChangeFiltr()} />
                        {
                        (Object.values(this.props.vocabulary).length>=5) ? <button className="btn btn-danger"  style={{marginLeft:20}}>Procvičit</button> : <button className="btn btn-danger disabled" title="minimum k procvičování je 5 slovíček"  style={{marginLeft:20}}>Procvičit</button>
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
                                .map(key => <Word key={key} index={key} details={this.props.vocabulary[key]} filtr={this.state.searching} updateWord={this.props.updateWord} removeWord={this.props.removeWord} vyuka={this.props.vyuka}/>)
                        }
                    </ul>
                </div>
		)
	}
	
}

export default ListOfWords;