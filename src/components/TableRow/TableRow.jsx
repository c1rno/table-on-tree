import React from 'react'
import TableCell from '../TableCell'
import TableAddCol from '../TableAddCol'

const TableRow = (props) => {
	const cols = props.cols.map(
		(col, col_index, cols) => { return (
			<div key={ col_index } className="table-row__cell">
				<TableAddCol index={ col_index } callback={props.callback} />
				<TableCell col={ col } />
			</div>
		)}
	)
	cols.push(
		<div key={ props.cols.length } className="table-row__cell">
			<TableAddCol index={ props.cols.length } callback={props.callback} />
		</div>
	)

	return <div className="table-row">{ cols }</div>
}

export default TableRow
