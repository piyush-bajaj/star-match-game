import React, { useState } from "react";
import Utils from "../../Utils";

export default function StarBoard( props ) {

	return (
		<div className="left">
			{ Utils.range( 1, props.count ).map( starId => <div key={ starId } className="star" /> ) }
		</div>
	);
}
