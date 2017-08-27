import React from 'react'
import Table from '../Table'
import TreeProxy from 'utils/TreeProxy'
import makeTree from 'utils/TreeInterface'

export default class Table1 extends Table {

	componentWillMount() {
		TreeProxy.setTree(makeTree(1).children[0], true)
		this.state = {
			rows: TreeProxy.getTable(),
			header: 'A bit more complicated example'
		}
	}

}
