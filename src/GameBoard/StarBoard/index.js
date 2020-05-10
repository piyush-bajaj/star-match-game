import React, { useState } from "react";
import StarsDisplay from "./StarsDisplay";
import PlayAgain from "./PlayAgain";

export default function StarBoard( props ) {

	return (
		<div className="left">
			{ props.gameDone !== 'active' ? ( <PlayAgain onClick={ props.onClick } gameStatus={ props.gameDone } /> ) : ( <StarsDisplay count={ props.count } /> ) }
		</div>
	);
}
