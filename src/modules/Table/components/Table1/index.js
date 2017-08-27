import React from 'react'
import Table from '../Table'
import makeTree from 'utils/TreeInterface'

export default class Table1 extends Table {

	componentWillMount() {
		this.tree.setTree(makeTree(1).children[0], true)
		this.state = {
			rows: this.tree.getTable(),
			header: 'A bit more complicated example'
		}
	}

}
