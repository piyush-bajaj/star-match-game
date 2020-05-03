import React from 'react'

function NumberButton( props ) {

	const colors = {
		available: 'lightgray',
		used: 'lightgreen',
		wrong: 'lightcoral',
		candidate: 'blue'
	}
	return (
		<button
			className="number"
			onClick={ () => props.onClick( props.number, props.status ) }
			style={ { backgroundColor: colors[props.status] } }>
			{ props.number }
		</button>
	);
}

export default NumberButton
