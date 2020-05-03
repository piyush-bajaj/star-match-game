import React from "react";
import StarBoard from "./StarBoard";
import NumberBoard from "./NumberBoard";

function GameBoard() {
	return (
		<div className="body">
			<StarBoard />
			<NumberBoard />
		</div>
	);
}

export default GameBoard;