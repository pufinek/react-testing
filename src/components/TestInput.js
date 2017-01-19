import React from 'react';

class TestInput extends React.Component{
    constructor(){
        super();
        this.onSubmitHandle = this.onSubmitHandle.bind(this);
    }

	onSubmitHandle(e){
        e.preventDefault();
		let writtenWord=this.writtenWord.value;
		this.props.renderTest(writtenWord);
		this.writtenWord.value="";
	}


	render(){
		return (
            <form  onSubmit={(e) => this.onSubmitHandle(e)}>
			{ this.props.testRunning ? //probíhá testování, protoze bezi Timer
				<input type="text" 
                        placeholder={this.props.actualWord} 
                        className="actualLetter col-md-12" 
                        ref={(input) => this.writtenWord = (input)} 
                        id="actualWord"
                        autoComplete="off"
                        autoFocus
                />
            :   //testování ukonceno - vypnuty timer
            	<input type="text" 
                        placeholder="test ukončen" 
                        className="actualLetter col-md-12" 
                        disabled
                        id="actualWord"
                        autoFocus
                />

			}</form>
				

		)
	}
}
TestInput.propTypes = {
    renderTest:React.PropTypes.func.isRequired,
    testRunning:React.PropTypes.bool.isRequired,
    actualWord:React.PropTypes.string.isRequired,
}

export default TestInput;