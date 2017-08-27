import React from 'react'

const Info = () => { return (
	<div className="info">
		<h2 className="info__header">
			Home
		</h2>
		<h3 className="info__sub-header">
			Description
		</h3>
		<p className="info__text">
			It's an app which may inject rows and colums to existing table. Where are two abstraction level:
		</p>
		<ul>
			<li>Data layer</li>
			<li>Representation layer</li>
		</ul>
		<h4>
			Data layer
		</h4>
		<p>
			Data layer based on immutable tree data-structure.
			Immutability is used to make undo&amp;redo-operations.
		</p>
		<h4>
			Representation layer
		</h4>
		<p>
			It's just a react app with some handlers which has ability to carrier user interractions to underlying data-level.
		</p>
	</div>
)}

export default Info
