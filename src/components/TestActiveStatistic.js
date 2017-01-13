import React from 'react';
import { render } from 'react-dom';
import Timer from './Timer';


class TestActiveStatistic extends React.Component{

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
                            		<td colSpan="2">{this.props.startTestuString}</td>
                            	</tr>

                            	<tr>              
                            		<td colSpan="2">Trvání testu:</td>
                            		<td colSpan="2" ><Timer endTest={this.props.endTest} testRunning={this.props.testRunning} trvaniTestu={this.props.trvaniTestu} /></td>
                            	</tr>

                            </tfoot>
                        </table>
                </div>
		)
	}
}

export default TestActiveStatistic;