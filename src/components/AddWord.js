import React from 'react';
import {maHacky} from '../helpers';

class AddWord extends React.Component{

    createWord(event){
        event.preventDefault();
       /* var reg = /[ěščřžýáíéúů]/gi;
        var slovo = this.cz.value;
        var ceskeZnaky = slovo.match(reg);
        const maHacky= (ceskeZnaky!==null) ? true :false;*/
        const diakritika = maHacky(this.cz.value);

        const word = {
            cz: this.cz.value,
            en: this.en.value,
            hacky: diakritika
        }
        this.props.addVocabulary(word);
        this.addForm.reset();
    }




    render(){
        return(
            <div className="" >

            <form ref={(input) => this.addForm = (input)} className="" onSubmit={(e) => this.createWord(e)}>

                <div className="col-md-6 form-group">
                    <label htmlFor="cz">Česky (CZ):</label>
                    <input type="text" ref={(input) => this.cz = input} className="form-control" id="cz" />
                </div>
                <div className="col-md-6 form-group">
                    <label htmlFor="en">Anglicky (EN):</label>
                    <input type="text" ref={(input) => this.en = input} className="form-control" id="en"/>
                </div>
                <button type="submit" className="btn btn-default">Přidat</button>
            </form>


                </div>
        )
    }

}

export default AddWord;