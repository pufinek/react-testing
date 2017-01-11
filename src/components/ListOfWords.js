import React from 'react';
import Word from '../components/Word';

class ListOfWords extends React.Component{
	render(){
		return(
			    <div className="row">
                    <h2>Slovíčka v databázi</h2>
                    <p>(Barevně označená slovíčka obsahují české znaky!)</p>
                    <ul className="vocabulary-list">
                        {
                            Object
                                .keys(this.props.vocabulary)
                                .map(key => <Word key={key} index={key} details={this.props.vocabulary[key]} updateWord={this.props.updateWord} removeWord={this.props.removeWord}/>)
                        }

                    </ul>
                </div>
		)
	}
	
}

export default ListOfWords;