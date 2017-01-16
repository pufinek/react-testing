import React from 'react';


class Timer extends React.Component{

	constructor(){
		super();
		this.konecTestu = this.konecTestu.bind(this);
		this.tick = this.tick.bind(this);
		this.getTimeSpan = this.getTimeSpan.bind(this);
		//this.onClick = this.onClick.bind(this);
		//this.setLap = this.setLap.bind(this);
		this.reset = this.reset.bind(this);


		this.state={
		      isStart: true,
          elapsed: 0,
          diff: 0,
		}
	}
  componentWillUnmount(){
    this.konecTestu();
    this.reset();

  }
  componentDidMount(){
        var timer = setInterval(this.tick, 33);
          this.setState({
            isStart: true,
            timer: timer,
            start:Date.now()
          });
  }
	 konecTestu() { // clear timer
        this.props.trvaniTestu(this.state.elapsed);
        clearInterval(this.state.timer);
        this.setState({timer: undefined, isStart:false});
    }

	tick() {
        if(!this.props.testRunning){
          this.konecTestu;
        }else{
          var elapsed = Date.now() - this.state.start + this.state.diff;
        this.setState({elapsed: elapsed});
        }
        
    }

	getTimeSpan(elapsed) { // 754567(ms) -> "12:34.567"
        var m = String(Math.floor(elapsed/1000/60)+100).substring(1);
        var s = String(Math.floor((elapsed%(1000*60))/1000)+100).substring(1);
        //var ms = String(elapsed % 1000 + 1000).substring(1);
        return m+":"+s;
  }

	/*onClick() {
          var timer = setInterval(this.tick, 33);
          this.setState({
            isStart: true,
            timer: timer,
            //start: new Date(),
            start:this.props.startTestu
          });
      }*/

	reset() {
        clearInterval(this.state.timer);
        this.setState({
          timer: undefined,
          isStart: false,
          elapsed: 0,
          diff: 0,
        });
      }

	render(){
    var style={

      buttonKonec:{
          marginLeft:30,
          lineHeight:1,
          paddingTop: 3,
          paddingBottom:3
      }
    }

		return(
        <span>
          {this.getTimeSpan(this.state.elapsed)} 

          {this.state.isStart ? 
          <button type="submit" onClick={this.konecTestu} style={style.buttonKonec} className="btn btn-warning" >Ukončit test</button>
          : null

          }


        </span>
		)

	}
	
}

export default Timer;