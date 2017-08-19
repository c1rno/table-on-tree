import React from 'react'

const TableAddCol = (props) => {
	const colIndex = props.index
	const onClickCallback = props.callback ? props.callback('COL', colIndex) : () => console.log('ERROR: <Empty callback>: COL', colIndex)
	return <div onClick={ onClickCallback } className="table-add-col"></div>
}

export default TableAddCol
