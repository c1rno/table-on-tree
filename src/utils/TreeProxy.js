import update from 'immutability-helper'
import makeTree from './TreeInterface'

class TreeProxy {
	constructor() {
		this.versions = []
		this.currentVersion = null
	}

	_checkVersion() {
		if (typeof(this.currentVersion) !== 'number') {
			if (!this.versions[0]) {
				return false
			}
			this.currentVersion = 0
			return true
		}
		return true
	}

	_changeVersion(inscrease = true) {
		if (this._checkVersion()) {
			const newVersion = inscrease ? this.currentVersion + 1 : this.currentVersion - 1
			if (!this.versions[newVersion]) {
				return false
			}
			this.currentVersion = newVersion
			return true
		}
		return false
	}

	/** Call it after adding smth to versions */
	inscreaseVersion() {
		return this._changeVersion(true)
	}

	decreaseVersion() {
		return this._changeVersion(false)
	}

	getTree() {
		return this.versions[this.currentVersion]
	}

	setTree(tree, dropHistory = false) {
		if (!dropHistory) {
			this.versions.push(tree)
			this.inscreaseVersion()
		} else {
			this.versions = [tree]
			this.currentVersion = 0
		}

	}

	getTable(table) {
		const currentTree = this.getTree()
		const treeParser = (tree) => {
			const cols = []
			let subTree = tree
			while (subTree) {
				cols.push(subTree)
				subTree = subTree.children[0]
			}
			return cols
		}
		const matrix = []
		for (let col of currentTree.children) {
			matrix.push(treeParser(col))
		}
		const transpose = (_matrix) => {
			const m = _matrix.length
			const n = _matrix[0].length
			const _matrix_trans = []
			for (let i = 0; i < n; i++) {
				_matrix_trans[i] = []
				for (let j = 0; j < m; j++) {
					_matrix_trans[i][j] = _matrix[j][i]
				}
			}
			return _matrix_trans
		}
		const makeTable = (_matrix) => {
			const table = []
			for (let row of _matrix) {
				table.push({children: row})
			}
			return table
		}
		return makeTable(transpose(matrix))
	}

	addRow(index) {
		console.log(`addRow(${index})`)
	}

	addCol(index) {
		console.log(`addCol(${index})`)
	}

}

const tree = new TreeProxy()
tree.setTree(makeTree().children[0])
export default tree
