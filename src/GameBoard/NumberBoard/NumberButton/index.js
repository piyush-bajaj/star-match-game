import React from 'react'

function NumberButton( props ) {
	return (
		<button className="number" onClick={ () => console.log( props.number ) }>{ props.number }</button>
	);
}

export default NumberButton
