import React from 'react';

class TestingGuide extends React.Component {
    render() {
        return (
            <div className="col-md-4 col-sm-6 testingGuide">
                <h2>TestingGuide</h2>
                <h3>Zvolte si typ testu</h3>
                <div className="row">
                    <button className="col-md-8 col-md-offset-2 btn btn-primary" type="submit">Procvičování písmen
                    </button>
                </div>
                <div className="row">
                    <button className="col-md-8 col-md-offset-2 btn btn-success" type="submit">Výuka slovíček</button>
                </div>
                <div className="row">
                    <button className="col-md-8 col-md-offset-2 btn btn-danger" type="submit">Procvičování slovíček
                    </button>
                </div>

            </div>
        )
    }

}
{/* tohle bude jen vypisovat vysledky - bute to Stateless Function */}

export default TestingGuide;