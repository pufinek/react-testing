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
                        <button className="btn btn-danger disabled"  style={{marginLeft:20}}>Procvičit slovíčka</button>

                    </div>

                    <ul className="vocabulary-list">
                        {
                            Object
                                .keys(this.props.vocabulary)
                                .map(key => <Word key={key} index={key} details={this.props.vocabulary[key]} filtr={this.state.searching} updateWord={this.props.updateWord} removeWord={this.props.removeWord}/>)
                        }
                    </ul>
                </div>
		)
	}
	
}

export default ListOfWords;