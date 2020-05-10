import React, { useState, useEffect } from "react";
import Header from "./Header";
import GameBoard from "./GameBoard";
import Timer from "./Timer";

function App() {

	const [secondsLeft, setSecondsLeft] = useState( 10 );
	const [timerStarted, setTimerStarted] = useState( false );

	const startTimer = () => {
		setTimerStarted( true );
	};

	const resetTimer = () => {
		setSecondsLeft( 10 );
	}

	useEffect( () => {
		const timeOut = setTimeout( () => {
			if ( timerStarted && secondsLeft > 0 ) {
				setSecondsLeft( secondsLeft - 1 );
			}
			else if ( secondsLeft === 0 ) {
				setTimerStarted( false );
			}
		}, 1000 );
		return () => {
			clearTimeout( timeOut );
			// setTimerStarted( false );
		}
	} )

	return (
		<div className="game">
			<Header title="Pick 1 or more numbers that sum to the number of stars" />
			<GameBoard startTimer={ startTimer } secondsLeft={ secondsLeft } resetGame={ resetTimer } />
			<Timer secondsLeft={ secondsLeft } />
		</div>
	);
}

export default App;