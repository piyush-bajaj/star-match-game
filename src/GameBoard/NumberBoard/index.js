import React from "react";
import Utils from "../../Utils";

function NumberBoard( props ) {
	return (
		<div className="right">
			{ Utils.range( 1, 9 ).map( number => <button key={ number } className="number">{ number }</button> ) }
		</div>
	);
}

export default NumberBoard;
