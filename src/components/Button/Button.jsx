import React from 'react'

const Button = (props) => {
	const name = props.name || 'Unnamed button'
	const callback = props.callback ? props.callback : () => console.log(`${name} havn't callback`)
	return <button type="button" className="btn btn-default" onClick={ callback }>
		{name}
	</button>
}

export default Button
