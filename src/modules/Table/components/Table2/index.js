import React from 'react'
import Table from '../Table'
import makeTree from 'utils/TreeInterface'

export default class Table2 extends Table {

	componentWillMount() {
		this.tree.setTree(makeTree(2).children[0], true)
		this.state = {
			rows: this.tree.getTable(),
			header: 'Harder example'
		}
	}

}
