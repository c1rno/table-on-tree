import React from 'react'

const TableAddRow = (props) => {
	const rowIndex = props.index
	const onClickCallback = props.callback ? props.callback('ROW', rowIndex) : () => console.log('ERROR: <Empty callback>: ROW', rowIndex)
	return <div onClick={ onClickCallback } className="table-add-row"></div>
}

export default TableAddRow
