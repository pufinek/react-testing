import React from 'react';
import { Link } from 'react-router';
import AddWord from './AddWord';
import StudyVocabulary from './StudyVocabulary';
import StopWatch from './StopWatch';

class TestingGuide extends React.Component {
        constructor(){
        super();
        this.showInfo= this.showInfo.bind(this);

        this.state={
            showInfo:false,
            newCz:'',
            newEn:''
        }

    }

    showInfo(cz, en){
        this.setState({showInfo:true, newCz:cz, newEn:en});
        setTimeout(function(){
                this.setState({showInfo:false})
            }.bind(this),
            3000);
        

    }


    render() {

        return (
                <div className="row">
                    <div className="col-md-4 col-sm-6 testingGuide">
                        <h2>Psaní všema 10</h2>
                        <h3>Zvolte si typ testu</h3>
                        <div className="row">
                            <Link className="col-md-8 col-md-offset-2 btn btn-primary" to="/testPismena">Procvičování písmen</Link>
                        </div>
                       {/*<div className="row">
                            <Link className="col-md-8 col-md-offset-2 btn btn-success" to="/vyuka">Výuka slovíček</Link>
                        </div>
                          <div className="row">
                            <Link className="col-md-8 col-md-offset-2 btn btn-danger" to="/testSlovicka">Procvičování slovíček
                            </Link>
                        </div>*/}
                        <button className="btn btn-warning" style={{position:'absolute', bottom:20, right:20}} onClick={()=> this.props.switchShowAllWords(true)}>
                            Zobraz všechna slovíčka
                        </button>
                    </div>

                 <StudyVocabulary vocabulary={this.props.vocabulary} addUsedWordsStudy={this.props.addUsedWordsStudy} usedWordsStudy={this.props.usedWordsStudy} switchShowAllWords={this.props.switchShowAllWords} />
                    {/*<StopWatch />*/}

                <div className="col-md-4 col-sm-12 addVocabulary-box" style={{position:'relative'}}>
                    <h2>Přidat slovíčko</h2>

                    <AddWord addVocabulary={this.props.addVocabulary} showInfo={this.showInfo}/>
                    <p>{this.state.showInfo ? `Přidáno nové slovíčko ${[this.state.newCz]} / ${[this.state.newEn]}` : ''}</p>

                

                         <div className="row">
                        <div className="col-md-12">    
                            {/* <button className="btn btn-primary" onClick={this.props.loadWords}>Načíst ze souboru</button>

                            nothing to upload
                          */}
                        </div>  
                    </div>
                </div>
                </div>
        )
    }

}
{/* tohle bude jen vypisovat vysledky - bute to Stateless Function */}

export default TestingGuide;