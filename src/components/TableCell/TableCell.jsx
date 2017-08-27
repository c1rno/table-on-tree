import React from 'react'

const TableCell = (props) => {
	const cell = props.col || { data: { id: null } }
	return (<div className="table-cell">
		<span className="table-cell__content">
			{ JSON.stringify(cell.data ? cell.data.id : cell.data || cell) }
		</span>
	</div>)
}

export default TableCell
