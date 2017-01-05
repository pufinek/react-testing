import React from 'react';

class AddWord extends React.Component{

    createWord(event){
        event.preventDefault();
        const word = {
            cz: this.cz.value,
            en: this.en.value,
            hacky: this.hacky.checked
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
                <div className="col-md-12 checkbox">
                    <label><input ref={(input) => this.hacky = input} type="checkbox" /> Diakritika v CZ?</label>
                </div>
                <button type="submit" className="btn btn-default">Přidat</button>
            </form>


                </div>
        )
    }

}

export default AddWord;