import React from "react";
import Utils from "../../../Utils"

function StarsDisplay( props ) {
	return (
		<React.Fragment>
			{ Utils.range( 1, props.count ).map( starId => <div key={ starId } className="star" /> ) }
		</React.Fragment>
	)
}

export default StarsDisplay
