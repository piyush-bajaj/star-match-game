import React, { useState } from "react";
import Utils from "../../Utils";

export default function StarBoard( props ) {

	const [stars, setStars] = useState( Utils.random( 1, 9 ) );

	return (
		<div className="left">
			{ Utils.range( 1, stars ).map( starId => <div key={ starId } className="star" /> ) }
		</div>
	);
}
