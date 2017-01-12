import React from 'react';
import { render } from 'react-dom';

class TestActiveStatistic extends React.Component{
	constructor(){
		super();
		this.tick = this.tick.bind(this);
	}


    tick(){
    	const now=new Date().toLocaleTimeString();
    	//const now=Date.now();
    	//const timeSpent= new Date().setMilliseconds(Date.now() - this.props.startTestu);
        const element = (
    		<span>
      			{now}
    		</span>
  		);
  		render(
    		element,
    		document.getElementById('cas')
  		);
    }

	render(){
		var uspesnost = (this.props.statisticTest.ok / (this.props.statisticTest.ok+this.props.statisticTest.miss))*100;
		uspesnost = (isNaN(uspesnost) ? 0 : uspesnost.toFixed(4));
		setInterval(this.tick, 1000);


		return (
			    <div className="col-md-6 col-sm-12 statisticTest">
                        <h3>Průběh testu:</h3> 
                        <table className="table">
                            <tbody>
                            <tr >
                                <td className="text-green">Správně: </td>
                                <td className="text-green">{this.props.statisticTest.ok}</td>
                                <td className="text-red">Špatně: </td>
                                <td className="text-red">{this.props.statisticTest.miss}</td>
                            </tr>
                            </tbody>
                            <tfoot>
                            	<tr>
                            		<td colSpan="2">Úspěšnost:</td>
                            		<td colSpan="2">{`${[uspesnost]}%`}</td>
                            	</tr>
                            	<tr>              
                            		<td colSpan="2">Start testu:</td>
                            		{/*<td colSpan="2">{this.props.startTestu}</td>*/}
                            		<td colSpan="2">{this.props.startTestu}</td>
                            	</tr>
                            	<tr>              
                            		<td colSpan="2">Trvání testu:</td>
                            		<td colSpan="2" id="cas"></td>
                            	</tr>

                            </tfoot>
                        </table>
                </div>
		)
	}
}

export default TestActiveStatistic;