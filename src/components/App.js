import React from 'react';
//import TestingForm from '../components/TestingForm';
import TestingGuide from '../components/TestingGuide';
import Statistic from '../components/Statistic';
import Word from '../components/Word';
import AddWord from '../components/AddWord';


class App extends React.Component {
    constructor() {
        super();

        this.addVocabulary = this.addVocabulary.bind(this);

        this.state = {
            vocabulary: {},
            statistic: {},
            symbols: "yxcvbnmasdfghjklqwertzuiop,.(){}-;+ěščřžýáíéYXCVBNMASDFGHJKLQWERTZUIOP+ĚŠČŘŽÝÁÍÉ"
        }
    }

    addVocabulary(Word) {
        const vocabulary = {...this.state.vocabulary};
        const timestamp = Date.now();

        vocabulary[`key-${timestamp}`] = Word;
        this.setState({vocabulary});
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <TestingGuide />

                    <Statistic />

                    <div className="col-md-4 col-sm-12">
                        <h2>Přidat slovíčko</h2>
                        <AddWord addVocabulary={this.addVocabulary}/>

                    </div>
                </div>
                <div className="row">
                    <h2>Slovíčka v databázi</h2>
                    <ul className="vocabulary-list">
                        {
                            Object
                                .keys(this.state.vocabulary)
                                .map(key => <Word key={key} index={key} details={this.state.vocabulary[key]}/>)
                        }

                    </ul>
                </div>
            </div>

        )
    }
}

export default App;