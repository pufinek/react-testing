import React from 'react';
import AddWord from '../components/AddWord';
import Test from '../components/Test';


class TestLetters extends React.Component {
    constructor() {
        super();
        this.getParametrTest = this.getParametrTest.bind(this);
        this.handleTestOptionChange = this.handleTestOptionChange.bind(this);

        this.state = {
            testRunning:false,
            selectedTestOption: {'testType':'mala', 'testEnd':'chyby'}
        }
    }

    handleTestOptionChange(e, group){
        const selectedTestOption = {...this.state.selectedTestOption};
        selectedTestOption[group] = e.target.value;
        this.setState({selectedTestOption});
    }

    getParametrTest(event){
        event.preventDefault();
        this.setState({testRunning:true})
    }


render() {
return (
<div className="container">


    <div className="row">
    <div className="col-md-12">
        <h2>Parametry testu:</h2>
        <form onSubmit={(e) => this.getParametrTest(e)}>
            <div className="row">
                <div className="col-md-6">
                    <h3>Typ testu</h3>
                    
                    <div className="radio"><label>
                        <input type="radio" value="mala" checked={this.state.selectedTestOption.testType === 'mala'} onChange={(e) => this.handleTestOptionChange(e, 'testType')} />
                        Malá písmena (a b c)</label>
                    </div>
                    <div className="radio"><label>
                        <input type="radio" value="velka" checked={this.state.selectedTestOption.testType === 'velka'} onChange={(e) => this.handleTestOptionChange(e, 'testType')} />
                        Velká písmena (A B C) </label>
                    </div>
                    <div className="radio"><label>
                        <input type="radio" value="malaDiakritika" checked={this.state.selectedTestOption.testType === 'malaDiakritika'} onChange={(e) => this.handleTestOptionChange(e, 'testType')}/>
                        Malá + diakritika (a á c č)</label>
                    </div>
                    <div className="radio"><label>
                        <input type="radio"  value="vse" checked={this.state.selectedTestOption.testType === 'vse'} onChange={(e) => this.handleTestOptionChange(e, 'testType')} />
                        Vše (a á A Á)</label>
                    </div>
                </div>

                <div className="col-md-6">
                    <h3>Ukončení testu</h3>
                    
                    <div className="radio">
                        <label><input type="radio" value="cas" checked={this.state.selectedTestOption.testEnd === 'cas'}  onChange={(e) => this.handleTestOptionChange(e, 'testEnd')}  />30 znaků na čas</label>
                    </div>
                    <div className="radio">
                        <label><input type="radio" value="chyby"  checked={this.state.selectedTestOption.testEnd === 'chyby'}  onChange={(e) => this.handleTestOptionChange(e, 'testEnd')} />Jen 3 chyby</label>
                    </div>
                    <div className="radio">
                        <label><input type="radio" value="nekonecno" checked={this.state.selectedTestOption.testEnd === 'nekonecno'}  onChange={(e) => this.handleTestOptionChange(e, 'testEnd')}  />Nekonečný cyklus</label>
                    </div>
                </div>
            </div>

            <button type="submit" className="btn btn-primary">Start</button>
        </form>
       
        {/*<p>počet znaků: {this.state.symbols.length}</p>
        <p>jeden náhodný znak: {randomZnak(this.state.symbols)}</p>
        <p>5 náhodný znak: {randomZnaky(this.state.symbols, 5)}</p>*/}
    </div>
    </div>
    <div className="row">
        <div className="col-md-12 testing-form">
            {
                (this.state.testRunning) ? <Test selectedTestOption={this.state.selectedTestOption} /> : null

            }
        </div>

    </div>
</div>
)
}
}
export default TestLetters;