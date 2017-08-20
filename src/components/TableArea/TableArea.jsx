import React from 'react'
import TableRow from '../TableRow'
import TableAddRow from '../TableAddRow'

const TableArea = (props) => {
	const rows = props.rows.map(
		(row, row_index, rows) => { return (
			<div key={ row_index } className="table-area__row">
				<TableAddRow index={ row_index } callback={props.callback} />
				<TableRow cols={ row.children } callback={props.callback} />
			</div>
		)}
	)
	rows.push(
		<div key={ props.rows.length } className="table-area__row">
			<TableAddRow index={ props.rows.length } callback={props.callback} />
		</div>
	)

	return (<div className="table-area">
		<div className="table-area__content">
			{ rows }
		</div>
	</div>)
}

export default TableArea
