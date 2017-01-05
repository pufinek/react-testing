import React from 'react';

class TestingGuide extends React.Component {
    render() {
        return (
            <div className="col-md-4 col-sm-6">
                <h2>TestingGuide</h2>
                <h3>Zvolte si typ testu</h3>
                <div className="row">
                    <button className="col-md-4 btn btn-primary" type="submit">Procvičování písmen</button>
                    <button className="col-md-4 btn btn-success" type="submit">Výuka slovíček</button>
                    <button className="col-md-4 btn btn-danger" type="submit">Procvičení slovíček</button>
                </div>

            </div>
        )
    }

}
{/* tohle bude jen vypisovat vysledky - bute to Stateless Function */}

export default TestingGuide;