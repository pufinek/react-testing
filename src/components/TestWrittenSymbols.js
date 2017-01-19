import React from 'react';

class TestWrittenSymbols extends React.Component{


	render(){
		return (
			<div id="allWrittenLetters" className="col-md-12">
                <span style={{color:'black', display:'block'}}>{this.props.title}</span>
            </div>
		)
	}
}

export default TestWrittenSymbols;