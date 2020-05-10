import React from 'react'

function PlayAgain( props ) {

	const gameStatusDisplay = () => {
		return props.gameStatus === 'won' ? <div><div>Viola, You have won the game.</div><div>!!!Congratulations!!!</div></div> : <div><div>Sorry, you lost the game.</div><div>!!!Better Luck Next Time!!!</div></div>;
	}

	return (
		<div className="game-done">
			{ gameStatusDisplay() }
			<button onClick={ props.onClick }>Play Again</button>
		</div>
	);
}

export default PlayAgain
