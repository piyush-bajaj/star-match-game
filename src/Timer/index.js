import React, { Component } from "react";



class Timer extends Component {

	state = {
		timeRemaining: 10
	};

	startTimer = () => {
		const interval = setInterval( () => {
			if ( this.state.timeRemaining === 0 ) {
				clearInterval( interval );
				return;
			}
			this.setState( {
				timeRemaining: this.state.timeRemaining - 1
			} )
		}, 1000 );
	};

	render() {
		return ( <div>
			<div className="timer">{ `Time Remaining: ${this.state.timeRemaining}` }</div>
		</div>
		);
	};

}

export default Timer;
