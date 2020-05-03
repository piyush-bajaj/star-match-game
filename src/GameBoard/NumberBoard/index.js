import React from "react";
import Utils from "../../Utils";
import NumberButton from "./NumberButton";

function NumberBoard( props ) {
	return (
		<div className="right">
			{ Utils.range( 1, 9 ).map( number =>
				<NumberButton
					key={ number }
					number={ number }
					status={ props.numberStatus( number ) }
					onClick={ props.onClick } />
			) }
		</div>
	);
}

export default NumberBoard;
