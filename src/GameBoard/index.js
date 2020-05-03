import React, { useState } from "react";
import StarBoard from "./StarBoard";
import NumberBoard from "./NumberBoard";
import Utils from "../Utils";

function GameBoard() {

	const [stars, setStars] = useState( Utils.random( 1, 9 ) );
	const [availableNumbers, setavailableNumbers] = useState( Utils.range( 1, 9 ) );
	const [candidateNumbers, setcandidateNumbers] = useState( [] );

	const candidatesAreWrong = Utils.sum( candidateNumbers ) > stars;

	const numberStatus = ( number ) => {
		if ( !availableNumbers.includes( number ) ) {
			return "used";
		}
		if ( candidateNumbers.includes( number ) ) {
			return candidatesAreWrong ? "wrong" : "candidate";
		}
		return "available";
	};

	return (
		<div className="body">
			<StarBoard count={ stars } />
			<NumberBoard numberStatus={ numberStatus } />
		</div>
	);
}

export default GameBoard;