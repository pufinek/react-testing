import React from 'react';
import { Link } from 'react-router';
import AddWord from './AddWord';
import StudyVocabulary from './StudyVocabulary';


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
                        <h2>Rozcestníček</h2>
                        <h4>Psaní všema 10</h4>
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
                        <div className="row">
                        <h4>Databáze slovíček</h4>
                        <button className="col-md-8 col-md-offset-2 btn btn-warning" onClick={()=> this.props.switchShowAllWords(true)}>
                            Zobraz všechna slovíčka
                        </button>
                        <button className="col-md-8 col-md-offset-2 btn" onClick={() => this.props.switchShowAllWords(false)}>Zobraz vyučovaná slovíčka</button>
                        </div>
                    </div>

                 <StudyVocabulary vocabulary={this.props.vocabulary} addUsedWordsStudy={this.props.addUsedWordsStudy} usedWordsStudy={this.props.usedWordsStudy} switchShowAllWords={this.props.switchShowAllWords} clearUsedWordsStudy={this.props.clearUsedWordsStudy}/>
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

TestingGuide.propTypes = {
    switchShowAllWords:React.PropTypes.func.isRequired,
    addUsedWordsStudy:React.PropTypes.func.isRequired,
    usedWordsStudy:React.PropTypes.object.isRequired,
    clearUsedWordsStudy:React.PropTypes.func.isRequired,
    addVocabulary:React.PropTypes.func.isRequired

}

export default TestingGuide;