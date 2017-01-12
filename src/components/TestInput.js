import React from 'react';

class TestInput extends React.Component{

	onChangeHandle(e){
		var writtenLetter=e.target.value;
		this.props.renderTest(writtenLetter);
		this.writtenLetter.value="";
	}


	render(){
		return (
				<input type="text" 
                        placeholder={this.props.aktualLetter} 
                        className="actualLetter col-md-12" 
                        ref={(input) => this.writtenLetter = (input)} 
                        onChange={(e) => this.onChangeHandle(e)}
                        id="actualLetter"
                        autoFocus
                />

		)
	}
}

export default TestInput;