import update from 'immutability-helper'

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
		const ret = this._changeVersion(true)
		console.log(`inscreaseVersion ${ret}, current ${this.currentVersion}`)
		return ret
	}

	decreaseVersion() {
		const ret = this._changeVersion(false)
		console.log(`decreaseVersion ${ret}, current ${this.currentVersion}`)
		return ret
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
			const n = _matrix.map((elem) => elem.length).reduce((first, second) => Math.max(first, second))
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
		const currentTree = this.getTree()
		let partiallyUpdatedTree = currentTree
		const childFinder = (index_) => {
			let childIndex = 0
			const _childFinder = (child) => {
				if (index_ === 0 || childIndex === index_ - 1) {
					return updateLastChild(child)
				}

				if (!child || !child.children) { return }

				childIndex += 1
				return update(child, {
					children: {
						[0]: {$apply: _childFinder}
					}
				})
			}
			return _childFinder
		}
		const updateLastChild = (child) => {
			if (!child) { return }

			let updatedChild = update(child, {})
			let updatedSubChild = update(child, {
				parent: {$set: updatedChild}
			})
			updatedChild = update(updatedChild, {
				children: {
					[0]: {$set: updatedSubChild}
				}
			})
			return updatedChild
		}
		for (let i = 0; i < currentTree.children.length; i++) {
			const updater = childFinder(index)
			partiallyUpdatedTree = update(partiallyUpdatedTree, {
				children: {
					[i]: {$apply: updater}
				}
			})
		}
		this.setTree(partiallyUpdatedTree)
	}

	addCol(index) {
		console.log(`addCol(${index})`)
		const currentTree = this.getTree()
		const newTree = update(currentTree, {children: {$splice: [
			[index, 0, currentTree.children[index] ? currentTree.children[index]: currentTree.children[currentTree.children.length - 1]]
		]}})
		this.setTree(newTree)
	}

}

const tree = new TreeProxy()
export default tree
