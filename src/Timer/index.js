import React from "react";

function Timer( props ) {
	return ( <div>
		<div className="timer">{ `Time Remaining: ${props.secondsLeft}` }</div>
	</div>
	);
}

export default Timer;
