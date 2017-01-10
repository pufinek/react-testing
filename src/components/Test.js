import React from 'react';
import {randomZnak, randomZnaky} from '../helpers';

class Test extends React.Component {
  /*  constructor(){
        super();
        this.randomVocabulary = this.randomVocabulary.bind(this);
        this.vocabularyEn = this.vocabularyEn.bind(this);
    }

    randomVocabulary(){
        const letters=[
            {cz:'chlapec', en:'boy', hacky:false},
            {cz:'fotbal', en:'football', hacky:false},
            {cz:'překážka', en:'obstruction', hacky:true},
            {cz:'kniha', en:'book', hacky:false},
            {cz:'cíl', en:'goal', hacky:false},
            {cz:'klíč', en:'key', hacky:true}
        ];
        const randomIndex=Math.floor(Math.random() * (letters.length-1));
        console.log(randomIndex);
        //const enVyraz=letters[randomIndex].en;
       // console.log(enVyraz);
        return randomIndex;
    }


    vocabularyEn(index){
        const letters=[
            {cz:'chlapec', en:'boy', hacky:false},
            {cz:'fotbal', en:'football', hacky:false},
            {cz:'překážka', en:'obstruction', hacky:true},
            {cz:'kniha', en:'book', hacky:false},
            {cz:'cíl', en:'goal', hacky:false},
            {cz:'klíč', en:'key', hacky:true}
        ];
        console.log(index);
        return letters[index].en;
    }*/

    render() {
        return (
            <div className="testing-form" >
                {/*<h2>Napište slovo: <strong>{this.vocabularyEn(this.randomVocabulary())}</strong></h2>
                <input type="text" required placeholder={this.vocabularyEn(this.randomVocabulary())} />
                <button type="submit" >Kontrola</button>*/}
                <h2>Test</h2>
            </div>
        )
    }
}

export default Test;