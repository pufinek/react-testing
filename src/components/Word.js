import React from 'react';

class Word extends React.Component{
    render(){
        return(
            <li className={this.props.details.hacky ? 'hacky col-md-4 col-sm-6' : 'col-md-4 col-sm-6'}>
                <span><strong title="česky">cz:&nbsp;</strong>{this.props.details.cz}</span>
                <span><strong title="anglicky">en:&nbsp;</strong> {this.props.details.en}</span>
                <span className="cross">x</span>

            </li>
        )
    }

}
{/* tohle bude jen vypisovat vysledky - bute to Stateless Function */}
export default Word;