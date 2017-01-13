import React from 'react';

class TestInput extends React.Component{

	onChangeHandle(e){
		var writtenLetter=e.target.value;
		this.props.renderTest(writtenLetter);
		this.writtenLetter.value="";
	}


	render(){
		return (
			<span>
			{ this.props.testRunning ? //probíhá testování, protoze bezi Timer
				<input type="text" 
                        placeholder={this.props.aktualLetter} 
                        className="actualLetter col-md-12" 
                        ref={(input) => this.writtenLetter = (input)} 
                        onChange={(e) => this.onChangeHandle(e)}
                        id="actualLetter"
                        autoFocus
                />
            :   //testování ukonceno - vypnuty timer
            	<input type="text" 
                        placeholder="test ukončen" 
                        className="actualLetter col-md-12" 
                        disabled
                        id="actualLetter"
                        autoFocus
                />
			}</span>
				

		)
	}
}

export default TestInput;