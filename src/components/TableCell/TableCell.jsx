import React from 'react'

const TableCell = (props) => {
	const cell = props.col
	return (<div className="table-cell">
		<span className="table-cell__content">
			{ JSON.stringify(cell.id) }
		</span>
	</div>)
}

export default TableCell
