import React from "react";
import Header from "./Header";
import GameBoard from "./GameBoard";
import Timer from "./Timer";

function App() {
	return (
		<div className="game">
			<Header title="Pick 1 or more numbers that sum to the number of stars" />
			<GameBoard />
			<Timer />
		</div>
	);
}

export default App;