import React, { useState } from "react";
import StarBoard from "./StarBoard";
import NumberBoard from "./NumberBoard";
import Utils from "../Utils";

function GameBoard( props ) {

	const [stars, setStars] = useState( Utils.random( 1, 9 ) );
	const [availableNumbers, setAvailableNumbers] = useState( Utils.range( 1, 9 ) );
	const [candidateNumbers, setCandidateNumbers] = useState( [] );

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

	let gameDone = availableNumbers.length === 0 && props.secondsLeft >= 0 ? 'won' : props.secondsLeft === 0 ? 'lost' : 'active';

	const onNumberClick = ( number, status ) => {
		if ( gameDone === 'won' ) {
			return;
		}
		else if ( gameDone === 'lost' ) {
			return;
		}
		props.startTimer();
		if ( status === "used" ) {
			return;
		}
		const newCandidates = status === "available" ? candidateNumbers.concat( number ) : candidateNumbers.filter( cn => cn !== number );
		if ( Utils.sum( newCandidates ) !== stars ) {
			setCandidateNumbers( newCandidates );
		} else {
			const newAvailableNums = availableNumbers.filter( n => !newCandidates.includes( n ) );
			setStars( Utils.randomSumIn( newAvailableNums, 9 ) );
			setAvailableNumbers( newAvailableNums );
			setCandidateNumbers( [] );
		}
	}

	const resetGame = () => {
		setStars( Utils.random( 1, 9 ) );
		setAvailableNumbers( Utils.range( 1, 9 ) );
		setCandidateNumbers( [] );
		gameDone = 'active';
		props.resetGame();
	};

	return (
		<div className="body">
			<StarBoard count={ stars } gameDone={ gameDone } onClick={ resetGame } />
			<NumberBoard numberStatus={ numberStatus } onClick={ onNumberClick } />
		</div>
	);
}

export default GameBoard;