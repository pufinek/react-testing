import React from 'react';

class TestWrittenSymbols extends React.Component{


	render(){
		return (
			<div id="allWrittenLetters" className="col-md-12">
                {this.props.title}<br />
            </div>
		)
	}
}

export default TestWrittenSymbols;