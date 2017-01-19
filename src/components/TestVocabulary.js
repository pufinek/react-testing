import React from 'react';
import TestWord from './TestWord';

class TestVocabulary extends React.Component{
	
	render(){
		return(
			<div className="row">
        		<div className="col-md-12 testing-form">

                <div><TestWord vocabulary={this.props.vocabulary} /> 
                      <button type="submit" onClick={this.props.switchRunVocabularyTest} className="btn btn-warning" >Přehled testovaných slovíček</button>
                    </div>
        		</div>
    		</div>
		)
	}
}

export default TestVocabulary;