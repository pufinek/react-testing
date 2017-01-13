import React from 'react';
import AddWord from '../components/AddWord';
import Test from '../components/Test';


class TestLetters extends React.Component {
    constructor() {
        super();
        this.getParametrTest = this.getParametrTest.bind(this);
        this.handleTestOptionChange = this.handleTestOptionChange.bind(this);
        this.endTest = this.endTest.bind(this);

        this.state = {
            testShow:false,
            selectedTestOption: {'testType':'mala', 'testEnd':'nekonecno'}
        }
    }

    handleTestOptionChange(e, group){
        const selectedTestOption = {...this.state.selectedTestOption};
        selectedTestOption[group] = e.target.value;
        this.setState({selectedTestOption});
    }

    getParametrTest(event){
        event.preventDefault();
        this.setState({testShow:true})
    }

    endTest(){
        this.setState({testShow:false})
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
                        Velká písmena (a A b B) </label>
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
                        <label><input type="radio" value="chyby"  checked={this.state.selectedTestOption.testEnd === 'chyby'}  onChange={(e) => this.handleTestOptionChange(e, 'testEnd')} />Max 5 chyb</label>
                    </div>
                    <div className="radio">
                        <label><input type="radio" value="nekonecno" checked={this.state.selectedTestOption.testEnd === 'nekonecno'}  onChange={(e) => this.handleTestOptionChange(e, 'testEnd')}  />Nekonečný cyklus</label>
                    </div>
                </div>
            </div>
            <button type="submit" className={this.state.testShow ? 'btn btn-primary disabled' : 'btn btn-primary'} >Start</button>

            </form>
       
        {/*<p>počet znaků: {this.state.symbols.length}</p>
        <p>jeden náhodný znak: {randomZnak(this.state.symbols)}</p>
        <p>5 náhodný znak: {randomZnaky(this.state.symbols, 5)}</p>*/}
    </div>
    </div>
    <div className="row">
        <div className="col-md-12 testing-form">
            {
                (this.state.testShow) ? 

                (<div><Test selectedTestOption={this.state.selectedTestOption}/> 
                      <button type="submit" onClick={this.endTest} className="btn btn-warning" >Reset</button>
                    </div>): null



                 /* ? 

                <Test  selectedTestOption={this.state.selectedTestOption}/> <br />
               <button type="submit" onClick={this.endTest} className="btn btn-warning" >Restart</button></div>
                :
                null*/

            }
        </div>

    </div>
</div>
)
}
}
export default TestLetters;